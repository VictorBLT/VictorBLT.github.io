import './imageGallery.css';

import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ImageGallery({ project_name, images }) {
    const { t } = useTranslation();
    const baseUrl = import.meta.env.BASE_URL;
    const [currentIndex, setCurrentIndex] = useState(0);

    const mainRef = useRef(null);

    const handleScroll = () => {
        if (mainRef.current) {
            const scrollPosition = mainRef.current.scrollLeft;
            const width = mainRef.current.clientWidth;
            const newIndex = Math.round(scrollPosition / width);

            if (newIndex !== currentIndex) {
                setCurrentIndex(newIndex);
            }
        }
    };

    const goToPrevious = () => {
        const isFirstImage = currentIndex === 0;
        const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
        goToImage(newIndex);
    };

    const goToNext = () => {
        const isLastImage = currentIndex === images.length - 1;
        const newIndex = isLastImage ? 0 : currentIndex + 1;
        goToImage(newIndex);
    };

    const goToImage = (index) => {
        setCurrentIndex(index);
        if (mainRef.current) {
            const width = mainRef.current.clientWidth;
            mainRef.current.scrollTo({
                left: width * index,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="gallery-container">
            <div className="main-container">
                <button className="solid left" onClick={goToPrevious}>
                    &#10094;
                </button>

                <div className="main-scrollable-container" ref={mainRef} onScroll={handleScroll}>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={`${baseUrl}${image}`}
                            alt={`${t('alt.image', { name: project_name })} ${index + 1}`}
                            draggable={false}
                        />
                    ))}
                </div>

                <button className="solid right" onClick={goToNext}>
                    &#10095;
                </button>
            </div>

            <div className="thumbnails-container">
                {images.map((image, index) => (
                    <button
                        key={index}
                        type="button"
                        className={currentIndex === index ? 'active' : ''}
                        onClick={() => goToImage(index)}>
                        <img
                            src={`${baseUrl}${image}`}
                            alt={`${t('alt.image', { name: project_name })} ${index + 1}`}
                            draggable={false}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
