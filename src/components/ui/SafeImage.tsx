"use client";

import React, { useState } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    fallbackSrc?: string;
}

const SafeImage: React.FC<SafeImageProps> = ({
    src,
    alt,
    fallbackSrc = 'https://placehold.co/600x600?text=Product+Image+Not+Found',
    className,
    ...props
}) => {
    const [imgSrc, setImgSrc] = useState(src);
    const [hasError, setHasError] = useState(false);

    const handleError = () => {
        if (!hasError) {
            setImgSrc(fallbackSrc);
            setHasError(true);
        }
    };

    return (
        <img
            {...props}
            src={imgSrc}
            alt={alt}
            className={className}
            onError={handleError}
        />
    );
};

export default SafeImage;
