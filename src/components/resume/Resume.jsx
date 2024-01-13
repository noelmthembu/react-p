import React from 'react';
import "./resume.css";

const Resume = () =>{
    return (
       <section className="resume container section" id="resume">
        <h2 className="section__title">Experience <span>&</span> Education</h2>

        <div className="resume__container grid">

            <div className="timeline">

            <div className="timeline__item">
                <i className="icon-graduation"></i>
                <span className="timeline__date">2014 - 2018</span>
                <h3 className="timeline__title">National Senior Certificate</h3>
                <h4 className="timeline__text">Technical High School Langlaagte</h4>
            </div>

            <div className="timeline__item">
                <i className="icon-graduation"></i>
                <span className="timeline__date">2023</span>
                <h3 className="timeline__title">Diploma In Software Development</h3>
                <h4 className="timeline__text">Rosebank College</h4>
            </div>

            <div className="timeline__item">
                <i className="icon-graduation"></i>
                <span className="timeline__date">2023</span>
                <h3 className="timeline__title">Responsive Web Design</h3>
                <h4 className="timeline__text">freeCodeCamp</h4>
            </div>

            <div className="timeline__item">
                <i className="icon-graduation"></i>
                <span className="timeline__date">2023</span>
                <h3 className="timeline__title">Foundational C# with Microsoft Certification</h3>
                <h4 className="timeline__text">freeCodeCamp</h4>
            </div>
        </div>

            <div className="timeline">

            <div className="timeline__item">
                <i className="icon-briefcase"></i>
                <span className="timeline__date">07/2022 - 11/2022</span>
                <h3 className="timeline__title">Full Stack Developer</h3>
                <h4 className="timeline__text">Madlhadlheni Enterprise (Course Project)</h4>

                    <li>Developed a web-based store using HTML, CSS, Bootstrap, PHP, MYSQL & JavaScript.</li>
                    <li>Implemented user authentication.</li>
				    <li>Collaborated with team of fellow students to complete the project on time.</li>

            </div>

            <div className="timeline__item">
                <i className="icon-briefcase"></i>
                <span className="timeline__date">07/2022 - 11/2022</span>
                <h3 className="timeline__title">Full Stack Developer</h3>
                <h4 className="timeline__text">NGO Website (Course Project)</h4>

                    <li>Created a C# Non-Profit Organisation web-application that allowed users to register, login, dontate and track their donations.</li>
                    <li>Implemented user authentication.</li>
                    <li>Implemented CRUD.</li>
                    <li>Utilized Azure libraries like Azure SQL, Azure DevOps, Azure Boards and Azure Portal.</li>
				    <li>Designed and implemented data manipulation and visualiztion to display the donates in real time.</li>

            </div>
            </div>
        </div>
       </section>
    )
}
export default Resume;