import React from 'react';
import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_1.jpg';
import StoryImage from '../../images/about1.jpg';
import VisionImage from '../../images/about2.jpg';
import MissionImage from '../../images/about3.jpg';
import './about.css';

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus excepturi incidunt magni suscipit accusantium asperiores voluptatibus et, cum nobis consectetur!
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus nemo, eos molestias fugit sint quaerat accusamus deserunt inventore perferendis ad commodi possimus nulla illum incidunt nesciunt saepe distinctio vero obcaecati eligendi cum nam a itaque dolores voluptates. Ad perspiciatis veniam laudantium perferendis expedita culpa alias hic, reiciendis, molestias explicabo accusamus doloremque aliquam! Voluptatum voluptas error quos quis corrupti autem delectus.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus ratione dolore debitis totam, corrupti repellat repudiandae fuga magnam sint, labore laborum doloribus vitae temporibus assumenda facilis dolorem, soluta laudantium?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, provident maxime optio non laboriosam tenetur.
            </p>
          </div>
        </div>
      </section>
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus nemo, eos molestias fugit sint quaerat accusamus deserunt inventore perferendis ad commodi possimus nulla illum incidunt nesciunt saepe distinctio vero obcaecati eligendi cum nam a itaque dolores voluptates. Ad perspiciatis veniam laudantium perferendis expedita culpa alias hic, reiciendis, molestias explicabo accusamus doloremque aliquam! Voluptatum voluptas error quos quis corrupti autem delectus.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus ratione dolore debitis totam, corrupti repellat repudiandae fuga magnam sint, labore laborum doloribus vitae temporibus assumenda facilis dolorem, soluta laudantium?
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus nemo, eos molestias fugit sint quaerat accusamus deserunt inventore perferendis ad commodi possimus nulla illum incidunt nesciunt saepe distinctio vero obcaecati eligendi cum nam a itaque dolores voluptates. Ad perspiciatis veniam laudantium perferendis expedita culpa alias hic, reiciendis, molestias explicabo accusamus doloremque aliquam! Voluptatum voluptas error quos quis corrupti autem delectus.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus ratione dolore debitis totam, corrupti repellat repudiandae fuga magnam sint, labore laborum doloribus vitae temporibus assumenda facilis dolorem, soluta laudantium?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, provident maxime optio non laboriosam tenetur.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About