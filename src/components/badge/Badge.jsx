import './badge.css';

import { useTranslation } from 'react-i18next';

export default function Badge({ skill }) {
    const { t } = useTranslation();

    return (
        <div className="badge">
            <img src={skill.icon} alt={t('alt.logo', { name: skill.name })} draggable={false} />
        </div>
    );
}
