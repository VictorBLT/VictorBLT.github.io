import { useTranslation } from 'react-i18next';

import Card from '../../components/card/Card.jsx';
import Timeline from '../../components/timeline/Timeline.jsx';
import Title from '../../components/title/Title.jsx';
import MainLayout from '../../layouts/main/MainLayout.jsx';
import About from './About.jsx';
import Skills from './Skills.jsx';

export default function Main() {
    const { t } = useTranslation();
    const experiences = t('experiences.items', { returnObjects: true });
    const education = t('education.items', { returnObjects: true });
    const projects = t('projects.items', { returnObjects: true });

    return (
        <MainLayout>
            <About />
            <section id="experiences">
                <Title>{t('experiences.title.long')}</Title>
                <div className="timeline-container vertical">
                    {experiences.length > 0 &&
                        experiences.map((event, index) => <Timeline key={index} event={event} />)}
                </div>
            </section>
            <Skills />
            <section id="education">
                <Title>{t('education.title.long')}</Title>
                <div className="timeline-container">
                    {education.length > 0 &&
                        education.map((event, index) => <Timeline key={index} event={event} />)}
                </div>
            </section>
            <section id="portfolio">
                <Title>{t('projects.title.long')}</Title>
                <div className="card-container">
                    {projects.length > 0 &&
                        projects.map((project, index) => <Card key={index} project={project} />)}
                </div>
            </section>
        </MainLayout>
    );
}
