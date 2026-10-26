import { Text } from '@react-pdf/renderer';

import { styles } from '../ResumeStyle.jsx';
import {renderInline, getActiveMarks} from "../../../components/mardown/parser.js";

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
    return (
        <Text style={style}>
            {renderInline(text, pdfAdapter)}
        </Text>
    );
}
