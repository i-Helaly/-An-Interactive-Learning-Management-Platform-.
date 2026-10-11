# Learnova — Interactive Learning Management Platform

An interactive learning management platform built with **Node.js**, **Express.js**, and **MongoDB**.

Learnova enables instructors to create and manage courses, while students can enroll in courses, learn through lessons, submit assignments, take quizzes, and track their learning progress.

## Tech Stack

- **Runtime:** Node.js
- **Language:** JavaScript
- **Framework:** Express.js
- **Database:** MongoDB
- **ODM:** Mongoose
- **Environment Variables:** dotenv
- **Development Tool:** nodemon

## Project Structure

```text
Learnova/
├── config/              # Application and database configuration
├── controllers/         # Handle incoming requests and responses
├── middlewares/         # Authentication, authorization, and error handling
├── models/              # MongoDB schemas and models
├── routes/              # API route definitions
├── services/            # Business logic and reusable operations
├── utils/               # Helper functions and utilities
├── app.js               # Express application configuration
├── server.js            # Starts the HTTP server
├── .env                 # Environment variables (not committed)
├── .env.example         # Example environment configuration
├── .gitignore
├── package.json
└── README.md
```

*The project structure may evolve as new features are implemented.*

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) — LTS version recommended
- [MongoDB](https://www.mongodb.com/) — Local installation or MongoDB Atlas
- [Git](https://git-scm.com/)

### Installation

**1. Clone the repository**

```bash
git clone <https://github.com/i-Helaly/-An-Interactive-Learning-Management-Platform-..git>
```

**2. Navigate to the project directory**

```bash
cd Learnova
```

**3. Install dependencies**

```bash
npm install
```


### Running the Application

Start the development server:

```bash
npm run dev
```

Or start the application directly:

```bash
node server.js
```

These commands assume that the corresponding scripts and `server.js` file have been configured.

Once the server is running, the application will be available at:

`http://localhost:4000`

## Core Features

The following features are planned for the project:

- User registration and login
- Role-based access control
- Course creation and management
- Lessons and course content management
- Student course enrollment
- Learning progress tracking
- Assignment submission and grading
- Quizzes and automatic grading
- Student performance tracking
- Course completion and certificates

## API Overview

| Module         | Description                                 |
| -------------- | ------------------------------------------- |
| Authentication | Registration, login, and authentication     |
| Users          | User profiles and role management           |
| Courses        | Create, browse, update, and manage courses  |
| Lessons        | Manage lessons and learning content         |
| Enrollments    | Enroll students in courses                  |
| Progress       | Track lesson completion and course progress |
| Assignments    | Submit assignments and manage grading       |
| Quizzes        | Manage quizzes and student attempts         |
| Certificates   | Manage course completion certificates       |

*API modules will be documented as they are implemented.*

## Development Roadmap

- [ ] Initialize the project and configure Express
- [ ] Connect the application to MongoDB
- [ ] Implement authentication and authorization
- [ ] Build course and lesson management
- [ ] Implement student enrollment and progress tracking
- [ ] Build assignments, submissions, and grading
- [ ] Implement quizzes and automatic grading
- [ ] Add course completion and certificates
- [ ] Document the API using Swagger

## Contributing

Contributions and suggestions are welcome.

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/feature-name`
3. Commit your changes: `git commit -m "Add feature"`
4. Push your branch: `git push origin feature/feature-name`
5. Open a Pull Request.

## License

This project is licensed under the ISC License, unless specified otherwise in the project's license file.
