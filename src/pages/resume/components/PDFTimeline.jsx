import { StyleSheet, Text, View } from '@react-pdf/renderer';
import dayjs from 'dayjs';

import { styles, theme } from '../ResumeStyle.jsx';

const localStyles = StyleSheet.create({
    timeline: {
        flexDirection: 'row',
        width: '100%',
    },
    dateColumn: {
        width: 50,
    },
    date: {
        textAlign: 'right',
        textTransform: 'capitalize',
        lineHeight: 1.4,
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
        paddingBottom: 8,
    },
    title: {
        marginBottom: 1.5,
    },
    location: {
        fontStyle: 'italic',
        marginBottom: 4,
    },
    description: {
        lineHeight: 1.3,
    },
});

export default function PDFTimeline({ event, isLast, isDetailed = true }) {
    return (
        <View style={localStyles.timeline}>
            <View style={localStyles.dateColumn}>
                <Text style={[styles.h3, localStyles.date]}>
                    {dayjs(event.start).format('MMM YYYY')}
                </Text>
                <Text style={[styles.h3, localStyles.date]}>
                    {dayjs(event.end).format('MMM YYYY')}
                </Text>
            </View>
            <View style={localStyles.barColumn}>
                <View style={localStyles.dot} />
                {!isLast && <View style={localStyles.bar} />}
            </View>
            <View style={[localStyles.contentColumn, !isLast && localStyles.paddingContentColumn]}>
                <Text style={[styles.h2, localStyles.title]}>{event.title}</Text>
                <Text style={[styles.h4, localStyles.location]}>{event.location}</Text>
                {isDetailed && (
                    <Text style={[styles.p, localStyles.description]}>{event.description}</Text>
                )}
            </View>
        </View>
    );
}
