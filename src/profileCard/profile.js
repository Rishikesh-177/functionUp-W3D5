import React from 'react'

const ProfileCard = ({ image, designation, name, jobDescription }) => {
    const handleClick = () => {
        alert (name);
    } ;

  return (
    <div className="profile-card">
        <div className='profile-card__image_container' >
            <img src={image} alt={name} className='profile-card__image' />
 </div>
 <div className='profile-card__details' >
   
    <h2 className='prfile-card__name'>{name}</h2>
    <h3 className='profile-card__designation'>{designation}</h3>
    <p className='profile-card__job-deceiption'>{jobDescription}</p>
    <button className='profile-card__button' onClick={handleClick}>
        see more
    </button>
 </div>
       </div>
  );
};

export default ProfileCard;


