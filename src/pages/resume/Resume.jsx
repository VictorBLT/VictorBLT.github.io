import { Document, Page } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';

import ResumeEN from './ResumeEN.jsx';
import ResumeFR from './ResumeFR.jsx';
import styles from './ResumeStyle.jsx';

export default function Resume() {
    const { i18n, t } = useTranslation();

    const renderResume = () => {
        const currentLang = i18n.language ? i18n.language.substring(0, 2).toLowerCase() : 'en';
        switch (currentLang) {
            case 'fr':
                return <ResumeFR />;
            case 'en':
            default:
                return <ResumeEN />;
        }
    };

    return (
        <Document
            title={t('resume.file', { name: t('name') })}
            author={t('name')}
            creator={t('name')}
            producer={'Portfolio'}>
            <Page size="A4" style={styles.page}>
                {renderResume()}
            </Page>
        </Document>
    );
}
