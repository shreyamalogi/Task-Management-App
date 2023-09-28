# Task Management App : ToDo List App

![ToDo List App Screenshot](todo-app-screenshot.png)

## Table of Contents

- [About the App](#about-the-app)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Developers](#Developers)
- [Contributing](#contributing)
- [License](#license)

## About the App

ToDo List App is a dynamic web application designed to help users manage their day-to-day tasks effectively. It provides a user-friendly interface for creating, updating, and tracking tasks, making it a valuable tool for planning daily schedules.

### Features

- Create new tasks with due dates.
- Mark tasks as completed.
- Edit or delete existing tasks.
- User-friendly and intuitive interface.
- Data persistence using MongoDB.
- Hosted on Heroku with AWS-based database storage.

### Demo

- Check out the live demo of the ToDo List App: [Live Demo](https://polar-castle-59133.herokuapp.com/)

- Todolist overview : [click here](https://github.com/shreyamalogi/todolist/blob/main/todolist%20overview.pdf)

## Tech Stack

The ToDo List App is built using the following technologies and libraries:

- **Frontend**:
  - HTML
  - Custom CSS
  - JavaScript
  - EJS (Embedded JavaScript) for templating

- **Backend**:
  - Node.js
  - Express.js
  - Mongoose (ODM for MongoDB)

- **Database**:
  - MongoDB hosted on MongoDB Atlas

- **Deployment and Hosting**:
  - Heroku for app deployment
  - AWS for database hosting

- **Development Tools**:
  - Visual Studio Code (VSCode) for code editing
  - Git and GitHub for version control and collaboration

## Getting Started

To run this application locally or contribute to its development, follow these steps:

1. **Clone the Repository**:

   ```
   git clone https://github.com/yourusername/todolist-app.git
   cd todolist-app
   ```

2. **Install Dependencies**:

   ```
   npm install
   ```

3. **Set Environment Variables**:

   Create a `.env` file in the project root and add the following environment variables:

   ```
   PORT=3000
   MONGODB_URI=your-mongodb-connection-string
   ```

4. **Run the App**:

   ```
   npm start
   ```

   The app should now be running locally at `http://localhost:3000`.



## Deployment

The ToDo List App is currently deployed on Heroku, with the database hosted on an AWS cluster. To deploy your own instance of the app, follow these steps:

1. **Heroku Deployment**:

   - Create a Heroku account if you don't have one.
   - Install the Heroku CLI.
   - Log in to Heroku using the CLI.
   - Create a new Heroku app.
   - Set the `MONGODB_URI` environment variable in your Heroku app settings.
   - Deploy the app using Git or Heroku CLI.

2. **AWS Database Hosting**:

   - Sign in to your AWS account.
   - Create a MongoDB cluster using MongoDB Atlas.
   - Configure security settings and obtain the connection string.
   - Set the `MONGODB_URI` environment variable in your Heroku app to point to the MongoDB Atlas cluster.
  
## Developers

  The instructions I provided were meant to guide users on how to explore the commit history of your GitHub repository to understand how your ToDo List App was developed. Here's a step-by-step explanation of how to do it:

- Access the GitHub Repository: Go to your ToDo List App's GitHub repository. It should have a URL like https://github.com/yourusername/todolist-app.

- View the Commit History: On the GitHub repository page, locate the "Commits" tab. It's typically found below the green bar that displays the repository name.

- Select a Version: In the list of commits, you'll see a history of changes made to the code. Each commit represents a set of changes made at a specific point in time. Choose a commit that corresponds to the version you want to explore (e.g., "Version 1").

- Browse Files: After selecting a commit, you'll be taken to a page that shows the details of that commit, including the files that were changed. On the top right corner of this page, you'll find a button that says "Browse Files." Click on it.

- Explore the Code: You will now be able to view the code changes made in that specific commit. You can see what was added, modified, or deleted in that version of the app.

- Download Code: If you want to download a specific version of the app to your local system, you can do so by clicking the "Download" button on this page. This allows you to have a copy of that particular version for offline exploration.

- Repeat these steps for different commits to see how the app evolved over time. This commit history provides a detailed insight into the development process of your ToDo List App, allowing others to understand the changes and improvements made at each stage of development.

## Contributing

Contributions to the ToDo List App are welcome! Here are the steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with clear, concise commit messages.
4. Push your changes to your fork.
5. Create a pull request to the main repository's `master` branch.

Please ensure that your code adheres to the project's coding standards and includes appropriate tests if necessary.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---



# Deployment---resources for me 

TodoList app deployed on heroku : https://polar-castle-59133.herokuapp.com/

database deployed on aws cluster : [admin access URL ](https://cloud.mongodb.com/v2/61ee673c230131246b5702aa#clusters?fastPoll=true)



