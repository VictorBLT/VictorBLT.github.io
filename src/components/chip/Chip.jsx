import './chip.css';

import { useTranslation } from 'react-i18next';

export default function Chip({ skill }) {
    const { t } = useTranslation();

    return (
        <div className="chip">
            <img src={skill.icon} alt={t('alt.logo', { name: skill.name })} draggable={false} />
            <p>{skill.name}</p>
        </div>
    );
}
