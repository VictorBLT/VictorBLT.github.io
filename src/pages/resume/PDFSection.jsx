import { StyleSheet, Text, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    title: {
        flexDirection: 'row',
        alignItems: 'left',
        gap: 6,
        paddingBottom: 3,
        borderBottomWidth: 1,
        borderBottomColor: '#DCDCDE',
        marginBottom: 8,
    },
    slash: {
        color: '#00ADB5',
        fontSize: 16,
        fontWeight: 900,
    },
    h1: {
        color: '#141C3A',
        fontWeight: 900,
        fontSize: 16,
    },
    container: {
        gap: 5,
    },
});

export default function PDFSection({ title, children }) {
    return (
        <View>
            <View style={styles.title}>
                <Text style={styles.slash}>{`//`}</Text>
                <Text style={styles.h1}>{title}</Text>
            </View>
            <View style={styles.container}>{children}</View>
        </View>
    );
}
