import { useState } from "react";
import Sorted from "./Sorted";
const jobs = [
    {
        company: "Google",
        title: "Cloud Engineer",
        location: "Hyderabad",
        level: "Intermediate Level",
        category: "Networking",
        description: "Join our technology team as a Cloud Engineer, where you will be responsible for designing and managing our cloud infrastructure.",
       
    },
    {
        company: "microsoftt",
        title: "Network Security Engineer",
        location: "Bangalore",
        level: "Senior Level",
        category: "Networking",
        description: "We are seeking a Network Security Engineer to protect our organization's IT infrastructure. You will design and implement security measures to keep systems safe.",
        
    },
    {
        company: "amazon",
        title: "Software Tester",
        location: "Chennai",
        level: "Intermediate Level",
        category: "Programming",
        description: "As a Software Tester, you will play a critical role in ensuring the quality and reliability of our software applications. You will design test cases.",
        
    },
    {
        company: "adobe",
        title: "Graphic Designer",
        location: "Chennai",
        level: "Intermediate Level",
        category: "Designing",
        description: "Join our creative team as a Graphic Designer, where you will be responsible for creating visually appealing graphics and layouts that enhance our brand.",
         
    },
    {
        company: "walmart",
        title: "Content Marketing Manager",
        location: "Mumbai",
        level: "Senior Level",
        category: "Designing",
        description: "We are looking for a Content Marketing Manager to lead our content strategy and execution. In this role, you will develop compelling content.",
       
    },
    {
        company: "samsung",
        title: "Human Resources Specialist",
        location: "Washington",
        level: "Intermediate Level",
        category: "Data Science",
        description: "As a Human Resources Specialist, you will support various HR functions, including recruitment, employee relations, and compliance.",
      
    }
];

function Jobs({isChoosen,setisChoosen}){
    return (
        <>
        <div className="card-container">
        {jobs.map((job)=>(
            <Card key={job.title} JobObj={job} 
            isChoosen={isChoosen} setisChoosen={setisChoosen}/>
        ))}
        </div>
        </>

    )
}



function Card({JobObj,isChoosen,setisChoosen}){
      if (isChoosen !== null && JobObj.category !== isChoosen) {
        return null;
    }
        
   
    return(
      
        <>
        <div className="card">
       <img src="/photos/adobe.png" alt="" className="cardPhoto" />
       <p className="titlo">{JobObj.title}</p>
       <div className="info">
        <p className="hi-lol">{JobObj.category}</p>
        <p className="hi-bye">{JobObj.level}</p>


        
        </div>
        <div className="para">
          <p>{JobObj.description}</p>  
        </div>
        <div className="btn-head">
            <button className="apply">Apply Now</button>
             <button className="learn">Learn More</button>
        </div>
       </div>
       </>
    )


}



export default Jobs;