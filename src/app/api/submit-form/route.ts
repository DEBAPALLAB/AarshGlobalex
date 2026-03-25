import { NextRequest, NextResponse } from 'next/server';

const APPSCRIPT_URL = process.env.APPSCRIPT_URL || '';

export async function POST(request: NextRequest) {
    try {
        if (!APPSCRIPT_URL) {
            return NextResponse.json(
                { status: 'error', error: 'Form submission endpoint is not configured.' },
                { status: 500 }
            );
        }

        const body = await request.json();
        const { type } = body;

        if (!type || !['ENQ', 'MSG'].includes(type)) {
            return NextResponse.json(
                { status: 'error', error: 'Invalid form type. Expected "ENQ" or "MSG".' },
                { status: 400 }
            );
        }

        // Validate required fields based on type
        if (type === 'ENQ') {
            if (!body.phone || !body.name) {
                return NextResponse.json(
                    { status: 'error', error: 'Name and phone are required for enquiries.' },
                    { status: 400 }
                );
            }
        } else {
            if (!body.name || !body.message) {
                return NextResponse.json(
                    { status: 'error', error: 'Name and message are required for contact messages.' },
                    { status: 400 }
                );
            }
        }

        // Prefix phone with apostrophe so Sheets treats it as text (not a formula)
        const payload = { ...body };
        if (payload.phone) {
            payload.phone = "'" + payload.phone;
        }

        // Forward the payload to the AppScript endpoint
        const response = await fetch(APPSCRIPT_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        const result = await response.json();

        if (result.status === 'success') {
            return NextResponse.json({ status: 'success' });
        }

        return NextResponse.json(
            { status: 'error', error: result.error || 'Submission failed.' },
            { status: 502 }
        );
    } catch (error) {
        console.error('Form submission error:', error);
        return NextResponse.json(
            { status: 'error', error: 'An unexpected error occurred.' },
            { status: 500 }
        );
    }
}
