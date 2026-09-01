import { Image, Text, Link, View } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';


import PDFItemList from './components/PDFItemList.jsx';
import PDFSection from './components/PDFSection.jsx';
import PDFTimeline from './components/PDFTimeline.jsx';
import PDFSkills from "./components/PDFSkills.jsx";

import profilePic from '../../../public/images/vic.png';
import styles from './ResumeStyle.jsx';


export default function ResumeFR() {
    const { t } = useTranslation();
    const skills = t('skills.categories', { returnObjects: true });
    const languages = t('resume.languages.items', { returnObjects: true });
    const hobbies = t('resume.hobbies.items', { returnObjects: true });
    const experiences = t('experiences.items', { returnObjects: true });
    const education = t('education.items', { returnObjects: true });

    return (
        <>
            <View style={[styles.section, styles.sidebar]}>
                <View style={styles.imgContainer}>
                    <View style={styles.circleBackground} />
                    <Image style={styles.profileImage} src={profilePic} />
                </View>
                <PDFSection title={t('resume.profile.title')}>
                    <PDFItemList src={'icons/location.svg'} text={t('resume.profile.location')} />
                    <Link style={styles.a} src={t('mailto', { email: t('email') })}>
                        <PDFItemList src={'icons/mail.svg'} text={t('email')} />
                    </Link>
                    <PDFItemList src={'icons/car.svg'} text={t('resume.profile.driver')} />
                    <Link style={styles.a} src={t('linkedin_url', { username: t('linkedin') })}>
                        <PDFItemList src={'icons/linkedin.svg'} text={`@${t('linkedin')}`} />
                    </Link>
                </PDFSection>
                <PDFSection title={t('skills.title.resume')}>
                    <PDFSkills skills={skills}/>
                </PDFSection>
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
            <View style={[styles.section, styles.main]}>
                <View style={styles.header}>
                    <View>
                        <Text style={[styles.h1, styles.titleText]}>{t('name')}</Text>
                        <Text style={[styles.h2, styles.subTitleText]}>{t('title')}</Text>
                    </View>
                    <Text style={[styles.h4, styles.description]}>{t('about.description')}</Text>
                </View>
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
        </>
    );
}
