import React, { useState } from "react";
import { Button, Modal } from "antd";
import "./MyProjects.css";
import "../../App.css";
import project from "../../assets/project1.png";
import project1 from "../../assets/project12.png";
import project2 from "../../assets/project13.png";
import redProject from "../../assets/projectlogin.png";
import signup from "../../assets/Signup.png";
import login from "../../assets/Login.png";
import restaurant from "../../assets/resturant.png";
import food from "../../assets/resturant2.png";
import cart from "../../assets/resturant3.png";
import menu from "../../assets/menu.png";
import menu1 from "../../assets/menu1.png";
import menu2 from "../../assets/menu2.png";
import music from "../../assets/music.png";
import music1 from "../../assets/music1.png";
import todo from "../../assets/todo1.png";
import todo1 from "../../assets/todo2.png";
import todo2 from "../../assets/todo3.png";




const MyProjects = ({ theme }) => {

  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);


    const [currentIndex , setCurrentIndex] = useState(0)
    console.log(selectedProjectIndex);
  const ProjectsArray = [
    {
      id: 1,
      projectImage:  <img src={project} alt="" className="image-fluid project-image" />,
      projectTitle: "Gym Project",
      ProjectDetails: [ 
        {
      ProjectInfo: " A Gym application it has beatiful ui and it is mobile responsive In this web-app you can see the muscles exercises and thier videos. You can search of any muscles Exercise it will show you all the exercise of related of searched muscels in form of gif. if you want video of exercise tap on the exercise it will led you to the youtube video. I use Api of exercise and youtube videos from Rapid Api.",
      Technologies: "React, Redux, RAPID API MUI, HTML5, CSS3 ",
      Industry: "Web Development",
      URL: "https://papaya-churros-328951.netlify.app/",
      image1: <img className="image-fluid w-100 " src={project} alt="" />,
      image3: <img className="image-fluid w-100 " src={project2} alt="" />,
      image2: <img className="image-fluid w-100 " src={project1} alt="" />,
    } ] } ,
    {
        id: 2,
        projectImage:  <img src={redProject} alt="" className="image-fluid project-image" />,
        projectTitle: "Login Signup Project",
        ProjectDetails: [ 
          {
        ProjectInfo: " Created a site of Signup and Login using Redux and Redux toolkit Signup and Login are auntentication based and condition based. Example if you register successfully and login with wrong info it will get you error.",
        Technologies: "React, Redux, MUI, HTML5, CSS3 ",
        Industry: "Web Development",
        URL: "https://6429d544fe1ad845d5308587--delicate-granita-5e9ca8.netlify.app/",
        image1: <img className="image-fluid w-100 " src={redProject} alt="" />,
        image3: <img className="image-fluid w-100 " src={signup} alt="" />,
        image2: <img className="image-fluid w-100 " src={login} alt="" />,
      } ] } ,

      {
        id: 3,
        projectImage:  <img src={restaurant} alt="" className="image-fluid project-image" />,
        projectTitle: "RESTUARANT PROJECT",
        ProjectDetails: [ 
          {
        ProjectInfo: "Restaurant website this was my first project after learning React and Redux In this web simply we can add food items from admin side food item can be add cart or favorites list for database i use firebase.",
        Technologies: "React, Redux, FIREBASE MUI, HTML5, CSS3 ",
        Industry: "Web Development",
        URL: "https://heartfelt-macaron-24478b.netlify.app/",
        image1: <img className="image-fluid w-100 " src={restaurant} alt="" />,
        image3: <img className="image-fluid w-100 " src={food} alt="" />,
        image2: <img className="image-fluid w-100 " src={cart} alt="" />,
      } ] } ,
      {
        id: 4,
        projectImage:  <img src={menu} alt="" className="image-fluid project-image" />,
        projectTitle: "MENU PROJECT",
        ProjectDetails: [ 
          {
        ProjectInfo: "This App is like a menu card what you select it will show you",
        Technologies: "React, HTML5, CSS3 ",
        Industry: "Web Development",
        URL: "https://superlative-quokka-edc497.netlify.app/",
        image1: <img className="image-fluid w-100 " src={menu} alt="" />,
        image3: <img className="image-fluid w-100 " src={menu1} alt="" />,
        image2: <img className="image-fluid w-100 " src={menu2} alt="" />,
      } ] } ,
      {
        id: 6,
        projectImage:  <img src={todo} alt="" className="image-fluid project-image" />,
        projectTitle: "TODO PROJECT",
        ProjectDetails: [ 
          {
        ProjectInfo: 'This is a TODO LIST App In which you can 1-Add Task 2-Update Task 3-Delete Task And funfact you can not add same task again it will show the alert "Duplicate Task Found"',
        Technologies: "React.js, HTML5, CSS3 ",
        Industry: "Web Development",
        URL: "https://gorgeous-rabanadas-a5c441.netlify.app/",
        image1: <img className="image-fluid w-100 " src={todo} alt="" />,
        image3: <img className="image-fluid w-100 " src={todo1} alt="" />,
        image2: <img className="image-fluid w-100 " src={todo2} alt="" />,
      } ] } ,
      {
        id: 5,
        projectImage:  <img src={music} alt="" className="image-fluid project-image" />,
        projectTitle: "MUSIC PROJECT",
        ProjectDetails: [ 
          {
        ProjectInfo: "Developed an elegant React.js Music Application. A small Music Application using Api of Shazam Core",
      Technologies: "React, Redux, RAPID API, Tailwind, MUI, HTML5, CSS3 ", 
        Industry: "Web Development",
        URL: "https://neon-cendol-0c1ae0.netlify.app/",
        image1: <img className="image-fluid w-100 " src={music} alt="" />,
        image3: <img className="image-fluid w-100 " src={music1} alt="" />,
        image2: <img className="image-fluid w-100 " src={music} alt="" />,
      } ] } ,
] ;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (projectIndex) => {
    setIsModalOpen(true);
    setSelectedProjectIndex(projectIndex);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const modalStyle = {
    backgroundColor: theme === "dark" ? "#343A40" : "#FFFFFF",
    color: theme === "dark" ? "#fff" : "black",
  };

    const handleSlider = () =>{
        setCurrentIndex(0)
    }
    const handleSlider1 = () =>{
        setCurrentIndex(1)
    }
    const handleSlider2 = () =>{
        setCurrentIndex(2)
    }

  return (
    <div className="row justify-content-around"> 
        {
                    ProjectsArray?.map((projects , index)=>{
                return(
                    <div key={project.id} className="col-lg-4 col-md-8 col-sm-12 mt-2" >
      <div className="projects" onClick={() => showModal(index)}>
        <p>
            {projects.projectImage}
        </p>
      </div>

      <Modal
      open={isModalOpen && selectedProjectIndex === index}
        onCancel={handleCancel}
        style={modalStyle}
        width={1000}
      >
        <div>
          {projects?.ProjectDetails?.map((item, i) => {
            return (
              <div>
                <div>
                  <h3 className="text-center">{item.projectTitle}</h3>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
                    <div className="portfolio w-100">
                   {currentIndex=== 0? item.image1: currentIndex === 1? item.image2: currentIndex===2? item.image3: ""}
                    </div>
                    <div className=" mt-3">
                        
                        <ul className="silk-dots d-flex  justify-content-center">
                            <li className={currentIndex===0? "mx-3 li-btn": "mx-3"} onClick={handleSlider}></li>
                            <li className={currentIndex===1? "mx-3 li-btn": "mx-3"} onClick={handleSlider1}></li>
                            <li className={currentIndex===2? "mx-3 li-btn": "mx-3"} onClick={handleSlider2}></li>
                        </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="mt-4">
                      <h4>Project Info</h4>
                      <p className="mx-2 ">{item.ProjectInfo}</p>
                    </div>
                    <div className="d-flex mt-4 border-bottom">
                      <h5>Technologies:</h5>
                      <p className="mx-2 text-uppercase mt-1">{item.Technologies}</p>
                    </div>
                    <div className="d-flex mt-4  border-bottom">
                      <h5>Industry:</h5>

                      <p className="mx-2 text-uppercase mt-1">{item.Industry}</p>
                    </div>
                    <div className="d-flex mt-4 border-bottom   ">
                      <h5>URL:</h5>
                      <a  key={item.i} style={{color:"#20C997"}} className="mx-2  "
                        href={ item.URL}
                        target="blank"
                      >
                        {item.URL}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Modal>
      </div>
                )
            })
        }
    </div>
  );
};

export default MyProjects;
