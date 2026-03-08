import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), 'src/z-data/categories.json');
        const fileContents = await fs.readFile(filePath, 'utf8');
        const data = JSON.parse(fileContents);
        return NextResponse.json(data);
    } catch (error) {
        console.error("API Error: Failed to fetch categories", error);
        return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 });
    }
}
