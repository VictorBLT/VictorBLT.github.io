import './project.css';

import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import open from '../../../public/icons/open.svg';
import Chip from '../../components/chip/Chip.jsx';
import Title from '../../components/title/Title.jsx';
import ImageGallery from './ImageGallery.jsx';

export default function Project() {
    const { t } = useTranslation();
    const { slug } = useParams();
    const baseUrl = import.meta.env.BASE_URL;
    const projects = t('projects.items', { returnObjects: true });
    const project = projects.find((p) => p.slug === slug);

    return (
        <>
            <div className="parallax">
                <img
                    src={`${baseUrl}${project.banner}`}
                    alt={t('alt.image', { name: project.name })}
                    draggable={false}
                />
            </div>
            <article className="scrolling-content">
                <section>
                    {/*<Link to="/">Retour au portfolio</Link>*/}
                    <div className="project-title">
                        <Title>{project.name}</Title>

                        {project.url && (
                            <a href={project.url} target="_blank" rel="noreferrer">
                                {project.url}
                            </a>
                        )}

                        <div className="chips-container">
                            {project.skills.map((skill, index) => (
                                <Chip key={index} skill={skill} />
                            ))}
                        </div>
                    </div>

                    <div className="project-description">
                        {project.description.long.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </section>
                <section>
                    <ImageGallery images={project.gallery} project_name={project.name} />
                </section>
                {project.links && project.links.length > 0 && (
                    <section>
                        <ul className="project-links">
                            {project.links.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="button">
                                        <span>
                                            <img src={`${baseUrl}${link.icon}`} alt={''} />
                                            {link.name}
                                        </span>
                                        <img src={open} alt={'test'} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}
            </article>
        </>
    );
}
