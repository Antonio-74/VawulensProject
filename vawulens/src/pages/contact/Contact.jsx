import React from 'react';
import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_2.jpg';
import { MdEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import './contact.css';

function Contact() {
  return (
    <>
      <Header title='Get In Touch' image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquid nostrum quos sapiente deleniti repellat incidunt? Iure quod praesentium aut.
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href='mailto:support@egattor.com' target='_blank' rel='noreferrer'><MdEmail /></a>
            <a href='http://m.me/test' target='_blank' rel='noreferrer'><BsMessenger /></a>
            <a href='http://m.me/test'  target='_blank' rel='noreferrer'><IoLogoWhatsapp /></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact