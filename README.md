# 📌 Task Manager Application

A **modern and efficient** Task Management System built with **Django REST Framework (DRF)** for the backend and **React + Vite** for the frontend. This application allows users to **create, update, delete, and manage** tasks with priority settings and due dates.

## 🚀 Features

✅ User Authentication (JWT-based)
✅ Create, Read, Update, Delete (CRUD) Tasks
✅ Task Prioritization (Low, Medium, High)
✅ Due Date Management
✅ Secure API with Django Rest Framework (DRF)
✅ Modern UI with Bootstrap & React

---

## 🛠️ Tech Stack

| Technology     | Description                        |
|---------------|----------------------------------|
| **Django**    | Backend framework for API       |
| **DRF**       | Django Rest Framework for APIs  |
| **React**     | Frontend for the UI             |
| **Vite**      | Fast development tool for React |
| **Bootstrap** | Styling for the frontend        |
| **JWT Auth**  | Secure user authentication      |

---

## 🎯 API Endpoints

| Method | Endpoint             | Description             |
|--------|----------------------|-------------------------|
| POST   | `/api/login/`   | User Login             |
| POST   | `/api/register/`| User Registration      |
| GET    | `/api/tasks/`        | Fetch all tasks        |
| POST   | `/api/tasks/`        | Create a new task      |
| PUT    | `/api/tasks/{id}/`   | Update a task          |
| DELETE | `/api/tasks/{id}/`   | Delete a task          |

---

## 📦 Installation & Setup

### 1️⃣ Backend (Django)
```bash
# Clone the repository
git clone https://github.com/your-repo/task-manager.git
cd task-manager

# Create Virtual Environment
python -m venv env
source env/bin/activate  # On Windows use `env\Scripts\activate`
cd to_do_backend

# Install Dependencies
pip install -r requirements.txt

# Run Migrations
python manage.py migrate

# Start Django Server
python manage.py runserver
```

### 2️⃣ Frontend (React + Vite)
```bash
# Navigate to frontend directory
cd my-react-app

# Install Dependencies
npm install

# Start React Server
npm run dev
```

---

## 🛡️ Authentication
This app uses **JWT Authentication** for securing API endpoints.
- On successful login, a token is returned.
- Use the token in the `Authorization` header for API requests.

```bash
Authorization: Bearer YOUR_ACCESS_TOKEN
```

---

## 📸 Screenshots

| Dashboard  | Task List |
|------------|----------|

 ![Dashboard](https://github.com/user-attachments/assets/0b04dd8a-7e9f-4373-8729-bcc9b29f73b4) ![task_manager](https://github.com/user-attachments/assets/c362a4ee-b1c2-440a-bdb9-58192c3678a3)![Screenshot 2025-04-03 220852](https://github.com/user-attachments/assets/cc9141ae-ea17-40b9-b868-1c84026cb09e)



---

## 📜 License
This project is licensed under the **MIT License**.

---

## 🤝 Contributing
Want to improve this project? Feel free to **fork & contribute!**

1. Fork the repository
2. Create a new branch (`feature-branch`)
3. Commit your changes
4. Push to your fork & submit a PR

---

### ⭐ If you like this project, consider giving it a **star ⭐** on GitHub!

💡 **Happy Coding!** 🚀

