import './timeline.css';

import dayjs from 'dayjs';
import Markdown from "../mardown/Markdown.jsx";

const formatDuration = (date) => {
    return dayjs(date).format('MMMM YYYY');
};

export default function Timeline({ event }) {
    return (
        <div className="timeline">
            <span className="timeline-dot"></span>
            <span className="timeline-bar"></span>
            <h2 className="timeline-title">{event.title}</h2>
            <h3 className="timeline-location">
                {event.organization}
                {event.location ? `, ${event.location}` : ''}
            </h3>
            <h4 className="timeline-date">
                <span>{formatDuration(event.start)}</span>
                <span className="timeline-date-separator">-</span>
                <span>{formatDuration(event.end)}</span>
            </h4>
            <Markdown
                className="timeline-description"
                text={event.description.long}
            />
        </div>
    );
}
