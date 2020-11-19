// importing svg images which are smaller files than pngs + jpgs from worldvectorlogo.com

// my skill imports
import HTML5 from "../../assets/img/skills/html.svg";
import CSS3 from "../../assets/img/skills/css.svg";
import SASS from "../../assets/img/skills/sass.svg";
import BOOTSTRAP from "../../assets/img/skills/bootstrap.svg";
import REACT from "../../assets/img/skills/react.svg";
import REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
// backend imports
import NODE_JS from "../../assets/img/skills/nodejs.svg";
// DB imports
import MONGODB from "../../assets/img/skills/mongodb.svg";
// version control imports
import GIT from "../../assets/img/skills/git.svg";
// hosting imports
import HEROKU from "../../assets/img/skills/heroku.svg";
import GITHUB_PAGES from "../../assets/img/skills/github.svg";
// programming lang. imports
import JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import TYPESCRIPT from "../../assets/img/skills/typescript.svg";
import Slack from "../../assets/img/skills/slack-new-logo.svg";

export const skills = {
  // frontend skills start here
  frontend: [
    {
      link: "https://en.wikipedia.org/wiki/HTML5",
      imgAltText: "HTML 5",
      imgSrc: HTML5,
      skillName: "HTML5"
    },
    {
      link:
        "https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1",
      imgAltText: "CSS 3",
      imgSrc: CSS3,
      skillName: "CSS3"
    },
    {
      link: "https://www.javascript.com/",
      imgAltText: "JavaScript",
      imgSrc: JAVASCRIPT,
      skillName: "JavaScript"
    },
    {
      link: "https://getbootstrap.com/",
      imgAltText: "Bootstrap",
      imgSrc: BOOTSTRAP,
      skillName: "Bootstrap"
    },
    {
      link: "https://reactjs.org/",
      imgAltText: "React JS",
      imgSrc: REACT,
      skillName: "React JS"
    },
    {
      link: "https://react-bootstrap.github.io/",
      imgAltText: "React Bootstrap",
      imgSrc: REACT_BOOTSTRAP,
      skillName: "React Bootstrap"
    },
    {
      link: "https://sass-lang.com/",
      imgAltText: "Sass",
      imgSrc: SASS,
      skillName: "Sass"
    }
  ],

  // backend skills start here

  backend: [
    {
      link: "https://nodejs.org/en/",
      imgAltText: "Node.js",
      imgSrc: NODE_JS,
      skillName: "Node.js"
    },
    {
      link: "https://slack.com/",
      imgAltText: "Slack",
      imgSrc: Slack,
      skillName: "Slack"
    }
  ],

  // backend skills start here

  hostingPlatforms: [
    {
      link: "https://www.heroku.com/",
      imgAltText: "Heroku",
      imgSrc: HEROKU,
      skillName: "Heroku"
    },
    {
      link: "https://pages.github.com/",
      imgAltText: "GitHub Pages",
      imgSrc: GITHUB_PAGES,
      skillName: "GitHub Pages"
    }
  ],

  // backend skills start here

  programmingLanguages: [
    {
      link: "https://www.javascript.com/",
      imgAltText: "JavaScript",
      imgSrc: JAVASCRIPT,
      skillName: "JavaScript"
    },
    {
      link: "https://www.typescriptlang.org/",
      imgAltText: "TypeScript",
      imgSrc: TYPESCRIPT,
      skillName: "TypeScript"
    }
  ],

  // backend skills start here

  databases: [
    {
      link: "https://www.mongodb.com/",
      imgAltText: "MongoDB",
      imgSrc: MONGODB,
      skillName: "MongoDB"
    }
  ],

  versionControl: [
    {
      link: "https://git-scm.com/",
      imgAltText: "GIT",
      imgSrc: GIT,
      skillName: "GIT"
    }
  ]
};
