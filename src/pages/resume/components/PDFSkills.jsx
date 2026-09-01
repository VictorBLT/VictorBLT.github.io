import { StyleSheet, Text, View } from '@react-pdf/renderer';

import styles from '../ResumeStyle.jsx';
import PDFChip from './PDFChip.jsx';

const localStyles = StyleSheet.create({
    skillsContainer: {
        width: '100%',
        gap: 8,
    },
    containerCol: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    containerRow: {
        flexDirection: 'column',
    },

    categoryCol: {
        width: '45%',
        flexDirection: 'column',
    },
    categoryRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },

    titleCol: {
        marginBottom: 4,
    },
    titleRow: {
        marginTop: 2,
        width: '15%',
    },

    chipsContainer: {
        gap: 4,
    },
    chipsContainerCol: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    chipsContainerRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '85%',
    },
});

export default function PDFSkills({ skills, layout = 'columns' }) {
    const isRow = layout === 'rows';

    return (
        <View
            style={[
                localStyles.skillsContainer,
                isRow ? localStyles.containerRow : localStyles.containerCol,
            ]}>
            {skills.length > 0 &&
                skills.map((category, catIndex) => (
                    <View
                        key={catIndex}
                        style={[isRow ? localStyles.categoryRow : localStyles.categoryCol]}>
                        <Text
                            style={[
                                styles.h2,
                                isRow ? localStyles.titleRow : localStyles.titleCol,
                            ]}>
                            {category.name}
                        </Text>
                        <View
                            style={[
                                localStyles.chipsContainer,
                                isRow
                                    ? localStyles.chipsContainerRow
                                    : localStyles.chipsContainerCol,
                            ]}>
                            {category.items.length > 0 &&
                                category.items.map((skill, skillIndex) => (
                                    <PDFChip key={skillIndex} skill={skill} isDarkMode={isRow} />
                                ))}
                        </View>
                    </View>
                ))}
        </View>
    );
}
