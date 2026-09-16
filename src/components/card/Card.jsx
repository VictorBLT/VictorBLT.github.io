import './card.css';

import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

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
                <div className="card-header">
                    <div className="card-title">
                        <Link to={`/project/${project.slug}`} className="card-main-link">
                            <h2>{project.name}</h2>
                        </Link>
                        <h4>{project.date && dayjs(project.date).format('YYYY')}</h4>
                    </div>
                    {project.url && (
                        <a
                            href={project.url}
                            target="_blank"
                            className="external-link"
                            rel="noreferrer">
                            {project.url}
                        </a>
                    )}
                </div>
                <p>{project.description.short}</p>
                <div className="chips-container">
                    {project.skills.map((skill, index) => (
                        <Chip key={index} skill={skill} />
                    ))}
                </div>
            </div>
        </div>
    );
}
