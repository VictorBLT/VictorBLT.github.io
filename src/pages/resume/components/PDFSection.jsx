import { Image, StyleSheet, Text, View } from '@react-pdf/renderer';

import { styles, theme } from '../ResumeStyle.jsx';

const localStyles = StyleSheet.create({
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        paddingBottom: 3,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.blue3,
        marginBottom: 8,
    },
    slash: {
        width: 16,
        height: 16,
    },
    container: {
        gap: 5,
    },
});

export default function PDFSection({ title, children }) {
    const baseUrl = import.meta.env.BASE_URL;

    return (
        <View>
            <View style={localStyles.title}>
                <Image style={[localStyles.slash]} src={`${baseUrl}icons/slash.svg`} />
                <Text style={styles.h1}>{title}</Text>
            </View>
            <View style={localStyles.container}>{children}</View>
        </View>
    );
}
