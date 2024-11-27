# LMS Frontend

In this project, I have used various npm modules and JavaScript libraries for both the frontend and backend to build a robust Learning Management System (LMS).

---

## Overview

In this Web-app, you can create courses, manage enrollments, and handle different types of users. The system provides features to manage roles such as Admin, Instructor, and Student.

- **Admin**: Can create courses, manage users, and access all system settings.  
- **Instructor**: Can create and manage courses and course materials.  
- **Student**: Can view and complete course content.

For the **frontend**, I have used React.js, HTML, and CSS. For the **backend**, I have used MongoDB, Express.js, and Node.js.

I have implemented a ‘Trust this device’ feature and used JWT Web Tokens for secure authentication and authorization. Additionally, Redux Toolkit was used for efficient state management.

---

## Features and Working Structure

### User-Based Roles

1. **Admin**:
   - **Create and Manage Users**: Full access to create new user accounts, assign roles, and deactivate or delete accounts.
   - **Manage Courses**: Admin can create, update, or delete courses and modules.
   - **View All Data**: Admin has visibility into all courses, modules, and user activities.

2. **Instructor**:
   - **Create and Manage Courses**: Instructors can create new courses, add modules, and manage the course materials.
   - **View Enrollments**: Can see which students have enrolled in their courses and track their progress.

3. **Student**:
   - **View and Complete Courses**: Students can view their enrolled courses and complete the course materials provided by instructors.
   - **Track Progress**: Students can track their completion status and review their learning history.

---

## Modules Used

### Backend:
- **bcryptjs**: For securely hashing and comparing passwords.
- **jsonwebtoken (JWT)**: For creating and validating tokens for secure authentication.
- **mongoose**: For interacting with the MongoDB database using schemas.
- **multer**: For uploading files like profile pictures or course materials.
- **cloudinary**: For cloud-based file storage.
- **nodemailer**: For sending emails like password resets or course notifications.
- **cors**: To allow cross-origin requests from the frontend to the backend.
- **dotenv**: To securely manage sensitive environment variables.

### Frontend:
- **@reduxjs/toolkit**: For state management across the application.
- **axios**: For making API requests to the backend.
- **react-router-dom**: For routing between pages in the application.
- **tailwindcss**: For styling components and ensuring responsive design.
- **react-chartjs-2**: For visualizing course analytics and data.
- **react-hot-toast**: For displaying notifications and alerts.

---

## Installation

### Prerequisites
- **Node.js** (v14 or higher)
- **MongoDB** (local installation or MongoDB Atlas)



### Setup instruction

1. Clone the project

```
    git clone https://github.com/Aditya9103/LMS_Frontend.git
```

2. Move into the directory

```
    cd lms-frontend-hn
```

3. install dependencies

```
    npm i
```

4. run the server

```
    npm run dev
```



### Setup instructions for tailwind

[Tail wind official instruction doc](https://tailwindcss.com/docs/installation)

1. Install tailwindcss

```
    npm install -D tailwindcss postcss autoprefixer
```

2. Create tailwind config file 

```
    npx tailwindcss init
```

3. Add file extensions to tailwind config file in the contents property
```
    "./src/**/*.{html,js,jsx,ts,tsx}", "./index.html",

```

4. Add the tailwind directives at the top of the `index.css` file

```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

5. Add the following details in the plugin property of tainwind config

```
    [require("daisyui"), require("@tailwindcss/line-clamp")]
```

### Adding plugins and dependencies 

```
npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axi
os react-hot-toast @tailwindcss/line-clamp
```


### Configure auto import sort esline

1. Install simple import sore

```
    npm i -D eslint-plugin-simple-import-sort
```

2. Add rule in `.eslint.cjs`

```
    'simple-import-sort/imports': 'error'
```

3. add simple-import sort plugin in `.eslint.cjs`

```
    plugins: [..., 'simple-import-sort']
```

4. To enable auto import sort on file save in vscode

    - Open `settings.json`
    - add the following config
```
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
```
