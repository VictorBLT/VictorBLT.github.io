import { Text } from '@react-pdf/renderer';

import { getActiveMarks, renderInline } from '../../../components/mardown/parser.js';
import { styles } from '../ResumeStyle.jsx';

const MARK_STYLES = {
    bold: styles.bold,
    italic: styles.italic,
};

const pdfAdapter = {
    renderToken({ content, marks }, key) {
        const activeStyles = getActiveMarks(marks)
            .map((mark) => MARK_STYLES[mark])
            .filter(Boolean);

        if (activeStyles.length === 0) return content;

        return (
            <Text key={key} style={activeStyles}>
                {content}
            </Text>
        );
    },
};

export default function PDFMarkdown({ style, text }) {
    return <Text style={style}>{renderInline(text, pdfAdapter)}</Text>;
}
