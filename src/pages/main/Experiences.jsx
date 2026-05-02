import { useTranslation } from 'react-i18next';

import Timeline from '../../components/timeline/Timeline.jsx';

export default function Experiences() {
    const { t } = useTranslation();
    const data = t('experiences.items', { returnObjects: true });

    return (
        <section id="experiences">
            <h1>
                <span className="accent">{'//'}</span>
                {t('experiences.title.long')}
            </h1>
            <div className="timeline-container vertical">
                {data.length > 0 &&
                    data.map((event, index) => <Timeline key={index} event={event} />)}
            </div>
        </section>
    );
}
