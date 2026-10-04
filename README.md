# Cloud-Based Resume Builder

A simple full-stack college project for creating, saving and printing professional resumes online.

## Features
- Register and login
- Resume form with live preview
- Personal details, summary, education, skills, experience, projects and certifications
- Save resumes to MongoDB
- Open and edit saved resumes
- Delete saved resumes
- Print / Save as PDF from the browser
- Responsive light-blue UI

## Tech Stack
HTML, CSS, JavaScript, Node.js, Express.js, MongoDB Atlas, Mongoose, JWT.

## Run locally
1. Install Node.js.
2. Open this folder in a terminal.
3. Run `npm install`.
4. Copy `.env.example` to `.env`.
5. Add your MongoDB Atlas connection string and JWT secret.
6. Run `npm start`.
7. Open `http://localhost:3000`.

## Deploy with GitHub + Render
Upload this project to GitHub. Create a Render Web Service connected to the repository.
Build Command: `npm install`
Start Command: `npm start`
Add environment variables `MONGODB_URI` and `JWT_SECRET`.

The browser's Print / Save as PDF feature can be used to create the final resume PDF.
