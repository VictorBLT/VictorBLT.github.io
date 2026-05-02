import { Image, StyleSheet, Text, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    icon: {
        width: 14,
        height: 14,
    },
    p: {
        color: '#535E88',
        fontWeight: 300,
        fontSize: 10,
        textDecoration: 'none',
    },
});

export default function PDFItemList({ src, text }) {
    return (
        <View style={styles.container}>
            <Image style={styles.icon} src={src} />
            <Text style={styles.p}>{text}</Text>
        </View>
    );
}
