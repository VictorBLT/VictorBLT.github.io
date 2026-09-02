import { Link, Text, View } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';

import PDFItemList from './components/PDFItemList.jsx';
import PDFSection from './components/PDFSection.jsx';
import PDFSkills from './components/PDFSkills.jsx';
import PDFTimeline from './components/PDFTimeline.jsx';
import styles from './ResumeStyle.jsx';

export default function ResumeEN() {
    const { t } = useTranslation();
    const experiences = t('experiences.items', { returnObjects: true });
    const education = t('education.items', { returnObjects: true });
    const skills = t('skills.categories', { returnObjects: true });

    return (
        <View style={[styles.section]}>
            <View style={styles.header}>
                <View>
                    <Text style={[styles.h1, styles.titleText]}>{t('name')}</Text>
                    <Text style={[styles.h2, styles.subTitleText]}>{t('title')}</Text>
                </View>
                <View style={styles.containerRow}>
                    <PDFItemList src={'icons/location.svg'} text={t('resume.profile.location')} />
                    <Link style={styles.a} src={t('mailto', { email: t('email') })}>
                        <PDFItemList src={'icons/mail.svg'} text={t('email')} />
                    </Link>
                    <Link style={styles.a} src={t('url', { link: t('linkedin') })}>
                        <PDFItemList src={'icons/linkedin.svg'} text={t('linkedin')} />
                    </Link>
                    <Link style={styles.a} src={t('url', { link: t('portfolio') })}>
                        <PDFItemList src={'icons/link.svg'} text={t('portfolio')} />
                    </Link>
                </View>
                <Text style={[styles.h4, styles.description]}>{t('about.description')}</Text>
            </View>
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
            <PDFSection title={t('skills.title.resume')}>
                <PDFSkills skills={skills} layout={'rows'} />
            </PDFSection>
            {/*<PDFSection title={t('projects.title.resume')}></PDFSection>*/}
        </View>
    );
}
