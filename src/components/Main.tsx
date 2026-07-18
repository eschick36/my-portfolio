import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/C5603AQHOes3YUZTXFQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1642525919617?e=1785974400&v=beta&t=zHx6U9IJYK0gSv068-mKQ5nut_Qggd_qYrsnIqUsU5o" alt="Headshot" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/eschick36" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/lizzyschick/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Lizzy Schick</h1>
          <p>Data Analysis and Strategy</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/eschick36" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/lizzyschick/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;