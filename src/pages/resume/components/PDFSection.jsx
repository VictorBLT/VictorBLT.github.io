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
        marginBottom: 6,
    },
    slash: {
        width: 14,
        height: 14,
    },
    container: {
        gap: 4,
    },
});

export default function PDFSection({ title, children }) {
    const baseUrl = import.meta.env.BASE_URL;

    return (
        <View wrap={false}>
            {title && (
                <View style={localStyles.title}>
                    <Image style={[localStyles.slash]} src={`${baseUrl}icons/slash.svg`} />
                    <Text style={styles.h1}>{title}</Text>
                </View>
            )}
            <View style={localStyles.container}>{children}</View>
        </View>
    );
}
