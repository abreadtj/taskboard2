
import React from 'react';
import { useState, useEffect } from 'react';
import TaskModal from './TaskModal';
import axios from 'axios';

import './taskmodal.css';
import 'C:/Users/ajame/Documents/taskboard2/taskboard2/src/components/TaskCards/card.css';
import DetailedTaskModal from './DetailedModal';


function TaskList(props){
    const [tasks, setTasks] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);
    const [completedTasks] = useState([]);

    const handleTaskCreated = (task) => {
        setTasks(prev => [...prev, task]);
        setModalVisible(false);
        };

    const handleCreateTaskClick = () => {
        setModalVisible(true);
    };

    useEffect(() => {
        axios.get('http://localhost:3001/api/tasks')
        .then(response => {
            setTasks(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

    // Progress Bar
	useEffect(() => {

		document.querySelectorAll('.card').forEach(card => {
			const total = parseInt(card.querySelector('.progress').dataset.total, 10);
			const completed = parseInt(card.querySelector('.progress').dataset.completed, 10);		
			const progress = (completed/total) * 100;
			const progressBar = card.querySelector('.progress');
			progressBar.style.setProperty('--progress-width', `${progress}%`);
		});

	}, []);

    //FILTERING BASED ON CATEGORY
    const filteredTasks = props.category ? tasks.filter(task => task.category === props.category) : tasks;
    
    //Detailed Popup Modal

    const [selectedTask, setSelectedTask] = useState(null);
    const [isDetailedModalVisible, setDetailedModalVisible] = useState(false);
    //Returning all the tasks from JSON File 
    return (
        <div>
            <div class = "card-container">
            <button id = "createTaskBtn" class = "fa fa-plus fa-2x" onClick={handleCreateTaskClick}></button>
            <TaskModal isVisible={isModalVisible} onTaskCreated = {handleTaskCreated} onClose={() => setModalVisible(false)} />
            {filteredTasks.map(task => (
                <div key = {task.id} class='card'>
                    <div class='card-preview'>
                        <h6>Department</h6>
                        <div class = "department-title"><h2>{task.department}</h2></div>
                        <div class = "contact-info">
                        <h6><i class="fas fa-user-circle"></i> Created By:</h6>
                        <h4>{task.createdBy}</h4>
                        <h6><i class="fas fa-calendar"></i> Date Posted:</h6>
                        <h5>{task.datePosted}</h5>
                        <h6><i class="fas fa-calendar-check"></i> Complete By:</h6>
                        <h5>{task.completeBy}</h5>
                        
                        </div>
                        <a className='category' href= " "><i class="fas fa-chevron-right"></i><em> {task.category}</em></a>
                    </div>
                    <div className='card-info'>
                            <h2>{task.title}</h2>
                            <h6>{task.description}</h6>
                            <button class="cardBtn" onClick = {() => {setSelectedTask(task); setDetailedModalVisible(true);}}id = "Avaliable">Available</button>
                            <div className="progress-container">
                            <div className="progress" data-total ={task.tasks.length} data-completed = {completedTasks.length}></div>
                            <span className="progress-text">
                                {`${completedTasks.length}/${task.tasks.length} Tasks`}
                            </span>
                            </div>
                    </div>
                </div>
            ))}
            </div>
                
            <DetailedTaskModal isVisible ={isDetailedModalVisible}  onClose={() => setDetailedModalVisible(false)} task ={selectedTask}/>
        </div>
    );

    }

    export default TaskList;