import { Image, StyleSheet, Text, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    chip: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 12,
        gap: 4,
    },
    badge: {
        width: 10,
        height: 10,
    },
    p: {
        color: '#535E88',
        fontSize: 9,
        fontWeight: 300,
    },
});

export default function PDFChip({ skill, isBadgeEnabled = true, isTextEnabled = true }) {
    const baseUrl = import.meta.env.BASE_URL;

    return (
        <View style={styles.chip}>
            {isBadgeEnabled && <Image style={styles.badge} src={`${baseUrl}${skill.icon}`} />}
            {isTextEnabled && <Text style={styles.p}>{skill.name}</Text>}
        </View>
    );
}
