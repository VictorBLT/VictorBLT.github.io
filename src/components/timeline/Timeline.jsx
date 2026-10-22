import './timeline.css';

import dayjs from 'dayjs';

export default function Timeline({ event }) {
    return (
        <div className="timeline">
            <span className="timeline-dot"></span>
            <span className="timeline-bar"></span>
            <h2 className="timeline-title">{event.title}</h2>
            <h3 className="timeline-location">{event.location}</h3>
            <h4 className="timeline-date">
                <span>{dayjs(event.start).format('MMM YYYY')}</span>
                <span className="timeline-date-separator">-</span>
                <span>{dayjs(event.end).format('MMM YYYY')}</span>
            </h4>
            <p className="timeline-description">{event.description}</p>
        </div>
    );
}
