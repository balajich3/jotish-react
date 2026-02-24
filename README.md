# Jotish ReactJS Assignment

## Overview

This is a ReactJS application developed as part of the Jotish Paid Internship assignment.

The application demonstrates:
 Authentication
 REST API integration
 Data visualization
 Webcam integration
 Interactive map rendering


## Features

### 1. Login Page
 Hardcoded authentication
 Username: `testuser`
 Password: `Test123`

### 2. Employee List
 Fetches employee data from provided REST API
 Displays full employee table
 Clickable rows to view details

### 3. Employee Details
 Displays complete employee information
 Integrated webcam using `react-webcam`
 Capture photo functionality

### 4. Photo Result Page
 Displays captured image
 Retake photo option
 Navigate back to employee list

### 5. Salary Bar Chart
 Displays salaries of first 10 employees
 Implemented using `Recharts`

### 6. Employee Location Map
 Displays employee cities on interactive map
 Implemented using `React Leaflet`
 Individual markers with employee info popups


## Tech Stack

 React (Vite)
 React Router
 Axios
 Recharts
 React Webcam
 React Leaflet
 Leaflet


## Installation & Setup

# 1. Create Project (Vite)

npm create vite@latest jotish-assignment
cd jotish-assignment
npm install
Framework: React
Variant: JavaScript

# 2. Install Required Packages
npm install react-router-dom
npm install axios
npm install react-webcam
npm install recharts
npm install leaflet react-leaflet

# 3. Run the Project
npm run dev

# Application runs at:

http://localhost:5173
API Used

```bash