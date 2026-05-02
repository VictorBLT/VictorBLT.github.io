import { StyleSheet, Text, View } from '@react-pdf/renderer';
import dayjs from 'dayjs';

const styles = StyleSheet.create({
    timeline: {
        flexDirection: 'row',
    },
    dateColumn: {
        width: 50,
    },
    date: {
        color: '#141C3A',
        fontWeight: 300,
        fontSize: 10,
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
        backgroundColor: '#00ADB5',
        borderRadius: 50,
    },
    bar: {
        width: 1,
        marginTop: 8,
        backgroundColor: '#DCDCDE',
        flexGrow: 1,
    },
    contentColumn: {
        flex: 1,
    },
    paddingContentColumn: {
        paddingBottom: 10,
    },
    title: {
        color: '#141C3A',
        fontWeight: 400,
        fontSize: 12,
        marginBottom: 1.5,
    },
    location: {
        color: '#535E88',
        fontWeight: 300,
        fontSize: 10,
        fontStyle: 'italic',
        marginBottom: 4,
    },
    description: {
        color: '#535E88',
        fontWeight: 300,
        fontSize: 9,
        lineHeight: 1.3,
    },
});

export default function PDFTimeline({ event, isLast, isDetailed = true }) {
    return (
        <View style={styles.timeline}>
            <View style={styles.dateColumn}>
                <Text style={styles.date}>{dayjs(event.start).format('MMM YYYY')}</Text>
                <Text style={styles.date}>{dayjs(event.end).format('MMM YYYY')}</Text>
            </View>
            <View style={styles.barColumn}>
                <View style={styles.dot} />
                {!isLast && <View style={styles.bar} />}
            </View>
            <View style={[styles.contentColumn, !isLast && styles.paddingContentColumn]}>
                <Text style={styles.title}>{event.title}</Text>
                <Text style={styles.location}>{event.location}</Text>
                {isDetailed && <Text style={styles.description}>{event.description}</Text>}
            </View>
        </View>
    );
}
