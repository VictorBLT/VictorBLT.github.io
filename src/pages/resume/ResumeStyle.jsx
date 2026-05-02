import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
    },
    section: { padding: 20, gap: 18 },
    sidebar: { width: '33%', backgroundColor: '#F9FBFD' },
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
        backgroundColor: '#00ADB5',
        borderRadius: 500,
    },
    profileImage: {
        transform: 'scale(1.4)',
        objectFit: 'cover',
        left: -7,
        top: 10,
    },
    h1: {
        color: '#141C3A',
        fontWeight: 900,
        fontSize: 20,
    },
    h2: {
        color: '#535E88',
        fontWeight: 400,
        fontSize: 14,
    },
    p: {
        color: '#535E88',
        fontWeight: 300,
        fontSize: 10,
        lineHeight: 1.3,
    },
    a: {
        textDecoration: 'none',
    },
    skillsWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        //espace entre les categories
    },
    skillCategory: {
        width: '48%',
    },
    categoryTitle: {
        color: '#141C3A',
        fontWeight: 400,
        fontSize: 12,
        marginBottom: 4,
    },
    skillsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 4,
    },
});

export default styles;
