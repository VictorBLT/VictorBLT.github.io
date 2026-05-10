import './progress.css';

import { useTranslation } from 'react-i18next';

export default function Progress({ skill }) {
    const { t } = useTranslation();
    const baseUrl = import.meta.env.BASE_URL;

    return (
        <div className="progress">
            <img src={`${baseUrl}${skill.icon}`} alt={t('alt.logo', { name: skill.name })} />
            <h3>{skill.name}</h3>
            <progress value={skill.value || 80} max="100"></progress>
            <p>{`${skill.value || 80}%`}</p>
        </div>
    );
}
