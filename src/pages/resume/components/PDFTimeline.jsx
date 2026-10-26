import { StyleSheet, Text, View } from '@react-pdf/renderer';
import dayjs from 'dayjs';

import { styles, theme } from '../ResumeStyle.jsx';
import PDFMarkdown from './PDFMarkdown.jsx';

const localStyles = StyleSheet.create({
    timeline: {
        flexDirection: 'row',
        width: '100%',
    },
    date: {
        textTransform: 'capitalize',
    },
    organization: {
        color: theme.colors.blue2,
    },
    barColumn: {
        width: 20,
        alignItems: 'center',
    },
    dot: {
        width: 6,
        height: 6,
        marginTop: 4,
        backgroundColor: theme.colors.accent,
        borderRadius: 50,
    },
    bar: {
        width: 1,
        marginTop: 8,
        backgroundColor: theme.colors.blue3,
        flexGrow: 1,
    },
    contentColumn: {
        flex: 1,
    },
    paddingContentColumn: {
        paddingBottom: 4,
    },
    title: {
        marginBottom: 1.5,
        flexDirection: 'row',
        gap: 4,
        alignItems: 'center',
    },
    subtitle: {
        fontStyle: 'italic',
        marginBottom: 4,
    },
});

const formatDuration = (event, isDetailed) => {
    const format = isDetailed ? 'MMMM YYYY' : 'YYYY';
    const start = dayjs(event.start).format(format);
    const end = dayjs(event.end).format(format);
    return `${start} - ${end}`;
};

export default function PDFTimeline({ event, isLast, isDetailed = true }) {
    return (
        <View style={localStyles.timeline}>
            <View style={localStyles.barColumn}>
                <View style={localStyles.dot} />
                {!isLast && <View style={localStyles.bar} />}
            </View>
            <View style={[localStyles.contentColumn, !isLast && localStyles.paddingContentColumn]}>
                <View style={[localStyles.title]}>
                    <Text style={[styles.h2]}>{event.title}</Text>
                    <Text style={[styles.h2, localStyles.organization]}>-</Text>
                    <Text style={[styles.h2, localStyles.organization]}>
                        {event.organization}
                        {event.location ? `, ${event.location}` : ''}
                    </Text>
                </View>
                <Text style={[styles.h4, localStyles.subtitle, localStyles.date]}>
                    {formatDuration(event, isDetailed)}
                </Text>
                {isDetailed && (
                    <PDFMarkdown
                        style={[styles.p, styles.description]}
                        text={
                            event.description.resume
                                ? event.description.resume
                                : event.description.long
                        }
                    />
                )}
            </View>
        </View>
    );
}
