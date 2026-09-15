import './imageGallery.css';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ImageGallery({ project_name, images }) {
    const { t } = useTranslation();
    const baseUrl = import.meta.env.BASE_URL;
    const [currentIndex, setCurrentIndex] = useState(0);

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
    };

    return (
        <div className="gallery-container">
            <div className="main-container">
                <button className="solid left" onClick={goToPrevious}>
                    &#10094;
                </button>

                <img
                    src={`${baseUrl}${images[currentIndex]}`}
                    alt={`${t('alt.image', { name: project_name })} ${currentIndex + 1}`}
                    draggable={false}
                />

                <button className="solid right" onClick={goToNext}>
                    &#10095;
                </button>
            </div>

            <div className="thumbnails-container">
                {images.map((image, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`button-area ${currentIndex === index ? 'active' : ''}`}
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
