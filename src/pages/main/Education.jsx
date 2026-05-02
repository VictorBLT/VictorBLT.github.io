import { useTranslation } from 'react-i18next';

import Timeline from '../../components/timeline/Timeline.jsx';

export default function Education() {
    const { t } = useTranslation();
    const data = t('education.items', { returnObjects: true });

    return (
        <section id="education">
            <h1>
                <span className="accent">{'//'}</span>
                {t('education.title.long')}
            </h1>
            <div className="timeline-container">
                {data.length > 0 &&
                    data.map((event, index) => <Timeline key={index} event={event} />)}
            </div>
        </section>
    );
}
