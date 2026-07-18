import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/eschick36" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/lizzyschick/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>A portfolio built by <a href="https://github.com/eschick36/my-portfolio" target="_blank" rel="noreferrer">Lizzy Schick</a> & designed by <a href="https://yujisatojr.github.io/react-portfolio-template/" target="_blank" rel="noreferrer">yujisatojr</a></p>
    </footer>
  );
}

export default Footer;