import { useTranslation } from 'react-i18next';

import Card from '../../components/card/Card.jsx';

export default function Portfolio() {
    const { t } = useTranslation();
    const data = t('projects.items', { returnObjects: true });

    return (
        <section id="portfolio">
            <h1>
                <span className="accent">{'//'}</span>
                {t('projects.title.long')}
            </h1>
            <div className="card-container">
                {data.length > 0 &&
                    data.map((project, index) => <Card key={index} project={project} />)}
            </div>
        </section>
    );
}
