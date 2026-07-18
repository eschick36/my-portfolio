import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Github",
    "R",
    "Python",
    "SQL",
    "dbt",
    "Tableau",
    "Looker",
    "Hex",
    "Qualtrics",
    "Automated ETL",
    "RCT experiments",
    "Code review",
    "Package development"
];

const labelsSecond = [
    "Documentation",
    "Data storytelling",
    "Executive-facing reports",
    "Project management",
    "Survey research",
    "Policy research",
    "Cross-functional teamwork"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Technical Skills</h3>
                    <p>My personal toolkit spans the lifecycle of data: sourcing, cleaning, analysis, and presentation. I've built and maintained everything from web scrapers for analysts to automated Powerpoint decks for the C-suite.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Non-Technical Skills</h3>
                    <p>Outside of the tech stack, I have experience leading collaborative, communication-forward strategic work. I manage stakeholder communications, mentor teammates and interns, and frequently present at internal and external sessions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;