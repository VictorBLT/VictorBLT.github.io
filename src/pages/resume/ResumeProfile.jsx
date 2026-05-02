import { Image, Link, View } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';

import profilePic from '../../../public/images/vic.png';
import PDFItemList from './PDFItemList.jsx';
import PDFSection from './PDFSection.jsx';
import styles from './ResumeStyle.jsx';

export default function ResumeProfile() {
    const { t } = useTranslation();

    return (
        <>
            <View style={styles.imgContainer}>
                <View style={styles.circleBackground} />
                <Image style={styles.profileImage} src={profilePic} />
            </View>
            <PDFSection title={t('resume.profile.title')}>
                <PDFItemList src={'/icons/location.svg'} text={t('resume.profile.location')} />
                <Link style={styles.a} src={t('mailto', { email: t('email') })}>
                    <PDFItemList src={'/icons/mail.svg'} text={t('email')} />
                </Link>
                <PDFItemList src={'/icons/car.svg'} text={t('resume.profile.driver')} />
                <Link style={styles.a} src={t('linkedin_url', { username: t('linkedin') })}>
                    <PDFItemList src={'/icons/linkedin.svg'} text={`@${t('linkedin')}`} />
                </Link>
            </PDFSection>
        </>
    );
}
