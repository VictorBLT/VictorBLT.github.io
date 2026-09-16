import './languageSelector.css';

import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
    { code: 'fr', label: 'FR', icon: 'icons/french.svg' },
    { code: 'en', label: 'EN', icon: 'icons/english.svg' },
];

export default function LanguageSelector() {
    const { i18n } = useTranslation();
    const baseUrl = import.meta.env.BASE_URL;
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const currentLangCode = i18n.resolvedLanguage || 'en';
    const currentLang = LANGUAGES.find((l) => l.code === currentLangCode) || LANGUAGES[1];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (code) => {
        i18n.changeLanguage(code);
        setIsOpen(false);
    };

    return (
        <div className="language-selector" ref={dropdownRef}>
            <button type="button" onClick={() => setIsOpen(!isOpen)} className="dropdown-toggle">
                <span
                    className="svg-img"
                    style={{
                        backgroundImage: `url(${baseUrl}${currentLang.icon})`,
                    }}
                />
                <span>{currentLang.label}</span>
                <svg
                    className={`dropdown-arrow ${isOpen ? 'open' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>

            {isOpen && (
                <ul className="dropdown-menu">
                    {LANGUAGES.map((lang) => (
                        <li key={lang.code}>
                            <button
                                type="button"
                                onClick={() => handleSelect(lang.code)}
                                className={currentLangCode === lang.code ? 'active' : ''}>
                                <span
                                    className="svg-img"
                                    style={{
                                        backgroundImage: `url(${baseUrl}${lang.icon})`,
                                    }}
                                />
                                <span>{lang.label}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
