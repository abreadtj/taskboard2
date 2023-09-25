import "./sidebar.css";

const sidebar = (props) => {
    return (
        <div>
        <div class="area"><nav class="main-menu">
        <ul>
            <li style = {{
                pointerEvents: "none",
                marginTop: "15px",
                marginBottom: "20px"
            }}>
                <a href="">
                    <img src = "https://companieslogo.com/img/orig/PEG-f0cc4dd2.png?t=1648185072" style = {{
                        width: "65%",
                        marginRight: "15px",
                        marginLeft: "10px"
                    }} alt = ""></img>
                    <span class="sidebar-title"><strong>PSEG TaskBoard</strong> </span>
                </a>
            </li>
            <li>
                <a href="#" onClick={() => props.onCategorySelect("")}>
                    <i class="fa fa-address-book fa-2x"></i>
                    <span class="nav-text">
                        All Tasks
                    </span>
                </a>
                
            </li>
            <li>
                <a href="#" onClick={() => props.onCategorySelect("Programming/Coding")}>
                    <i class="fa fa-code fa-2x"></i>
                    <span class="nav-text">
                        Programming/Coding
                    </span>
                </a>
                
            </li>
            <li class="has-subnav">
                <a href="#" onClick={() => props.onCategorySelect("Writing/Editing")}>
                    <i class="fa fa-pencil fa-2x"></i>
                    <span class="nav-text">
                        Writing/Editing
                    </span>
                </a>
                
            </li>
            <li class="has-subnav">
            <a href="#" onClick={() => props.onCategorySelect("Data Analysis")}>
                    <i class="fa fa-database fa-2x"></i>
                    <span class="nav-text">
                        Data Analysis
                    </span>
                </a>
                
            </li>
            <li class="has-subnav">
            <a href="#" onClick={() => props.onCategorySelect("Graphic Desgin")}>
                    <i class="fa fa-laptop fa-2x"></i>
                    <span class="nav-text">
                        Graphic Desgin
                    </span>
                </a>
                
            </li>
            <li>
            <a href="#" onClick={() => props.onCategorySelect("Research")}>
                    <i class="fa fa-flask fa-2x"></i>
                    <span class="nav-text">
                        Research
                    </span>
                </a>
            </li>
            <li>
            <a href="#" onClick={() => props.onCategorySelect("Peer Review")}>
                    <i class="fa fa-users fa-2x"></i>
                    <span class="nav-text">
                        Peer Review
                    </span>
                </a>
            </li>
            <li>
            <a href="#" onClick={() => props.onCategorySelect("Tools & Resources")}>
                    <i class="fa fa-cogs fa-2x"></i>
                    <span class="nav-text">
                        Tools & Resources
                    </span>
                </a>
            </li>
            <li>
            <a href="#" onClick={() => props.onCategorySelect("Completed Tasks")}>
                    <i class="fa fa-history fa-2x"></i>
                    <span class="nav-text">
                        Completed Tasks
                    </span>
                </a>
            </li>
        </ul>

        <ul class="logout">
            <li>
                <a href="#">
                    <i class="fa fa-info fa-2x"></i>
                    <span class="nav-text">
                        Help/Info
                    </span>
                </a>
            </li>  
        </ul>
        </nav>
        </div>
        </div>
    );

}

export default sidebar;