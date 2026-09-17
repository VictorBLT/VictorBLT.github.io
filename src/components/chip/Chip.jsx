import './chip.css';

import { useTranslation } from 'react-i18next';

export default function Chip({ skill }) {
    const { t } = useTranslation();
    const baseUrl = import.meta.env.BASE_URL;

    return (
        <div className="chip">
            {skill.icon && (
                <img
                    src={`${baseUrl}${skill.icon}`}
                    alt={t('alt.logo', { name: skill.name })}
                    draggable={false}
                />
            )}
            {skill.name && <p>{skill.name}</p>}
        </div>
    );
}
