import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">

                {/* 1. Submeowrine */}
                <div className="project">
                    <a href="https://github.com/JustinWibowo1/Gym-Plus" target="_blank" rel="noreferrer">
                        <img src={mock01} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <a href="https://github.com/JustinWibowo1/Gym-Plus" target="_blank" rel="noreferrer">
                        <h2>Gym Plus Thesis (Flutter, Python)</h2>
                    </a>
                    <p>Gym Plus is a high-performance mobile-cloud application designed to act as an AI-powered fitness personal trainer. It leverages advanced Computer Vision to provide real-time workout monitoring and form analysis without the need for wearable sensors.</p>
                </div>

                {/* 2. Transfer Evaluation Matrix */}
                <div className="project">
                    <a href="https://www.canva.com/design/DAGGVQU4LHY/5b8C6O63-IQGhXFcDqUVlQ/watch?utm_content=DAGGVQU4LHY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he34b116a2c" target="_blank" rel="noreferrer">
                        <img src={mock02} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <a href="https://www.canva.com/design/DAGGVQU4LHY/5b8C6O63-IQGhXFcDqUVlQ/watch?utm_content=DAGGVQU4LHY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he34b116a2c" target="_blank" rel="noreferrer">
                        <h2>Summon Game Development (Unity)</h2>
                    </a>
                    <p>Game Summon is a two-dimensional game where visual elements within the game, such as characters, environments, and objects, are displayed in two dimensions. In the game Summon, players take on the role of a Summon Trainer who explores a virtual world to capture and train creatures called Summons.</p>
                </div>

                {/* 3. Programs of Study */}
                <div className="project">
                    <a href="https://www.canva.com/design/DAGGVQU4LHY/5b8C6O63-IQGhXFcDqUVlQ/watch?utm_content=DAGGVQU4LHY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he34b116a2c" target="_blank" rel="noreferrer">
                        <img src={mock03} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <a href="https://www.canva.com/design/DAGGVQU4LHY/5b8C6O63-IQGhXFcDqUVlQ/watch?utm_content=DAGGVQU4LHY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he34b116a2c" target="_blank" rel="noreferrer">
                        <h2>Gym Plus Application Development (Flutter, Firebase)</h2>
                    </a>
                    <p>Designed and developed "Gym Plus" a React Native application with Expo framework, to provide users with visual guides for weight training and a macro-nutrient tracker. The app includes interactive animations for exercise techniques, a training calendar, and a nutrition tracker, making it a comprehensive tool for fitness management.</p>
                </div>

                {/* 4. Multiple Regression Property Analysis */}
                <div className="project">
                    <a href="https://github.com/KlossiHammsi/Gym_Plus_Python_Model" target="_blank" rel="noreferrer">
                        <img src={mock04} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <a href="https://github.com/KlossiHammsi/Gym_Plus_Python_Model" target="_blank" rel="noreferrer">
                        <h2>Computer Vision Fitness Tracking (Python)</h2>
                    </a>
                    <p>Developed a computer vision-based motion tracking program for bicep curls using MediaPipe and OpenCV. The system detects body landmarks, calculates angles to identify motion stages ("UP" and "DOWN"), and automatically tracks repetitions and sets. It offers real-time visualization and a user-friendly interface for effective fitness tracking.</p>
                </div>

                {/* 5. COVID-19 Case Management */}
                <div className="project">
                    <a href="http://drive.google.com/file/d/15-vUuzmEIx03phyJUTFkk7Cr2GfPVdU0/view" target="_blank" rel="noreferrer">
                        <img src={mock05} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <a href="http://drive.google.com/file/d/15-vUuzmEIx03phyJUTFkk7Cr2GfPVdU0/view" target="_blank" rel="noreferrer">
                        <h2>100 Food UI/UX Design Mobile Development (Flutter)</h2>
                    </a>
                    <p>100food is a comprehensive recipe discovery mobile app designed to enhance culinary knowledge and cooking skills for food enthusiasts. It combines practical features for recipe exploration and cooking guidance with detailed nutritional information. The app offers advanced recipe search, step-by-step cooking instructions, nutrition facts, ingredient lists, and both restaurant locations and community reviews to help users discover recipes, cook confidently, and make informed dining choices.</p>
                </div>

                {/* 6. WeManage */}
                <div className="project">
                    <a href="https://drive.google.com/file/d/1sG8BsLomNZ7BqlTqw7WUih8YJ7WjICME/view?usp=sharing" target="_blank" rel="noreferrer">
                        <img src={mock06} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <a href="https://drive.google.com/file/d/1sG8BsLomNZ7BqlTqw7WUih8YJ7WjICME/view?usp=sharing" target="_blank" rel="noreferrer">
                        <h2>Research Paper: Multivariate Stock Market Forecasting Using LSTM on Indonesian Banking Stock Market</h2>
                    </a>
                    <p>This research project employs a multivariate LSTM model to forecast stock prices in the Indonesian banking sector, specifically focusing on six prominent banks: three national banks (BRI, BNI, Mandiri) and three private banks (BCA, CIMB, OCBC). Using historical stock data from April 2019 to April 2024, the LSTM model demonstrates high accuracy in predicting both opening and closing prices, evidenced by low RMSE, MSE, and MAE values and high R² scores.</p>
                </div>

                {/* 7. Datum */}
                <div className="project">
                    <a href="https://drive.google.com/file/d/1FNF4ZfeR7Cii5PYeEDZAdVEJKb_Q1YcX/view" target="_blank" rel="noreferrer">
                        <img src={mock07} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <a href="https://drive.google.com/file/d/1FNF4ZfeR7Cii5PYeEDZAdVEJKb_Q1YcX/view" target="_blank" rel="noreferrer">
                        <h2>Arduino x Mobile App Project</h2>
                    </a>
                    <p>The "Air Guard" project is an IoT-based air quality monitoring device that uses sensors like MQ-135 (CO2), MQ-7 (CO), MQ-8 (H2), MQ-2 (CH4), and DHT11 (temperature and humidity) to detect harmful gases and environmental conditions. It employs a ESP32 microcontroller for data integration, with pollutant levels displayed locally on an LCD and remotely through the "Air Guard" mobile app, developed using Flutter.</p>
                </div>

                {/* 8. Astro Raiders */}
                <div className="project">
                    <a href="https://www.figma.com/proto/7BLpKVpy0cNR1287vPNpnF/Project-HCI?node-id=5-157&starting-point-node-id=5%3A157&t=ezJhUbROrM9nVuc1-1" target="_blank" rel="noreferrer">
                        <img src={mock08} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <a href="https://www.figma.com/proto/7BLpKVpy0cNR1287vPNpnF/Project-HCI?node-id=5-157&starting-point-node-id=5%3A157&t=ezJhUbROrM9nVuc1-1" target="_blank" rel="noreferrer">
                        <h2>EatInfo Website UI/UX Design (Figma)</h2>
                    </a>
                    <p>EatInfo is a food-focused social platform that combines Instagram and Pinterest-like features for culinary enthusiasts. It serves as a community hub where users can share and discover food content while offering exclusive restaurant vouchers through partnerships, connecting food lovers, chefs, and restaurants in one place.</p>
                </div>

                {/* 9. High Speed Chase */}
                <div className="project">
                    <a href="https://www.figma.com/proto/n2LxU9I1qjwP9q3nrT2Hqm/SaveYu---Financial-App?node-id=1-2&t=XspFGHNjixSk5Hb9-1&scaling=scale-down&page-id=0:1&starting-point-node-id=1:2" target="_blank" rel="noreferrer">
                        <img src={mock09} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <a href="https://www.figma.com/proto/n2LxU9I1qjwP9q3nrT2Hqm/SaveYu---Financial-App?node-id=1-2&t=XspFGHNjixSk5Hb9-1&scaling=scale-down&page-id=0:1&starting-point-node-id=1:2" target="_blank" rel="noreferrer">
                        <h2>SaveYu Financial App UI/UX Design (Figma)</h2>
                    </a>
                    <p>SaveYu is a fintech mobile app designed to improve financial literacy and economic stability in Indonesia. It combines practical tools for budgeting and transaction tracking with financial education features. The app offers financial calculators, budget monitoring, and both AI and expert consultations to help users manage money, save effectively, and make smart investment choices. Through these features, SaveYu promotes financial literacy and empowers users to build a more stable financial future.</p>
                </div>

            </div>
        </div>
    );
}

export default Project;
