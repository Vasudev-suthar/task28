// controllers/todoController.js
const ToDo = require('../models/ToDo');

exports.getTasks = async (req, res) => {
  try {
    const tasks = await ToDo.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    const newTask = new ToDo({
      title,
      description,
    });
    const task = await newTask.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  try {
    const task = await ToDo.findByIdAndUpdate(id, { title, description, status }, { new: true });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await ToDo.findByIdAndDelete(id);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
