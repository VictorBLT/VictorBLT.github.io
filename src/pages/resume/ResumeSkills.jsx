import { Text, View } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';

import PDFChip from './PDFChip.jsx';
import PDFSection from './PDFSection.jsx';
import styles from './ResumeStyle.jsx';

export default function ResumeSkills() {
    const { t } = useTranslation();
    const skillCategories = t('skills.categories', { returnObjects: true });

    return (
        <PDFSection title={t('skills.title.resume')}>
            <View style={styles.skillsContainer}>
                {skillCategories.length > 0 &&
                    skillCategories.map((category, catIndex) => (
                        <View key={catIndex} style={styles.skillCategory}>
                            <Text style={styles.categoryTitle}>{category.name}</Text>
                            <View style={styles.skillsContainer}>
                                {category.items.length > 0 &&
                                    category.items.map((skill, skillIndex) => (
                                        <PDFChip key={skillIndex} skill={skill} />
                                    ))}
                            </View>
                        </View>
                    ))}
            </View>
        </PDFSection>
    );
}
