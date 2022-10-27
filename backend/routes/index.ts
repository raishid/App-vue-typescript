import { Router } from 'express'
import Task from "../models/Task";

const router = Router();

//list tasks
router.get('/tasks', async (req, res) => {
    const tasks = await Task.find()
    res.send(tasks);
});

//create tasks
router.post('/tasks', async (req, res) => {
    const { title, description } = req.body;
    const task = new Task({ title, description });
    await task.save();
    
    res.json(task);
});

//show tasks
router.get('/tasks/:id', async (req, res) => {
    try{
        const task = await Task.findById(req.params.id);

        if(!task) return res.status(404).json({ message: 'Task not found' });

        res.send(task);
    }catch(err){
        console.log(err);
        res.status(404).send('Task not found');
    }
    
});

//update tasks
router.put('/tasks/:id', async (req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });

    res.json(updatedTask);

});

//delete tasks
router.delete('/tasks/:id', async (req, res) => {
    try{
        const task = await Task.findByIdAndDelete(req.params.id);

        if(!task) return res.status(400).json({ message: 'Task not found' });

        return res.json(task);
        
    }catch(err){
        console.log(err);
        res.status(500).send('task not deleted');
    }
});


export default router;