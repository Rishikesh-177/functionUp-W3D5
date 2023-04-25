import React from 'react';
import './App.css';
import ProfileCard from './profileCard/profile';
import user1 from './images/user1.jpeg' ;
import user2 from './images/user2.jpeg';
import user3 from './images/user3.jpeg';


const users = [
  {
    image: user1,
    designation: "Software Engineer",
    name: "Rushikesh Rikibe",
    jobDescription: "Software Engineer responsibilities include gathering user requirements, defining system functionality and writing code in various languages, like Java, Ruby on Rails"
  },
  {
image: user2,
designation: "Product Manager",
    name: "Shubham Parma",
    jobDescription: " This includes managing the product throughout the Product Lifecycle, gathering and prioritizing product and customer requirements, defining the product vision, and working closely with engineering, to deliver winning products."
  },
  {
    image: user3,
    designation: "Marketing Manager",
        name: "Rajkumar Upade",
        jobDescription: 'A successful Marketing Coordinator has an eye for detail and can work well with others. Marketing Coordinators help develop advertising campaigns by scheduling promotional events, monitoring the sales status of products or services and keeping track of what'
  },
];


function App() {
  return (
    <div>
      <img src={require('./images/user1')} />
     {users.map((user, index) => (
      <ProfileCard key={index} {...user} />
    ))}
       </div>
  );
};

export default App;
