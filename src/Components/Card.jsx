const jobs = [
    {
        company: "Google",
        title: "Cloud Engineer",
        location: "Hyderabad",
        level: "Intermediate Level",
        description: "Join our technology team as a Cloud Engineer, where you will be responsible for designing and managing our cloud infrastructure."
    },
    {
        company: "Microsoft",
        title: "Network Security Engineer",
        location: "Bangalore",
        level: "Senior Level",
        description: "We are seeking a Network Security Engineer to protect our organization's IT infrastructure. You will design and implement security measures to keep systems safe."
    },
    {
        company: "Amazon",
        title: "Software Tester",
        location: "Chennai",
        level: "Intermediate Level",
        description: "As a Software Tester, you will play a critical role in ensuring the quality and reliability of our software applications. You will design test cases."
    },
    {
        company: "Adobe",
        title: "Graphic Designer",
        location: "Chennai",
        level: "Intermediate Level",
        description: "Join our creative team as a Graphic Designer, where you will be responsible for creating visually appealing graphics and layouts that enhance our brand."
    },
    {
        company: "Walmart",
        title: "Content Marketing Manager",
        location: "Mumbai",
        level: "Senior Level",
        description: "We are looking for a Content Marketing Manager to lead our content strategy and execution. In this role, you will develop compelling content."
    },
    {
        company: "Samsung",
        title: "Human Resources Specialist",
        location: "Washington",
        level: "Intermediate Level",
        description: "As a Human Resources Specialist, you will support various HR functions, including recruitment, employee relations, and compliance."
    }
];
function Jobs(){
    return (
        <>
        {jobs.map((job)=>(
            <Card key={jobs.title} JobObj={jobb} />
        ))}
        </>

    )
}



function Card(){
    return(
        <>
        <div className="card">
       <img src="/photos/google.jpg" alt="" className="cardPhoto"/>
       <p className="titlo">Cloud Engineer</p>
       <div className="info">
        <p className="hi-lol">Programming</p>
        
        </div>
       </div>
       </>
    )
}
export default Jobs;