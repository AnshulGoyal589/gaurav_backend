const express = require('express');
const router = express.Router();
const Category = require('./Category');

// POST route to submit a new project
router.post('/submit-project', async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    const savedCategory = await newCategory.save();
    res.status(201).json(savedCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET route to fetch all projects
router.get('/projects', async (req, res) => {
  try {
    const projects = await Category.find({});
    console.log("first");
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});
router.get('/', async (req, res) => {
 res.send("jj");
});

// GET route to fetch a single project by ID
router.get('/projects/:id', async (req, res) => {
  try {
    const project = await Category.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch project' });
  }
});

// PUT route to update a project
router.put('/projects/:id', async (req, res) => {
  try {
    const updatedProject = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProject) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE route to delete a project
router.delete('/projects/:id', async (req, res) => {
  try {
    const deletedProject = await Category.findByIdAndDelete(req.params.id);
    if (!deletedProject) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete project' });
  }
});

module.exports = router;