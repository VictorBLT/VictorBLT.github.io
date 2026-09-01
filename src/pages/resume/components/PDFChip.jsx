import { Image, StyleSheet, Text, View } from '@react-pdf/renderer';
import styles, {theme} from '../ResumeStyle.jsx'

const localStyles = StyleSheet.create({
    chip: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 12,
        gap: 4
    },
    chipLight: {
        backgroundColor: theme.colors.background,
    },
    chipDark: {
        backgroundColor: theme.colors.blue4,
    },
    badge: {
        width: 10,
        height: 10,
    },
});

export default function PDFChip({ skill, isBadgeEnabled = true, isTextEnabled = true, isDarkMode = false }) {
    const baseUrl = import.meta.env.BASE_URL;

    return (
        <View style={[localStyles.chip, isDarkMode? localStyles.chipDark : localStyles.chipLight]}>
            {isBadgeEnabled && <Image style={localStyles.badge} src={`${baseUrl}${skill.icon}`} />}
            {isTextEnabled && <Text style={styles.p}>{skill.name}</Text>}
        </View>
    );
}
