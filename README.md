
#  Faisal-Tech-Labs: Full Stack AI-Powered Portfolio

A full-stack web application featuring contact forms, admin panel, and AI capabilities via OpenRouter — built using the MERN stack and deployed on Render + Vercel.

---

##  Features

-  User authentication with JWT
-  Contact form with backend email/storage
-  AI-powered assistant via OpenRouter API
-  Admin panel to manage service data
-  Fully deployed (frontend + backend)

---

##  Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/faisalquaiyum/Faisal-Tech-Labs.git
cd Faisal-Tech-Labs
```

---

### 2. Backend Setup (`/server`)

```bash
cd server
npm install
```

Create a `.env` file inside the `server/` folder:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_uri
JWT_SECRET=your_jwt_secret
OPENROUTER_API_KEY=your_openrouter_api_key_here
```

Run the backend locally:

```bash
npm run dev
```

---

### 3. Frontend Setup (`/client`)

```bash
cd ../client
npm install
```

Create a `.env` file inside the `client/` directory:

```env
VITE_APP_URL_API=https://faisal-tech-labs.onrender.com
```

Run the frontend:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

##  Tech Stack

- **Frontend:** React (Vite), React Router
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** JWT, bcryptjs
- **Deployment:** Vercel (frontend), Render (backend)
- **AI Integration:** OpenRouter API
- **Tools:** dotenv, cors, express middleware

---

## 📁 Project Structure

```
Faisal-Tech-Labs/
├── client/           # Frontend
│   ├── src/
│   ├── .env
│   └── vite.config.js
├── server/           # Backend
│   ├── router/
│   ├── controllers/
│   ├── models/
│   ├── middlewares/
│   ├── utils/
│   ├── .env
│   └── server.js
└── README.md
```

---

##  Deployment

###  Frontend (Vercel)

1. Fork this repo and import it into [Vercel](https://vercel.com/).
2. Set the following environment variable:

```env
VITE_APP_URL_API=https://faisal-tech-labs.onrender.com
```

3. Deploy and access your app at `https://your-project.vercel.app`.

---

###  Backend (Render)

1. Create a new **Web Service** on [Render](https://render.com/).
2. Connect your GitHub repo and select the `/server` folder.
3. Set environment variables:

```env
PORT=5000
MONGODB_URI=your_connection_uri
JWT_SECRET=your_secret
OPENROUTER_API_KEY=your_openrouter_api_key_here
```

4. Set build command:

```bash
npm install
```

5. Set start command:

```bash
npm start
```

6. Deploy and get your backend URL like `https://faisal-tech-labs.onrender.com`.

---

##  Environment Variables

### Backend (`/server/.env`)

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_uri
JWT_SECRET=your_secret
OPENROUTER_API_KEY=your_openrouter_api_key_here
```

### Frontend (`/client/.env`)

```env
VITE_APP_URL_API=https://faisal-tech-labs.onrender.com
```

---

##  Contributing

1. Fork the repository  
2. Create your feature branch  
   ```bash
   git checkout -b feature/NewFeature
   ```
3. Commit your changes  
   ```bash
   git commit -m 'Add NewFeature'
   ```
4. Push to the branch  
   ```bash
   git push origin feature/NewFeature
   ```
5. Open a Pull Request

---


##  Acknowledgments

- Render for backend hosting  
- Vercel for frontend deployment  
- MongoDB Atlas for cloud DB  
- OpenRouter for AI APIs  
- Developed by **Md Faisal Quaiyum**
- GitHub: [https://github.com/faisalquaiyum](https://github.com/faisalquaiyum)
