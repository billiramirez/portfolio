const {
  headData,
  heroData,
  aboutData,
  projectsData,
  contactData,
  footerData,
  githubButtons,
} = require('./src/mock/data');

exports.createPages = function ({ actions }) {
  actions.createPage({
    path: '/',
    component: require.resolve(`./src/templates/home.js`),
    context: {
      mockData: {
        headData,
        heroData,
        aboutData,
        projectsData,
        contactData,
        footerData,
        githubButtons,
      },
    },
  });
};
