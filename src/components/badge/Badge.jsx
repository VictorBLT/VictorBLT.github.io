import './badge.css';

import { useTranslation } from 'react-i18next';

export default function Badge({ skill }) {
    const { t } = useTranslation();
    const baseUrl = import.meta.env.BASE_URL;

    return (
        <div className="badge">
            <img
                src={`${baseUrl}${skill.icon}`}
                alt={t('alt.logo', { name: skill.name })}
                draggable={false}
            />
        </div>
    );
}
