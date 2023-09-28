# 🚀📅📝 **Task Management App: ToDo List App** 📝📅🚀

![todo](https://github.com/shreyamalogi/Task-Management-App/blob/main/resources/todoodiii.gif)

:trophy: **14 Stars!** :star::star::star::star::star::star::star::star::star::star::star::star::star::star:



- ## **Why?** 🤔
In the midst of busy modern life, developer Shreya took on the challenge of simplifying daily routines. Recognizing the chaos of managing tasks , she set out to create the ToDo List App—a user-friendly tool for efficient task management. The app, hosted on Heroku with secure data storage on AWS-based MongoDB Atlas, empowers users to stay organized and productive. Today, it stands as a symbol of her commitment to simplifying lives, one task at a time. 💪🌟 It was created with the goal of providing a simple yet effective tool for managing daily tasks. As a user, you can easily create and delete tasks to stay organized and productive. The app's responsive design ensures that you can access your tasks from any device, whether it's your computer, tablet, or smartphone. 📱💼🌟

- ## **Demo** 📺
Check out the live demo of the ToDo List App: [Live Demo](https://polar-castle-59133.herokuapp.com/) 🌐👀

- ## **Todolist overview:** [Click Here](https://github.com/shreyamalogi/Task-Management-App/blob/main/resources/todolist%20overview.pdf) 📄👓

# Table of Contents 📚
- Technical Stack
- Getting Started
- Features
- Code History
- Contributing
- License 📝👩‍💻🔐



## Technical Stack 🛠️

- **Frontend**:
  - HTML 🌐
  - Custom CSS 🎨
  - JavaScript 🚀
  - EJS (Embedded JavaScript) for templating 🖼️

- **Backend**:
  - Node.js 🚀
  - Express.js 🚀
  - MongoDB via Mongoose (ODM) 🍃

- **Deployment and Hosting**:
  - Hosted on Heroku 🌐
  - MongoDB hosted on AWS cluster via MongoDB Atlas ☁️📊

## Challenges Faced and Their Solutions 🤯💡

**1. Database Connection Issues**

  - Challenge: Connecting to MongoDB Atlas - connection error message.
  
  - Solution: Ensure that the IP allowlist in your MongoDB Atlas cluster allows connections from your network. Double-check credentials and authentication settings. Consider whitelisting the IP address or range. 🔌🔍🔒

**2. Responsive Design**

  - Challenge: Designing a responsive user interface that adapts to different screen sizes can be complex.
  
  - Solution: Utilize CSS media queries to create responsive layouts, ensuring elements adjust appropriately on various devices. Test the app on different screen sizes to refine the design. 📱🖥️📏

**3. Handling User Input**

  - Challenge: Managing user input and interactions, such as adding and deleting tasks, can be intricate.
  
  - Solution: Implement robust form handling and validation in your app. Use Express.js to process user input securely. Handle database updates and deletions carefully to avoid data corruption. 📝👨‍💻🔧

## Getting Started 🚀

To run this application locally or contribute to its development, follow these steps:

1. **Clone the Repository**:

   ```
   git clone https://github.com/shreyamalogi/todolist-app.git
   cd todolist-app
   ```

2. **Install Dependencies**:

   ```
   npm install
   ```


3. **Run the App**:

   ```
   node app.js
   ```

   The app should now be running locally at `http://localhost:3000`. 🏃💨

4. **Mongodb setup**

   To start MongoDB server and connect to it using MongoDB Compass, follow these steps:

1. **Install MongoDB:** If you haven't already installed MongoDB, you can download it from the official MongoDB website (https://www.mongodb.com/try/download/community). Follow the installation instructions for your operating system.

2. **Start MongoDB Server:**
   - On most systems, you can start the MongoDB server by running the `mongod` command in your terminal or command prompt.
   - If MongoDB is installed correctly, this command will start the server. It will listen on the default port 27017 by default. You can specify a different port using the `--port` option if needed.

   ```
   mongod
   ```

3. **Open MongoDB Compass:**
   - MongoDB Compass is a graphical user interface (GUI) tool for MongoDB. You can download it from the MongoDB website (https://www.mongodb.com/try/download/compass).

4. **Connect to MongoDB Server:**
   - Launch MongoDB Compass after installation.
   - On the initial screen, click the "Connect" button.

5. **Configure Connection:**
   - In the "Connect to Host" dialog box, you'll need to configure your connection settings.
   - By default, Compass will try to connect to `localhost` on port `27017`.
   - If your MongoDB server is running on the default settings, you can simply click the "Connect" button. Compass will connect to the server.


### Features 🌟

1. **Create New Tasks**: Users can create new tasks to add to their to-do lists. ✅

2. **Mark Tasks as Completed**: Users can mark tasks as completed to track their progress. ✅

3. ** Delete Existing Tasks**: Users can delete tasks they no longer need. ✏️🗑️

4. **User-Friendly and Intuitive Interface**: The app aims to provide a user-friendly and intuitive interface for a smooth task management experience. 🤗👌

5. **Data Persistence Using MongoDB**: MongoDB is used to persistently store task data, ensuring that tasks are retained even after the user closes the app. 🗄️💾

6. **Hosted on Heroku with AWS-Based Database Storage**: The app is hosted on Heroku, providing online access to users. The database is hosted on AWS through MongoDB Atlas, ensuring reliable and scalable data storage. 🌐☁️

These features collectively make your ToDo List App a useful tool for task management and organization. Users can efficiently create, delete, and track their tasks with the app's intuitive interface, and the data is securely stored in the cloud for accessibility from anywhere. 📝📈🌍



## Code History 📜

To understand how the app was built from scratch and explore different versions, follow these steps:

1. Click on the "Commits" tab in the GitHub repository. 📚🔍

2. Select a specific commit representing a version (e.g., "Version 1 - Initial Setup"). 📌🗂️

3. Click "Browse Files" to view the code changes for that version. 👁️📂

This commit history provides insights into the app's development process. 🚀🔍


## Code History steps: 

To download a specific version of your project using the command line (CMD or terminal), you can use the Git command-line tool. Here are the steps to download a specific version of your project:

1. **Open a Terminal/Command Prompt**: Open your terminal or command prompt on your computer. 💻🔑

2. **Navigate to Your Project's Directory**: Use the `cd` command to navigate to the directory where your project is stored. For example: 📂🚶

   ```
   cd path/to/your/todolist-app
   ```

   Replace `path/to/your/todolist-app` with the actual path to your project directory. 📍📁

3. **List Available Versions**: To see a list of available versions (commits), you can use the `git log` command. This will display a list of commits along with their unique commit IDs (hashes) and commit messages. 📝🗃️

   ```
   git log
   ```

   You'll see something like this:

   ```
   commit 1234567890abcdef1234567890abcdef12345678 (HEAD -> master)
   Author: Your Name <youremail@example.com>
   Date:   Mon Sep 20 12:34:56 2023 +0200

       Version 1.0 - Initial Setup

   commit abcdef1234567890abcdef1234567890abcdef12
   Author: Your Name <youremail@example.com>
   Date:   Tue Sep 21 09:00:00 2023 +0200

       Version 1.1 - Templating Engine Integration

   # ... (more commits)
   ```

4. **Checkout the Desired Version**: To download a specific version, use the `git checkout` command followed by the commit ID of the version you want. For example, to download "Version 1.0 - Initial Setup," you would use the commit ID associated with that version:

   ```
   git checkout 1234567890abcdef1234567890abcdef12345678
   ```

   Replace `1234567890abcdef1234567890abcdef12345678` with the actual commit ID you want to download. 🚀📦

5. **Explore the Downloaded Version**: Once you've checked out the specific version, your project files will be updated to reflect the state of that version. You can now explore the code and files for that particular version on your local system. 👩‍💻📂

6. **Return to the Latest Version (Optional)**: If you want to return to the latest version (the `master` branch), you can use the `git checkout` command without specifying a commit ID:

   ```
   git checkout master
   ```

   This will bring you back to the latest version of your project. 🔄📈

Please note that when you check out a specific version, you'll be in a "detached HEAD" state, which means you can view and work with the code, but changes won't be saved to the version history. If you want to make changes based on a specific version, it's recommended to create a new branch from that version using `git checkout -b new-branch-name`. 🌟🌿

## Contributing 🤝🌟

Contributions to the ToDo List App are welcome! Here are the steps to contribute:

1. Fork the repository. 🍴
2. Create a new branch for your feature or bug fix. 🌿
3. Make your changes and commit them with clear, concise commit messages. 📝
4. Push your changes to your fork. 🚀
5. Create a pull request to the main repository's `master` branch. 📤

Please adhere to the project's coding standards and include appropriate tests if necessary. 🛠️📊

## License 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 📚📄

MIT License

Copyright (c) 2022 Shreya Malogi 📅📆

## Star This Repository ⭐

If you find this ToDo List App helpful or interesting, please consider starring this repository on GitHub to show your support. 🌟🌟🌟



# Deployment---resources for me 

TodoList app deployed on heroku : https://polar-castle-59133.herokuapp.com/

database deployed on aws cluster : [admin access URL ](https://cloud.mongodb.com/v2/61ee673c230131246b5702aa#clusters?fastPoll=true)



