# Code Chronicles CMS

## Description

The Code Chronicles CMS project is a CMS-style blog site built from the ground up. This application follows the MVC paradigm, utilizing Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. Developers can publish their blog posts and engage in discussions by commenting on other developers' posts. The project is deployed on Heroku, offering a real-world experience for managing and sharing blog content.

Visit the [Code Chronicles CMS Repository](https://github.com/elavallee13/codechronicles) for more information.

## Table of Contents

- [Description](#description)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with the Code Chronicles CMS, follow these steps:

1. Clone the repository to your local machine:
   git clone https://github.com/elavallee13/codechronicles.git

2. Navigate to the project directory:
   cd codechronicles

3. Install the required dependencies:
   npm install

4. Configure the database connection details in the `.env` file.

5. Run the database migrations:
    npm run db:migrate
   

6. Start the server:
   npm start
   

The server will be up and running at http://localhost:3001.

## Usage

The Code Chronicles CMS empowers developers to create and manage their blog posts. With user authentication and commenting features, it offers a dynamic platform for engaging discussions and sharing insights.

## Features

- **User Authentication:** Secure user authentication using the express-session npm package.
- **Create and Edit Posts:** Developers can create and edit their blog posts using the user-friendly interface.
- **Commenting:** Engage in discussions by commenting on other developers' posts.
- **Responsive Design:** The application is designed to be responsive across various devices.

## Technologies Used

- **Node.js:** A runtime environment for executing JavaScript on the server.
- **Express.js:** A flexible and minimal Node.js framework for building powerful APIs.
- **Handlebars.js:** A templating language for rendering dynamic HTML templates.
- **Sequelize:** An Object-Relational Mapping (ORM) library for database interactions.
- **express-session:** A middleware package for handling user authentication sessions.

## Contributing

Contributions to the Code Chronicles CMS project are welcomed! To contribute:

1. Fork the repository.
2. Create a new branch.
3. Commit your changes.
4. Push your branch to your forked repository.
5. Create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Built by [Eric Lavallee](https://github.com/elavallee13) for the Code Chronicles CMS project. Visit the [Code Chronicles CMS Repository](https://github.com/elavallee13/codechronicles) for more information.