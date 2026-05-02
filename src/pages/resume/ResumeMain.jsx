import { View } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';

import PDFSection from './PDFSection.jsx';
import PDFTimeline from './PDFTimeline.jsx';
import ResumeHeader from './ResumeHeader.jsx';
import styles from './ResumeStyle.jsx';

export default function ResumeMain() {
    const { t } = useTranslation();
    const experiences = t('experiences.items', { returnObjects: true });
    const education = t('education.items', { returnObjects: true });

    return (
        <View style={[styles.section, styles.main]}>
            <ResumeHeader />
            <PDFSection title={t('experiences.title.resume')}>
                {experiences.length > 0 &&
                    experiences.map((event, index) => (
                        <PDFTimeline
                            key={index}
                            event={event}
                            isLast={index === experiences.length - 1}
                        />
                    ))}
            </PDFSection>
            <PDFSection title={t('education.title.resume')}>
                {education.length > 0 &&
                    education.map((event, index) => (
                        <PDFTimeline
                            key={index}
                            event={event}
                            isLast={index === education.length - 1}
                            isDetailed={false}
                        />
                    ))}
            </PDFSection>
            {/*<PDFSection title={t('projects.title.resume')}></PDFSection>*/}
        </View>
    );
}
