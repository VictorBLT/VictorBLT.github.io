import { Image, StyleSheet, Text, View } from '@react-pdf/renderer';
import styles from '../ResumeStyle.jsx'

const localStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    icon: {
        width: 14,
        height: 14,
    }
});

export default function PDFItemList({ src, text }) {
    const baseUrl = import.meta.env.BASE_URL;

    return (
        <View style={localStyles.container}>
            <Image style={localStyles.icon} src={`${baseUrl}${src}`} />
            <Text style={styles.p}>{text}</Text>
        </View>
    );
}
