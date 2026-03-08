"use client";

import React, { useState, useRef, useEffect } from 'react';
import SafeImage from './SafeImage';

interface ProductImageZoomProps {
    src: string;
    alt: string;
    zoomLevel?: number;
}

const ProductImageZoom: React.FC<ProductImageZoomProps> = ({
    src,
    alt,
    zoomLevel = 2.5
}) => {
    const [showZoom, setShowZoom] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const imageRef = useRef<HTMLDivElement>(null);
    const [bgPos, setBgPos] = useState('0% 0%');

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!imageRef.current) return;

        const { left, top, width, height } = imageRef.current.getBoundingClientRect();

        // Calculate position relative to image
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;

        // Ensure within bounds
        const boundedX = Math.max(0, Math.min(100, x));
        const boundedY = Math.max(0, Math.min(100, y));

        setMousePos({ x: e.clientX - left, y: e.clientY - top });
        setBgPos(`${boundedX}% ${boundedY}%`);
    };

    return (
        <div className="relative flex flex-col sm:flex-row gap-4 w-full">
            {/* Main Image Container */}
            <div
                ref={imageRef}
                className="relative bg-white border border-gray-100 p-4 md:p-8 rounded-sm shadow-sm flex items-center justify-center min-h-[300px] md:min-h-[450px] group overflow-hidden cursor-crosshair flex-grow"
                onMouseEnter={() => setShowZoom(true)}
                onMouseLeave={() => setShowZoom(false)}
                onMouseMove={handleMouseMove}
            >
                <SafeImage
                    src={src}
                    alt={alt}
                    className="max-h-full max-w-full object-contain pointer-events-none"
                    fallbackSrc="https://placehold.co/500x500?text=Product+Image+Not+Found"
                />

                {/* Optional: Visual Lens (smaller box over main image) */}
                {showZoom && (
                    <div
                        className="absolute border border-gray-300 bg-white/20 pointer-events-none"
                        style={{
                            left: `${mousePos.x - 50}px`,
                            top: `${mousePos.y - 50}px`,
                            width: '100px',
                            height: '100px',
                            display: 'none' // Hide lens if we want exactly like the original site (which just shows zoom pan)
                        }}
                    />
                )}
            </div>

            {/* Zoom Destination Container (Side-by-side) */}
            {showZoom && (
                <div
                    className="hidden lg:block absolute left-full ml-4 top-0 w-[500px] h-full bg-white border border-gray-200 z-[100] shadow-2xl rounded-sm overflow-hidden"
                    style={{
                        backgroundImage: `url(${src})`,
                        backgroundPosition: bgPos,
                        backgroundSize: `${100 * zoomLevel}%`,
                        backgroundRepeat: 'no-repeat'
                    }}
                />
            )}

            {/* Mobile Fallback or Information if needed */}
            <div className="lg:hidden text-[10px] text-gray-400 italic text-center mt-2">
                Hover to zoom available on desktop
            </div>
        </div>
    );
};

export default ProductImageZoom;
