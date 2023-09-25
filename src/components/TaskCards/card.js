import { useEffect } from 'react';

import './card.css';

const TaskCard = () => {
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





	return (
    // LIGHTBOX    

	<div>

	<div class="card-container">
                <div class="card">
                    <div class="card-preview">
                        <h6>Department</h6>
                        <div class = "department-title"><h2>Accounting</h2></div>

                        <div class = "contact-info">
                        <h6><i class="fas fa-user-circle"></i> Created By:</h6>
                        <h4>Alen James</h4>
                        <h6><i class="fas fa-calendar"></i> Date Posted:</h6>
                        <h5>08/15/2023</h5>
                        <h6><i class="fas fa-calendar-check"></i> Complete By:</h6>
                        <h5>09/20/2023</h5>
                        </div>
                        <a class = "category" href = " "><i class="fas fa-chevron-right"></i><em> Programming/Coding</em></a>
                    </div>
                    <div class="card-info">

                        <h2>Function to automatically input Excel Data</h2>
                        <h6>Please create a function that lets you take data from an excel and sort it automatically into columns based on different criteria, I will attach more info for the project.</h6>
                        <button class="btn" id = "inProgress">In Progress</button>
                        <div class="progress-container">
                        <div class="progress" data-total ="9" data-completed = "3"></div>
                        <span class="progress-text">
                            3/9 Tasks
                        </span>
                    </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-preview">
                        <h6>Department</h6>
                        <div class = "department-title"><h2>Human Resources</h2></div>

                        <div class = "contact-info">
                        <h6><i class="fas fa-user-circle"></i> Created By:</h6>
                        <h4>Alen James</h4>
                        <h6><i class="fas fa-calendar"></i> Date Posted:</h6>
                        <h5>08/15/2023</h5>
                        <h6><i class="fas fa-calendar"></i> Complete By:</h6>
                        <h5>09/20/2023</h5>
                        </div>
                        <a class = "category" href = " "><i class="fas fa-chevron-right"></i><em> Programming/Coding</em></a>
                    </div>
                    <div class="card-info">

                        <h2>Employee Handbook Update</h2>
                        <h6>We need someone to update the employee handbook to reflect a new remote work policy. The task includes reviewing the current handbook, identifying sections that need updates, and writing content. </h6>
                        <button class="btn" id = "Avaliable">Avaliable</button>
                        <div class="progress-container">
                        <div class="progress" data-total ="4" data-completed = "0"></div>
                        <span class="progress-text">
                            0/4 Tasks
                        </span>
                    </div>
                    </div>
                </div>

                <div class="card">
                <div class="card-preview">
                        <h6>Department</h6>
                        <div class = "department-title"><h2>Sales</h2></div>

                        <div class = "contact-info">
                        <h6><i class="fas fa-user-circle"></i> Created By:</h6>
                        <h4>Alen James</h4>
                        <h6><i class="fas fa-calendar"></i> Date Posted:</h6>
                        <h5>08/15/2023</h5>
                        <h6><i class="fas fa-calendar-check"></i> Complete By:</h6>
                        <h5>09/20/2023</h5>
                        </div>
                        <a class = "category" href = " "><i class="fas fa-chevron-right"></i><em> Data Analsis</em></a>
                    </div>
                    <div class="card-info">

                        <h2>Email Marketing Performance</h2>
                        <h6>We've noticed a decrease in sales from our email marketing campaignns. We need someone to analyze our email performance data nad reccomend ways to improve our open adn click-through rates.</h6>
                        <button class="btn" id = "completed">Completed</button>
                        <div class="progress-container">
                        <div class="progress" data-total ="9" data-completed = "9"></div>
                        <span class="progress-text">
                            9/9 Tasks
                        </span>
                    </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-preview">
                        <h6>Department</h6>
                        <h2>Legal</h2>
                        <a class = "category" href = " "><i class="fas fa-chevron-right"></i><em> Writing/Editing</em></a>
                
                    </div>
                    <div class="card-info">

                        <h2>Privacy Policy Update</h2>
                        <h6>We need someone to review and reread our new privacy policy to ensure it complies with the latest regulations.</h6>
                        <button class="btn" id = "inProgress">In Progress</button>
                        <div class="progress-container">
                        <div class="progress" data-total ="8" data-completed = "1"></div>
                        <span class="progress-text">
                            1/8 Tasks
                        </span>
                    </div>
                    </div>
                </div>



        </div></div>
	);
}


export default TaskCard;