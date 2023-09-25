
import './taskmodal.css'
import { useState, useEffect } from 'react';

function DetailedTaskModal(props){
    const { task } = props;
    const [completedTasks, setCompletedTasks] = useState([]);
    const[isPinValid, setIsPinValid] = useState(false);
    const [enteredPin, setEnteredPin] = useState("");

    //Resets PIN state when modal opens
    useEffect(() =>{
        setIsPinValid(false);
        setEnteredPin("");
    },[task]);

    const handlePinCheck = () => {
        if (enteredPin === task.pin){
            setIsPinValid(true);
        } else if (!task.pin){
            setIsPinValid(true);
        } else {
            alert("Incorrect PIN, please try again.");
        }
    }
    const toggleTask = (index) => {
        if (completedTasks.includes(index)){
            setCompletedTasks(prev => prev.filter(i => i !== index));
        } else {
            setCompletedTasks(prev => [...prev, index]);
        }
    };


    if (!task) { return null};
 
    
    return (
            
        <div id = "detailedTaskModal" className='big-card' onClick={props.onClose} style = {{display: props.isVisible ? 'block' : 'none'}}>
            <div className = "detailed-card" onClick={(e) => e.stopPropagation()}>
                <span id = "close" className = 'close' onClick={props.onClose}>&times;</span>
                    <div class='large-card-preview'>
                    <h6>Department</h6>
                    <div class = "department-title"><h2>{task.department}</h2></div>
                        <div class = "contact-info">
                            <h6><i class="fas fa-user-circle"></i> Created By:</h6>
                            <h5>{task.createdBy}</h5>
                            <h6><i class="fas fa-envelope"></i> Email:</h6>
                            <h5>{task.contactEmail}</h5>
                            <h6><i class="fas fa-mobile"></i> Phone:</h6>
                            <h5>{task.contactPhone}</h5>
                            <h6><i class="fas fa-calendar"></i> Date Posted:</h6>
                            <h5>{task.datePosted}</h5>
                            <h6><i class="fas fa-calendar-check"></i> Complete By:</h6>
                            <h5>{task.completeBy}</h5>




                        </div>
                    </div>
                    { isPinValid ? ( 

                    <div className='card-info'>
                            <h2>{task.title}</h2>
                            <h6>{task.description}</h6>

                            <div className = "task-list">
                                {task.tasks.map((t, index) => (
                                    <div className = "task-item" key = {index} onClick={() => toggleTask(index)}>
                                        <span className = {`circle ${completedTasks.includes(index) ? 'completed' : ''}`}></span>
                                        <span className = {`task-text ${completedTasks.includes(index) ? 'completed' : ''}`}>{t}</span>
                                    </div>
                                ))}
                                <button class="taskCompleteBtn">Completed</button>

                            </div>

                            <div class="progress-container">
                            <div class="progress" data-total ="9" data-completed = "3"></div>
                            <span class="progress-text">
                                0/0 Tasks
                            </span>

                            </div>
                    </div>

                    ) : (

                        <div class = "pinBox">
                            <label htmlFor ='pin'><h6>Enter Pin: </h6></label><br></br>
                            <input type ="password" id ='pin' value={enteredPin} onChange={(e) => setEnteredPin(e.target.value)} maxLength = "4" />
                            <br></br><button onClick = {handlePinCheck}><h5>Submit</h5></button>
                        </div>
                    )}                 
            </div>
        </div>

    )

    

}

export default DetailedTaskModal


