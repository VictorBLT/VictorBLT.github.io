import { Text, View } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';

import styles from './ResumeStyle.jsx';

export default function ResumeHeader() {
    const { t } = useTranslation();

    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.h1}>{t('name')}</Text>
                <Text style={styles.h2}>{t('title')}</Text>
            </View>
            <Text style={styles.p}>{t('about.description')}</Text>
        </View>
    );
}
