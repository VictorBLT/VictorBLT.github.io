import { StyleSheet, Text, View } from '@react-pdf/renderer';

import styles from '../ResumeStyle.jsx';
import PDFChip from './PDFChip.jsx';

const localStyles = StyleSheet.create({
    skillsContainer: {
        width: '110%',
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
        width: '110%',
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
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 4,
    },
    chipsContainerRow: {
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
                                isRow ? localStyles.chipsContainerRow : '',
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
