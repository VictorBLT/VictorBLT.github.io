import { StyleSheet, Text, View } from '@react-pdf/renderer';

import { styles, theme } from '../ResumeStyle.jsx';

const localStyles = StyleSheet.create({
    title: {
        flexDirection: 'row',
        alignItems: 'left',
        gap: 6,
        paddingBottom: 3,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.blue3,
        marginBottom: 8,
    },
    slash: {
        color: theme.colors.accent,
    },
    container: {
        gap: 5,
    },
});

export default function PDFSection({ title, children }) {
    return (
        <View>
            <View style={localStyles.title}>
                <Text style={[styles.h1, localStyles.slash]}>{`//`}</Text>
                <Text style={styles.h1}>{title}</Text>
            </View>
            <View style={localStyles.container}>{children}</View>
        </View>
    );
}
