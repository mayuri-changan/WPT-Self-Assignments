// Use Node and Express to write a simple web application that consists of at least 5 route
// implementations

const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Home Page"));
app.get("/about", (req, res) => res.send("About Page"));
app.get("/contact", (req, res) => res.send("Contact Page"));
app.get("/services", (req, res) => res.send("Services Page"));
app.get("/login", (req, res) => res.send("Login Page"));

app.listen(3000, () => console.log("Server running"));
