import './header.css';

import { useTranslation } from 'react-i18next';

const NAV_LINKS = [
    { id: 'about', path: '#about', labelKey: 'about.title.short' },
    { id: 'experiences', path: '#experiences', labelKey: 'experiences.title.short' },
    { id: 'skills', path: '#skills', labelKey: 'skills.title.short' },
    { id: 'portfolio', path: '#portfolio', labelKey: 'projects.title.short' },
];

export default function Header() {
    const { t, i18n } = useTranslation();
    const baseUrl = import.meta.env.BASE_URL;

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <header>
            <nav>
                <h1>
                    <a href={`${baseUrl}`}>{t('name')}</a>
                </h1>
                <input type="checkbox" name="" />
                <div className="burger-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul>
                    {NAV_LINKS.map(({ id, path, labelKey }) => (
                        <li key={id}>
                            <a href={`${baseUrl}${path}`}>{t(labelKey)}</a>
                        </li>
                    ))}
                </ul>

                <div className="language-selector">
                    <select
                        value={i18n.resolvedLanguage || 'en'}
                        onChange={handleLanguageChange}
                    >
                        <option value="fr">🇫🇷 FR</option>
                        <option value="en">🇬🇧 EN</option>
                    </select>
                </div>
            </nav>
        </header>
    );
}
