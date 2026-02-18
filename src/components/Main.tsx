import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profile from '../assets/images/profile.png';
import { SiCanva } from "react-icons/si";

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          {/* <img src="https://res.cloudinary.com/dglpseues/image/upload/v1770785092/Gemini_Generated_Image_d13tvmd13tvmd13t_w6b1la.png" alt="Avatar" /> */}
          <img src={profile} alt="Avatar" />

        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/KlossiHammsi" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/steffano-clausivancio-45a37a305/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="https://www.canva.com/design/DAGGVQU4LHY/5b8C6O63-IQGhXFcDqUVlQ/watch?utm_content=DAGGVQU4LHY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he34b116a2c" target="_blank" rel="noreferrer"><SiCanva /></a>
          </div>
          <h1>Steffano Clausivancio</h1>
          <p>Front-End Web Dev</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;