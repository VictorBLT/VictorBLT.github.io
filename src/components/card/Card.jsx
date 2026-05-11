import './card.css';

import { useTranslation } from 'react-i18next';

import Chip from '../chip/Chip.jsx';

export default function Card({ project }) {
    const { t } = useTranslation();
    const baseUrl = import.meta.env.BASE_URL;

    return (
        <div className="card">
            <div className="card-image-container">
                <img
                    src={`${baseUrl}${project.image}`}
                    alt={t('alt.image', { name: project.name })}
                    draggable={false}
                />
            </div>
            <div className="card-content">
                <div className="card-text">
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                </div>
                <div className="chips-container">
                    {project.skills.map((skill, index) => (
                        <Chip key={index} skill={skill} />
                    ))}
                </div>
            </div>
        </div>
    );
}
