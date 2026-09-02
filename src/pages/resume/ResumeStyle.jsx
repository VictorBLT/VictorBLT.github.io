import { StyleSheet } from '@react-pdf/renderer';

export const theme = {
    colors: {
        accent: '#00adb5',
        blue1: '#141c3a',
        blue2: '#535e88',
        blue3: '#dcdcde',
        blue4: '#f9fbfd',
        background: '#ffffff',
        style1: '#e5ebf2',
    },
};

export const styles = StyleSheet.create({
    page: {
        backgroundColor: theme.colors.background,
        flexDirection: 'row',
        width: '100%',
        height: '100%',
    },
    section: { padding: 20, gap: 18 },
    sidebar: { width: '33%', backgroundColor: theme.colors.blue4 },
    main: { width: '66%' },
    header: { gap: 8 },
    imgContainer: {
        position: 'relative',
        width: '70%',
        aspectRatio: '1:1',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: 25,
    },
    circleBackground: {
        position: 'absolute',
        width: '96%',
        aspectRatio: '1:1',
        backgroundColor: theme.colors.accent,
        borderRadius: 500,
    },
    profileImage: {
        transform: 'scale(1.4)',
        objectFit: 'cover',
        left: -7,
        top: 10,
    },
    titleText: {
        fontSize: 20,
    },
    subTitleText: {
        color: theme.colors.blue2,
        fontSize: 14,
    },
    description: {
        lineHeight: 1.3,
    },
    containerRow: {
        flexDirection: 'row',
        gap: 32,
    },
    projectsContainer: {
        gap: 8,
    },
    projectName: {
        marginBottom: 4,
    },

    h1: {
        color: theme.colors.blue1,
        fontWeight: 900,
        fontSize: 16,
    },
    h2: {
        color: theme.colors.blue1,
        fontWeight: 400,
        fontSize: 12,
    },
    h3: {
        color: theme.colors.blue1,
        fontWeight: 300,
        fontSize: 10,
    },
    h4: {
        color: theme.colors.blue2,
        fontWeight: 300,
        fontSize: 10,
    },
    p: {
        color: theme.colors.blue2,
        fontWeight: 300,
        fontSize: 9,
    },
    a: {
        textDecoration: 'none',
    },
});

export default styles;
