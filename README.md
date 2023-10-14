[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/6BOvYMwN)

# Software Requirements

Download and install these software if you do not have them locally.

- [NodeJS](https://nodejs.org/en/download)
- [MySQL](https://dev.mysql.com/downloads/mysql/)

For development, you may also want to install:

- [MongoDB Compass](https://www.mongodb.com/try/download/compass)
- [Docker Desktop](https://www.docker.com/get-started/)
- [Postman](https://www.postman.com/downloads/)

# Setup

## Setup MySQL locally

1. Search for **MySQL 8.1 Command Line Client** on your computer. Execute it to open up the terminal.
2. Enter your root password.
3. Run the SQL statements in `./backend/schema.sql` on the terminal.

## Setup environment variables

1. Enter the following command
   ```
   cp template.env .env
   ```
   
2. Open `.env` file
3. Enter root password (previously configured when installing MySQL)  
   Example: if your root password is "password1234",
   `MY_SQL_PWD=password1234`
4. Enter JWT token password (for generating and decoding JWT tokens)  
   Example: if your root password is "password",
   `JWT_SECRET_KEY=password`

## Install NodeJS packages

```
npm i install-all && npm run install-all
```

# Start Application

Start local MySQL Server (Windows Service), if necessary.

Start all services using the following commands:

```
npm run start-all
```

Or start them indvidually (run them in different terminals):

- Frontend: `cd frontend && npm start`
- Backend: `cd backend && npm start`
- Auth service: `cd Auth && npm start`
- Question service: `cd Question && npm start`

# Developer Notes

| Backend API Path               | Method | Purpose                                             | Parameters (JSON format)                                              | Require JWT token to be in header? | Does user have to be maintainer? |
| ------------------------------ | ------ | --------------------------------------------------- | --------------------------------------------------------------------- | ---------------------------------- | -------------------------------- |
| `/auth/authorize`              | GET    | Used to authorize all users                         | -                                                                     | Yes                                | No                               |
| `/auth/authorizeMaintainer`    | GET    | Used to authorize maintainers                       | -                                                                     | Yes                                | Yes                              |
| `/auth/generate`               | POST   | Used to generate JWT token after user has logged in | `userId` <br> `isMaintainer`                                          | No                                 | -                                |
| `/question/create`             | POST   | Used to create new question                         | `title` <br> `complexity` <br> `description` <br> `tags`              | Yes                                | Yes                              |
| `/question/delete`             | DELETE | Used to delete question                             | `id`                                                                  | Yes                                | Yes                              |
| `/question/edit`               | POST   | Used to edit question                               | `id` <br> `title` <br> `complexity` <br> `description` <br> `tags`    | Yes                                | Yes                              |
| `/question/getAll`             | GET    | Used to get all the questions from the database     | -                                                                     | Yes                                | No                               |
| `/question/getQuestionDetails` | GET    | Used to get the details of the specified question   | `id`                                                                  | Yes                                | No                               |
| `/user/change-password`        | POST   | Used to change user password                        | `id` <br> `currentPassword` <br> `newPassword` <br> `confirmPassword` | Yes                                | No                               |
| `/user/delete`                 | POST   | Used to delete user                                 | `id`                                                                  | Yes                                | No                               |
| `/user/login`                  | POST   | Used to login                                       | `email` <br> `password`                                               | No                                 | -                                |
| `/user/read`                   | POST   | Used to get user information                        | `id` or `email`                                                       | Yes                                | No                               |
| `/user/readAll`                | GET    | Used to get all users information                   | -                                                                     | Yes                                | Yes                              |
| `/user/signup`                 | POST   | Used to create new user                             | `email` <br> `password` <br> `confirmPassword`                        | No                                 | -                                |
| `/user/update`                 | POST   | Used to update user information (username)          | `id` <br> `username`                                                  | Yes                                | No                               |

- `auth` API (port 5001) contains all the authorization related endpoints.
- `question` API (port 3001) contains all the question data related endpoints.
- `user` API (port 3001) contains all the user data related endpoints (including authentication).
- Note that if the API path requires JWT token to be in the header, it means the user has to be logged in.
