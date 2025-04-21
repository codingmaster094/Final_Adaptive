import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      src="/img/Logo.svg" 
      alt="company logo"
      role="image"
      aria-label="logo image"
      layout="responsive"
      width={159} 
      height={44} 
      priority 
    />
  );
};

export default Logo;
