Vehicle Tracking System 🚗📍
This is a real-time vehicle tracking system that visualizes the movement of a vehicle on a map using React, Leaflet.js, Node.js, and MongoDB. The project fetches GPS coordinates from a backend API and animates the vehicle’s movement.

🚀 Features
✅ Display vehicle routes on a map
✅ Real-time vehicle movement animation
✅ Custom vehicle icon
✅ Backend API to provide route data
✅ Interactive UI with map controls

backend depplyed url deployed on render.com  -   https://blockly-b69j.onrender.com/

fronted deployed url on vercel -  


🛠 Tech Stack
Frontend (React + Vite)
React.js (Vite for fast development)
Leaflet.js (for map visualization)
Axios (for API requests)
CSS (for styling)
Backend (Node.js + Express)
Express.js (for API)
MongoDB + Mongoose (to store location data)
CORS (to handle cross-origin requests)
📂 Project Structure
perl
📦 vehicle-tracking-system
 ┣ 📂 backend
 ┃ ┣ 📜 server.js  # Express server handling API requests
 ┃ ┣ 📜 routes.js  # API routes for fetching vehicle coordinates
 ┃ ┣ 📜 models.js  # Mongoose schema for storing route data
 ┃ ┗ 📜 package.json  
 ┣ 📂 frontend
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📜 App.jsx  # Main React app
 ┃ ┃ ┣ 📜 MapView.jsx  # Leaflet map component
 ┃ ┃ ┣ 📜 index.css  
 ┃ ┃ ┗ 📜 main.jsx  
 ┃ ┣ 📜 vite.config.js  # Vite configuration
 ┃ ┗ 📜 package.json  
🛠 Setup and Installation
1️⃣ Clone the Repository
```
git clone https://github.com/your-username/vehicle-tracking-system.git
```
cd vehicle-tracking-system
2️⃣ Install Dependencies
Backend Setup
cd backend
```
npm install
```
Frontend Setup
cd frontend
```
npm install
```
3️⃣ Run the Project
Start Backend

```cd backend
npm run start
```

Start Frontend
```
cd frontend
```
npm run dev
4️⃣ Access the Application
Open your browser and go to:
```
http://localhost:5173
```
🔥 API Endpoints
Method	Endpoint	           Description
GET	    /api/vehicle/route	Fetch vehicle route coordinates
🎨 Customization
To change the vehicle icon, replace the image URL in MapView.jsx.
Adjust animation speed by modifying the interval in MapView.jsx.
🤝 Contributing
Feel free to fork this repo and create pull requests!

📌 Notes
Ensure MongoDB is running for backend functionality.
If you face CORS issues, enable it in your backend (server.js).
