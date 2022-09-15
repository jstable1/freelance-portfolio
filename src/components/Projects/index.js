import dooziesImg from "../../assets/images/2doozies.jpeg";
import brainFoodImg from "../../assets/images/brain-food.jpeg";
import doozies2Img from "../../assets/images/2doozies2.0.jpeg";
import techBlogImg from "../../assets/images/tech-blog.jpeg";
import noteTakerImg from "../../assets/images/note-taker.jpeg";
import budgetTrackerImg from "../../assets/images/budget-tracker.jpeg";

const Projects = [
    {
        name: '2doozies 2.0: A To-Do and Affirmation Web Application',
        img: doozies2Img,
        appLink: "https://safe-dusk-34146.herokuapp.com/",
        github: "https://github.com/jstable1/2-doozies",
        tech: 'React.js, MongoDB, Express.js, GraphQL, Apollo Server, JSON Web Token, Node.js, HTML and CSS',
        information: 'This application allows user to add tasks to a daily to-do list. Users can check off the tasks once they are completed and at midnight every night completed tasks are deleted from the database. The application also shows a daily affirmation. The information is stored in a MongoDB database. The information is accessed using a GraphQL API built with the Apollo Server. The front end was built using React.js.'
    },
    {
        name: '2doozies: A To-Do Web Application',
        img: dooziesImg,
        appLink: "https://twodoozies-app.herokuapp.com/",
        github: "https://github.com/tyarchy/2Doozies",
        tech: 'Handlebars, Express.js, Node.js, MySQL, Sequelize, HTML and CSS',
        information: 'This application allows user to add tasks to a daily to-do list. Users can delete the tasks once they are completed. The tasks are stored in a MySQL database using the Sequelize ORM. Node.js and Express.js are used to create a RESTful API and the front end was built using Handlebars.js.'
    },
    {
        name: 'Brain Food: A Podcast and Book Search Web Application',
        img: brainFoodImg,
        appLink: "https://jstable1.github.io/brain-food/",
        github: "https://github.com/jstable1/brain-food",
        tech: 'JavaScript, Apple iTunes API, Open Library API, HTML and CSS (Bulma)',
        information: 'Brain Food is a quick entertainment search tool to help you find content you’ll enjoy in the form of a podcast or book. You can search by keyword or category and get a quick list of 25 relevant podcasts and 25 relevant books to choose from. When you find one you’re interested in exploring further you can click on that result and be taken directly to Apple iTunes or Open Library API to discover more and listen or read!'
    },
    {
        name: 'Tech Blog: A CMS-Style Blog Site',
        img: techBlogImg,
        appLink: "https://quiet-dawn-26561.herokuapp.com/",
        github: "https://github.com/jstable1/tech-blog",
        tech: 'MySQL, Sequelize, Express.js, Node.js, Handlebars, HTML and CSS',
        information: 'Tech Blog is a blog site for developers to publish articles, blog posts and their thoughts and opinions. It was created using the Model View Controller paradigm. Blog content is stored in a MySQL database using the Sequelize ORM and the front-end was created using Handlebars.js. It uses bcrypt to hash passwords and the dotenv package.'
    },
    {
        name: 'Budget Tracker: A Budget Tracking Application',
        img: budgetTrackerImg,
        appLink: "https://nameless-river-62078.herokuapp.com/",
        github: "https://github.com/jstable1/budget-tracker",
        tech: 'MongoDB, Mongoose, Express.js, HTML and CSS',
        information: 'Budget Tracker is a Progressive Web Application where users can track their withdrawals and deposits with or without a data or internet connection. Travelers can have confidence knowing their account balance is accurate even without service. The entries are stored in a MongoDB database. A service worker and IndexedDB are used for offline functionality so data is added to the database automatically once the user regains a data or internet connection.'
    },
    {
        name: 'Note Taker: A Note Taking Application',
        img: noteTakerImg,
        appLink: "https://immense-dawn-25672.herokuapp.com/",
        github: "https://github.com/jstable1/note-taker",
        tech: 'Express.js, HTML and CSS',
        information: 'Users are able to write and save notes. Notes are saved in a JSON file and accessed using API routes.'
    },
]

export default Projects;