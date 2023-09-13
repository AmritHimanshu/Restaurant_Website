import React, { useEffect } from 'react';
import Slider from './Slider'; 
import Card from './Card'; 
import Footer from '../Footer/Footer';
import './AboutUs.css'; 

const AboutUs = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sliderImages = [
    "https://www.bhartenduassociates.com/wp-content/uploads/2023/01/A11.jpg",

    "https://www.sugarandspace.in/wp-content/uploads/2020/07/tablesetting_restaurants.jpg",

    "https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3332/x_0,y_1342,w_5000,h_1666,r_0,c_crop,q_80,fl_progressive/w_750,f_auto,c_fit/the-residency-towers-coimbatore/Chin_Chin_-_Chinese_restaurants_in_Coimbatore_2",

    "https://inrestoblog.s3.ap-south-1.amazonaws.com/types1.png",

    "https://www.bhartenduassociates.com/wp-content/uploads/2023/01/A11.jpg",
  ];

  const teamMembers = [
    {
      name: 'Mahesh',
      designation: 'General Manager',
      image: 'https://etimg.etb2bimg.com/photo/94751649.cms',
    },
    {
      name: 'Mamta',
      designation: 'Head chef',
      image: 'https://www.escoffier.edu/wp-content/uploads/2016/02/Smiling-female-chef-with-white-hat-and-uniform-in-a-kitchen-e1611773135718.jpg',
    },
    {
      name: 'Subhash',
      designation: 'Chef',
      image: 'https://im.rediff.com/getahead/2015/mar/27chef-ranveer-brar-1.jpg',
    },
  ];

  return (
    <div className="about-us-container">
      <Slider images={sliderImages} />

      <div className="about-us-content">
        <h1>About Our Company</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis eaque quia placeat fugiat quos veritatis autem illum quas, enim magni. Maxime nam quo, error minus quos blanditiis similique accusantium illo nobis animi nihil nemo sunt accusamus quae inventore neque voluptas. Quae totam voluptates rem, accusantium necessitatibus unde quas blanditiis impedit!</p>
      </div>
      <div className='team'>
        <h1>Our Team</h1>
      </div>

      <div className="team-cards">
        {teamMembers.map((member, index) => (
          <Card key={index} name={member.name} designation={member.designation} image={member.image} />
        ))}
      </div>

      <Footer/>
    </div>
  );
};

export default AboutUs;
