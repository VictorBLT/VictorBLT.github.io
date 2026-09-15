import './header.css';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NAV_LINKS = [
    { id: 'about', path: '#about', labelKey: 'about.title.short' },
    { id: 'experiences', path: '#experiences', labelKey: 'experiences.title.short' },
    { id: 'skills', path: '#skills', labelKey: 'skills.title.short' },
    { id: 'portfolio', path: '#portfolio', labelKey: 'projects.title.short' },
];

export default function Header() {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    return (
        <header>
            <nav>
                <h1>
                    <Link to="/" onClick={closeMenu}>
                        {t('name')}
                    </Link>
                </h1>
                <input
                    type="checkbox"
                    checked={isMenuOpen}
                    onChange={(e) => setIsMenuOpen(e.target.checked)}
                    name=""
                />
                <div className="burger-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul>
                    {NAV_LINKS.map(({ id, path, labelKey }) => (
                        <li key={id}>
                            <HashLink to={`/${path}`} onClick={closeMenu}>
                                {t(labelKey)}
                            </HashLink>
                        </li>
                    ))}
                </ul>

                <div className="language-selector">
                    <select value={i18n.resolvedLanguage || 'en'} onChange={handleLanguageChange}>
                        <option value="fr">🇫🇷 FR</option>
                        <option value="en">🇬🇧 EN</option>
                    </select>
                </div>
            </nav>
        </header>
    );
}
