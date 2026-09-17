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
                <div className="card-title">
                    <h2>{project.name}</h2>
                    <h4>{project.date && dayjs(project.date).format('YYYY')}</h4>
                </div>

                <div className="chips-container">
                    {project.skills.slice(0, 3).map((skill, index) => (
                        <Chip key={index} skill={skill} />
                    ))}
                    {project.skills.length > 3 && (
                        <Chip key="chips-4" skill={{ name: `+${project.skills.length - 3}` }} />
                    )}
                </div>

                <p>{project.description.short}</p>

                <div className="card-cta">
                    <Link to={`/project/${project.slug}`} className="button card-main-link">
                        {t('projects.details')}
                    </Link>
                    {project.url && (
                        <a href={project.url} target="_blank" className="link" rel="noreferrer">
                            {t('projects.visit')}
                            <span
                                className="svg-icon"
                                style={{
                                    WebkitMaskImage: `url(${baseUrl}icons/open.svg)`,
                                    maskImage: `url(${baseUrl}icons/open.svg)`,
                                }}
                            />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
