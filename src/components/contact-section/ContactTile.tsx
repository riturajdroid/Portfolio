import React from 'react';
import DescriptionText from '../DescriptionText';

interface ContactTileProp {
    logo: React.ReactNode; // 1. Changed from string to ReactNode
    link: string;
    text: string;
}

const ContactTile = ({ logo, link, text }: ContactTileProp) => {
  return (
    <div className="hover:scale-105 transition-transform duration-300 w-full max-w-[450px]">
      <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
        <div className="text-[#6a99ff] text-3xl">
          {logo} 
        </div>        
        <DescriptionText e={text} />
      </a>
    </div>
  )
}

export default ContactTile;