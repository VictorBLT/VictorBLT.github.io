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
                        <a href="/#about">{t('about.title.short')}</a>
                    </li>
                    <li>
                        <a href="/#experiences">{t('experiences.title.short')}</a>
                    </li>
                    <li>
                        <a href="/#skills">{t('skills.title.short')}</a>
                    </li>
                    <li>
                        <a href="/#portfolio">{t('projects.title.short')}</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
