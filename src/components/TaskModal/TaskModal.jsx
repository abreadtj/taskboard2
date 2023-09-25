import './taskmodal.css';
import 'C:/Users/A00201540/Documents/TaskBoard/taskboard/src/components/TaskCards/card.css';
import { useState } from 'react';
import axios from 'axios';

function TaskModal(props) {
    const [task, setTask] = useState({
        department: '',
        category: '',
        title: '',
        description: '',
        createdBy: '',
        contactPhone: '',
        contactEmail: '',
        datePosted: new Date().toISOString().split('T')[0],
        completeBy: '',
        pin: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        //GET TASKS
        try {
            const response = await axios.get('http://localhost:3001/api/current-id');
            const newTaskId = response.data.currentId;

            const newTask = {
                id: newTaskId,
                tasks: taskInputs.filter(input => input.trim() !== ''),
                "completedTasks":[],
                ...task
            };
        //POST TASK
            await axios.post('http://localhost:3001/api/tasks', newTask);
            props.onTaskCreated(newTask);
            
            setTask({
                department: '',
                category: '',
                title: '',
                description: '',
                createdBy: '',
                contactPhone: '',
                contactEmail: '',
                datePosted: new Date().toISOString().split('T')[0],
                completeBy: '',
                pin: ''
            });

        } catch (error) {
            console.error("Error CREATING task: " + error);
        };
        setTaskInputs(Array(3).fill(''));
    };

    //TASK CREATION

    const [taskInputs, setTaskInputs] = useState(Array(3).fill(''));

    const addTaskInput = () => {
        setTaskInputs([...taskInputs, '']);
    };

    const handleTaskInputChange = (index, value) => {
        const newTaskInputs = [...taskInputs];
        newTaskInputs[index] = value;
        setTaskInputs(newTaskInputs);
    };

    //Reseting the task input 

    const handleModalClose = () => {
        setTaskInputs(Array(3).fill(''));
        props.onClose();
    };
    //MODAL TO CREATE NEW TASK
    return (
        <div id = "taskModal" className = "modal" onClick = {handleModalClose} style = {{display: props.isVisible ? 'block' : 'none'}}>
        <div className = "modal-content" onClick = {(e) => e.stopPropagation()}>
            <span className='close' onClick={props.onClose}>&times;</span>
            <h2 className = "createTitle">Create New Taskcard</h2>
            <form id = "taskForm" onSubmit = {handleSubmit}>
                <label htmlFor='department'>Department: </label>
                <select id = "department" name = "department" value = {task.department} onChange = {handleChange} required >
                    <option value ="">Select Department</option>
                    <option value ="Information Technology">Information Technology</option>
                    <option value ="Human Resources">Human Resources</option>
                    <option value ="Marketing">Marketing</option>
                    <option value ="Legal">Legal</option>
                    <option value ="Sales">Sales</option>
                    <option value ="Finance">Finance</option>


                </select>

                <label htmlFor='category'>Category: </label>
                <select id = "category" name = "category" value = {task.category} onChange = {handleChange} required >
                    <option value ="">Select Category</option>
                    <option value ="Programming/Coding">Programming/Coding</option>
                    <option value ="Writing/Editing">Writing/Editing</option>
                    <option value ="Data Analysis">Data Analysis</option>
                    <option value ="Graphic Desgin">Graphic Desgin</option>
                    <option value ="Research">Research</option>
                    <option value ="Peer Review">Peer Review</option>
                    <option value ="Tools & Resources">Tools & Resources</option>

                </select>


                <label htmlFor='title'>Title: </label>
                <input type="text" id="title" name='title' value = {task.title} onChange = {handleChange} required />
                
                <label htmlFor='description' class = "descriptionTitle">Description: </label>
                <textarea id="description" name='description' rows ="4" value = {task.description} onChange = {handleChange} required></textarea>

                <label htmlFor ='createdBy'>Post Created By: </label>
                <input type="text" id="createdBy" name='createdBy' value = {task.createdBy} onChange = {handleChange} required />

                <label htmlFor ='contactEmail'>Email: </label>
                <input type="email" id="contactEmail" name='contactEmail' value = {task.contactEmail} onChange = {handleChange} required />

                <label htmlFor ='contactPhone'>Phone Number: </label>
                <input type="tel" id="contactPhone" name='contactPhone' value = {task.contactPhone} onChange = {handleChange}  />

                <label htmlFor ='datePosted'>Date Posted: </label>
                <input type="date" id="datePosted" name='datePosted' value = {task.datePosted} onChange = {handleChange} required />
                
                <label htmlFor ='completeBy'>Complete By: </label>
                <input type="date" id="completeBy" name='completeBy' value = {task.completeBy} onChange = {handleChange} required />

                <label htmlFor ='pin'>Security Pin: </label>
                <input type="password" maxLength = "4"  id="pin" name='pin' value = {task.pin} onChange = {handleChange} required />

                <div className ="tasks-container">
                    <h2>Task List</h2>
                    {taskInputs.map((inputTask, index) => (
                    <div key={index}>
                        <label>{`Task ${index + 1}`}</label>
                        <input type ="text" value = {inputTask} onChange={e => handleTaskInputChange(index, e.target.value)} />
                    </div>
                    ))}    

                    <button type = "button" onClick={addTaskInput} className ="taskBtn">Add Task</button>
                </div>
                
                
                <button type = "submit" className ="modalBtn">Create Taskcard</button>


            </form>
        </div>

        </div>
    );
}   

export default TaskModal;
