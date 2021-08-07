import React, { useState } from 'react';
import Modal from '../Modal';

const ProjectList = ({ name }) => {

  const [photos] = useState([
    {
      name: 'Restaurant Recommender',
      description: 'The Restaurant Recommender will alleviate the stress and irritation of figuring out where to go to eat! NOM NOM NOM ',
    },
    {
      name: 'Benefactor',
      description: 'Gifting with a twist!!!  Create wishlists, shop for gifts you KNOW will be loved PLUS have the opportunity to contribute to surprising a random user with a gift on their wishlist!  ',
    },
    {
      name: 'Workday Scheduler',
      description: 'Simple & Quick at a glance way to schedule your Workday',
    },
    {
      name: 'Password Generator',
      description: 'Have you run out of passwords??  Use Password Generator to save time and get to clicking!',
    },
    // {
    //   name: 'PLACEHOLDER FOR A 5TH PROJECT',
    //   description: 'insert project for the 5th modal when we finish more',
    // },
    // {
    //   name: 'PLACEHOLDER FOR a 6TH PROJECT',
    //   description: 'insert project for the 6th modal when we finish more',
    // },
    
      
  ]);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentPhotos = photos.filter((photo) => photo.name === name);
  const [currentPhoto, setCurrentPhoto] = useState();
  const toggleModal = (image, i) => {
    setCurrentPhoto({...image, index: i})
    setIsModalOpen(true);
  }


  return (
    <div>
      <Modal />
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/projphotos/${name}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={()=> toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;

