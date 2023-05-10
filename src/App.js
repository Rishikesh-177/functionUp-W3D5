import React from "react";

import "./App.css";
import MentorCard from "./Mentor/MentorCard";

function App() {
  const mentors = [
    {
      name: "Pritesh Kumar",
      University: "IIT Delhi",
      position: "CTO @ FunctionUp",
      experience: "9 Yrs Exp.",
      image: "https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fpritesh.3b7c44ee9f2c717c5301037740bb6eb6.jpeg&w=1920&q=75"
    },

    {
      name: "Anubhav Singh",
      University: "IIT Kanpur",
      position: "Co-founder @ Dubdub.ai",
      experience: "7 Yrs Exp." ,
      image: "https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fanubhav.6a3b4e1b4097967be9b5418ab786f1ce.jpeg&w=1920&q=75"
    },

    {
      name: "Aviral Sharma ",
      University: "IIT Delhi",
      position: "Data Scientist Manager @ Optum",
      experience: "7 Yrs Exp.",
      image: "https://functionup.org/_next/image?url=http%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1672906235709x512347696206974850%2FMentor-4.jpeg&w=1920&q=75"
    },

    {
      name: "Rahul Garg  ",
      University: "IIT Kanpur",
      position: "Co-founder @ Dubdub.ai",
      experience: "7 Yrs Exp." ,
      image: "https://functionup.org/_next/image?url=http%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1672906303309x809592985984049700%2F1517597437249.jpeg&w=1920&q=75"
    },

    {
      name: "Gaurav Agarwal ",
      University: "IIT Delhi",
      position: "Senior Engineer @ Uber California",
      experience: "9 Yrs Exp.",
      image: "https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fgaurav.72b71c73fd8e8ddd0a5e0ec77acdec55.jpeg&w=1920&q=75"
    },

    {
      name: "Rahul Sankhwar ",
      image: "https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Frahul.05ecf431785ed6ed909ee4f781bf14fc.jpeg&w=1920&q=75",
      University: "IIT Kanpur",
      position: "Senior Data Scientist @ Sharechat",
      experience: "6 Yrs Exp." 
    },

    {
      name: "Anchal Jaiswal",
      University: "IIT Kanpur",
      position: "Senior Data Scientist @ Tredence",
      experience: "7 Yrs Exp.",
      image: "https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fanchal.b2ab3290c2c9167be3c3ca3a0487eff9.jpeg&w=1920&q=75"
    },

    {
      name: "Uddhav Bamba",
      University: "IIT Dhanbad",
      position: "Applied Scientist @ Amazon",
      experience: "3 Yrs Exp.",
      image: "https://functionup.org/_next/image?url=http%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1672906339831x204777177063368830%2F1669699961094.jpeg&w=1920&q=75"
    },
  ];


  return (
    <div>
    <h1> Mentor List</h1>
    <div className="scrollable-container">
      
        {mentors.map((mentor, index) => (
<MentorCard key={index} mentor={mentor} />
        ))}
      </div>
    </div>
    
  );
};

export default App;
