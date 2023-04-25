import React from 'react';
import './App.css';
import ProfileCard from './profileCard/profile';



const users = [
  {
    image: "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg",
    designation: "Software Engineer",
    name: "Rushikesh Rikibe",
    jobDescription: "Software Engineer responsibilities include gathering user requirements, defining system functionality and writing code in various languages, like Java, Ruby on Rails"
  },
  {
image: "https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU=",
designation: "Product Manager",
    name: "Shubham Parma",
    jobDescription: " This includes managing the product throughout the Product Lifecycle, gathering and prioritizing product and customer requirements, defining the product vision, and working closely with engineering, to deliver winning products."
  },
  {
    image:"https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    designation: "Marketing Manager",
        name: "Rajkumar Upade",
        jobDescription: 'A successful Marketing Coordinator has an eye for detail and can work well with others. Marketing Coordinators help develop advertising campaigns by scheduling promotional events, monitoring the sales status of products or services and keeping track of what'
  },
];


function App() {
  return (
    <div>
     <div style={{ display: "flex" , justifyContent: "center"}} >
     {users.map((user, index) => (
      <ProfileCard key={index} {...user} />
    ))}
    </div>
       </div>
  );
};

export default App;
