import React from "react";

const MentorCard = ({ mentor }) => {
    return (
        <div className="mentor-card">
            <img 
            src={mentor.image}
             alt={mentor.name} 
className="mentor-image"
             />
            <h3> {mentor.name}</h3>
            <p> {mentor.University}</p>
            <p> {mentor.position}</p>
            <p> {mentor.experience}</p>
        </div>
    );
};

export default MentorCard;