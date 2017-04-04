const articles = [
  require('./20170404-positioning-elements-on-the-web.md'),
  require('./20170321-on-markup-and-layout.md'),
  require('./20170314-whitespace.md'),
  require('./20170307-typography.md'),
  require('./20170228-abstraction-vs-skeuomorphism.md'),
  require('./20170221-balance.md'),
  require('./20170214-form-and-space-on-the-web.md'),
  require('./20170207-color.md'),
  require('./20170131-disciplines-of-web-design.md'),
  require('./20141104-design-spiking.md')
];
export default articles;

export const latestArticle = articles[0];
export const featuredArticles = articles.slice(0, 4);
