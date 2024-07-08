const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 9595;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(" mongodb://localhost:27017/student-management", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// User Schema
const userSchema = new mongoose.Schema({
  id: number,
  name: String,
  addr: String,
  stream: String,
  year: number,
});

const User = mongoose.model("User", userSchema);

// Routes
app.post("/studen/add", async (req, res) => {
  const student = new Student(req.body);
  try {
    await student.save();
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/student/all", async (req, res) => {
  try {
    const students = await Student.find();
    res.send(students);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put("/student/update/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/student/delete/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
