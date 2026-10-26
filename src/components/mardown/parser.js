const MARKERS = [
    { token: '**', mark: 'bold' },
    { token: '*', mark: 'italic' },
];

const MARK_ORDER = ['italic', 'bold'];

function parseInline(text) {
    if (!text) return [];

    const active = { bold: false, italic: false, underline: false };
    const tokens = [];
    let buffer = '';
    let i = 0;

    const flush = () => {
        if (buffer) {
            tokens.push({ type: 'text', content: buffer, marks: { ...active } });
            buffer = '';
        }
    };

    while (i < text.length) {
        const marker = MARKERS.find((m) => text.startsWith(m.token, i));

        if (marker) {
            const before = text[i - 1] ?? ' ';
            const after = text[i + marker.token.length] ?? ' ';
            const isOpening = !active[marker.mark] && !/\s/.test(after);
            const isClosing = active[marker.mark] && !/\s/.test(before);

            if (isOpening || isClosing) {
                flush();
                active[marker.mark] = !active[marker.mark];
            } else {
                buffer += marker.token;
            }
            i += marker.token.length;
            continue;
        }

        buffer += text[i];
        i += 1;
    }

    flush();
    return tokens;
}

export function getActiveMarks(marks) {
    return MARK_ORDER.filter((mark) => marks[mark]);
}

export function renderInline(text, adapter) {
    return parseInline(text).map((token, index) => adapter.renderToken(token, index));
}