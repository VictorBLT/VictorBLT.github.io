import React from 'react';

import { getActiveMarks, renderInline } from './parser.js';

const MARK_TAGS = {
    bold: 'strong',
    italic: 'em',
};

const htmlAdapter = {
    renderToken({ content, marks }, key) {
        const node = getActiveMarks(marks).reduce((child, mark) => {
            const Tag = MARK_TAGS[mark];
            return <Tag key={mark}>{child}</Tag>;
        }, content);

        return <React.Fragment key={key}>{node}</React.Fragment>;
    },
};

export default function Markdown({ text, ...props }) {
    return <p {...props}>{renderInline(text, htmlAdapter)}</p>;
}
