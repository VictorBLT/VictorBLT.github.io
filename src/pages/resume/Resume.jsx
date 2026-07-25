import { Document, Page } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';

import ResumeFR from './ResumeFR.jsx';
import styles from './ResumeStyle.jsx';

export default function Resume() {
    const { t } = useTranslation();

    return (
        <Document
            title={t('resume.file', { name: t('name') })}
            author={t('name')}
            creator={t('name')}
            producer={'Portfolio'}>
            <Page size="A4" style={styles.page}>
                <ResumeFR />
            </Page>
        </Document>
    );
}
