# AI Image Generation App

A full-stack web application that allows users to generate AI images from text prompts using the **Hugging Face API**, save them with a username, and store them in **Cloudinary** for easy access.

---

## 🚀 Features

- Generate images from text prompts using Hugging Face’s AI models.
- Save generated images along with the username in a MongoDB database.
- Upload images to **Cloudinary** for storage and retrieval.
- Full-stack setup with React frontend and Node.js backend.
- Modern build tooling using **Vite**.
- Responsive UI for easy browsing of generated images.

---

## 🛠 Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB with Mongoose ORM
- **Image Generation API:** Hugging Face Inference API
- **Image Hosting / CDN:** Cloudinary

---

## 💻 Installation

1. Navigate to the **client** directory and install dependencies:

```bash
cd client
npm i
```

2. Navigate to the server directory and install dependencies:

```bash
cd server
npm i
```

3. Setup MongoDB

4. Rename the **template.env** file in the server directory to **.env** and update the values with your API keys and database connection string.

5. Run the frontend:

```bash
cd client
npm run dev
```

6. Run the backend:

```bash
cd server
npm start
```
