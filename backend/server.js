const cors = require('cors');
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const PORT = 3001;
const TASKS_FILE = path.join(__dirname, 'tasks.json');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//GET current ID Count 
app.get('/api/current-id', (req, res) => {
    fs.readFile(TASKS_FILE,'utf-8', (err, data) => {
        if (err) {console.log(err); return res.status;}
        const fileData = JSON.parse(data);
        res.json({currentID: fileData.currentID});

    }); 
});


//GET Tasks
app.get('/api/tasks', (req, res) => {
  fs.readFile(TASKS_FILE, 'utf-8', (err, data) => {
    if (err){
        res.status(500).send(err);
        return;
    }
    const fileData = JSON.parse(data);
    res.json(fileData.tasks);
  }); 
});

//POST Tasks
app.post('/api/tasks', (req, res) => {
    fs.readFile(TASKS_FILE, 'utf-8', (err, data) => {
        if (err){
            res.status(500).send(err);
            return;
        }
        const fileData = JSON.parse(data);
        const newTask = {
            id: fileData.currentID,
            tasks: req.body.tasks || [],
            ...req.body
        };
        fileData.tasks.push(newTask);
        fileData.currentID += 1;
        fs.writeFile(TASKS_FILE, JSON.stringify(fileData, null, 2), (err) => {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.json(newTask);
        });
    });
});

//Updating Completed Tasks:

app.put('/api/task/:id/completedTasks', (req, res) => {
    fs.readFile(TASKS_FILE, 'utf8', (err, data) => {
        if (err){
            res.status(500).send(err);
            return;
        }

        const fileData = JSON.parse(data);
        const taskID = parseInt(req.params.id, 10);
        const task = fileData.tasks.find(t => t.id === taskID);

        if (task){
            task.completedTasks = req.body.completedTasks;
            fs.writeFile(TASKS_FILE, JSON.stringify(fileData, null, 2), (err) => {
                if(err){
                    console.log(err);
                }
                res.json(task);
            });
        } 
    });
});




app.listen(PORT, () => {
    console.log(`listening on port http://localhost:${PORT}`);
});



