# GeoGuessr Clone

A web application built with a **React frontend**, **Express.js backend**, and **MySQL database**. The app also integrates with the **Google Maps API**.

---

## 🛠️ Project Structure

```
geoguessr-clone/
│
├── backend/           # Express.js backend
│   ├── .env           # Backend environment variables
│   └── ...
│
├── frontend/          # React frontend (Vite)
│   ├── .env           # Frontend environment variables
│   └── ...
│
├── README.md
└── ...
```

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/geoguessr-clone.git
cd geoguessr-clone
```

---

### 2. Set Up Environment Variables

#### Frontend (`frontend/.env`)

Create a `.env` file inside the `frontend` directory with the following content:

```env
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
VITE_GOOGLE_MAP_ID=your_google_map_id
```

#### Backend (`backend/.env`)

Create a `.env` file inside the `backend` directory with the following content:

```env
PORT='8080'
MYSQL_HOST='127.0.0.1'
MYSQL_USER='root'
MYSQL_PASSWORD=''
MYSQL_DATABASE='geogussr'
ORIGIN='http://localhost:5173'
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```


---

### 3. Install Dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ../frontend
npm install
```

---

### 4. Start the MySQL Server

Make sure MySQL is running. For example:

```bash
# macOS with Homebrew
brew services start mysql

# Linux
sudo systemctl start mysql
```

Create the database if it doesn't exist:

```sql
CREATE DATABASE geogussr;
```

---

### 5. Run the App

#### Start Backend

```bash
cd backend
npm start
```

Runs on: [http://localhost:8080](http://localhost:8080)

#### Start Frontend

```bash
cd ../frontend
npm run dev
```

Runs on: [http://localhost:5173](http://localhost:5173)

---

## 📦 Build for Production

To build the frontend for production:

```bash
cd frontend
npm run build
```

---

## 🧪 Tech Stack

- Frontend: **React (Vite)**
- Backend: **Express.js**
- Database: **MySQL**
- API Integration: **Google Maps API**


