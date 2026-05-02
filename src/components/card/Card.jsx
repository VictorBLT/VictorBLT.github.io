import './card.css';

import { useTranslation } from 'react-i18next';

import Badge from '../badge/Badge.jsx';

export default function Card({ project }) {
    const { t } = useTranslation();

    return (
        <div className="card">
            <div className="card-image-container">
                <img
                    src={`${import.meta.env.BASE_URL}${project.image}`}
                    alt={t('alt.image', { name: project.name })}
                    draggable={false}
                />
            </div>
            <div className="card-content">
                <h2>{project.name}</h2>
                <div className="badges-container">
                    {project.skills.map((skill, index) => (
                        <Badge key={index} skill={skill} isTextEnabled={false} />
                    ))}
                </div>
            </div>
        </div>
    );
}
