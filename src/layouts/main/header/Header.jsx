import './header.css';

import { useTranslation } from 'react-i18next';

export default function Header() {
    const { t } = useTranslation();

    return (
        <header>
            <nav>
                <h1>
                    <a href="/">{t('name')}</a>
                </h1>
                <input type="checkbox" name="" />
                <div className="burger-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul>
                    <li>
                        <a href={`${import.meta.env.BASE_URL}/#about`}>{t('about.title.short')}</a>
                    </li>
                    <li>
                        <a href={`${import.meta.env.BASE_URL}/#experiences`}>{t('experiences.title.short')}</a>
                    </li>
                    <li>
                        <a href={`${import.meta.env.BASE_URL}/#skills`}>{t('skills.title.short')}</a>
                    </li>
                    <li>
                        <a href={`${import.meta.env.BASE_URL}/#portfolio`}>{t('projects.title.short')}</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
