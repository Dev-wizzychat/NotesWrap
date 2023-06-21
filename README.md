# NotesWrap
NotesWrap is a web application that allows users to save their own notes in a MongoDB database. The frontend of the application is developed using ReactJS, and user authentication is implemented using Passport.js. Users can fetch, edit, and delete their own notes securely without accessing other users' notes.

Features

1. User authentication: Users can create an account, login, and securely authenticate using Passport.js. This ensures that each user can only access and manage their own notes.
2. Create and save notes: Once logged in, users can create new notes by providing a title, description, and optional tags. The notes are saved in a MongoDB database and associated with the logged-in user.
3. Fetch notes: Users can view a list of their own notes, with options to filter and search by tags. The notes are fetched from the MongoDB database and displayed in the user interface.
4. Edit notes: Users can edit the title, description, and tags of their existing notes. Changes made to the notes are updated in the MongoDB database.
5. Delete notes: Users can delete their own notes, removing them from the MongoDB database.


Technologies Used
1. ReactJS: The frontend of the application is developed using ReactJS, providing a dynamic and responsive user interface.
2. MongoDB: The notes are stored in a MongoDB database, providing persistence and scalability.
3. Passport.js: User authentication is implemented using Passport.js, ensuring secure access to user-specific notes.
4. Express.js: The backend server is built using Express.js, handling API requests and interacting with the MongoDB database.
5. Node.js: The application runs on the Node.js runtime environment, allowing server-side JavaScript execution.

Usage
1. Open your preferred web browser and navigate to http://localhost:3000.
2. Register for a new account or log in if you already have an account.
3. Once logged in, you will be able to create new notes, view your existing notes, edit notes, and delete notes.
4. The application ensures that you can only access and manage your own notes.
