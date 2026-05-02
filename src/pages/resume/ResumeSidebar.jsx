import { View } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';

import PDFItemList from './PDFItemList.jsx';
import PDFSection from './PDFSection.jsx';
import ResumeProfile from './ResumeProfile.jsx';
import ResumeSkills from './ResumeSkills.jsx';
import styles from './ResumeStyle.jsx';

export default function ResumeSidebar() {
    const { t } = useTranslation();
    const languages = t('resume.languages.items', { returnObjects: true });
    const hobbies = t('resume.hobbies.items', { returnObjects: true });

    return (
        <View style={[styles.section, styles.sidebar]}>
            <ResumeProfile />
            <ResumeSkills />
            <PDFSection title={t('resume.languages.title')}>
                {languages.length > 0 &&
                    languages.map((language, index) => (
                        <PDFItemList key={index} src={language.icon} text={language.name} />
                    ))}
            </PDFSection>
            <PDFSection title={t('resume.hobbies.title')}>
                {hobbies.length > 0 &&
                    hobbies.map((hobbies, index) => (
                        <PDFItemList key={index} src={hobbies.icon} text={hobbies.name} />
                    ))}
            </PDFSection>
        </View>
    );
}
