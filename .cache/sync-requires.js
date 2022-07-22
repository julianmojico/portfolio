const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/julianmojico/projects/portfolio/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/julianmojico/projects/portfolio/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/julianmojico/projects/portfolio/src/pages/about.js"))),
  "component---src-pages-art-js": hot(preferDefault(require("/Users/julianmojico/projects/portfolio/src/pages/art.js"))),
  "component---src-pages-elements-js": hot(preferDefault(require("/Users/julianmojico/projects/portfolio/src/pages/elements.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/julianmojico/projects/portfolio/src/pages/index.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/julianmojico/projects/portfolio/src/templates/blog-post.js")))
}

