import about from './about.json';
import education from './education.json';
import experiences from './experiences.json';
import global from './global.json';
import projects from './projects.json';
import resume from './resume.json';
import skills from './skills.json';

const en = {
    ...global,
    about: about,
    education: education,
    experiences: experiences,
    projects: projects,
    skills: skills,
    resume: resume,
};

export default en;
