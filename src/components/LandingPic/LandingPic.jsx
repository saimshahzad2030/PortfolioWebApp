import React, { useEffect, useState } from 'react';
import style from './LandingPic.module.css';

export default function LandingPic() {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    // Use setTimeout to delay the rendering of the image
    const timeoutId = setTimeout(() => {
      setShowImage(true);
    }, 1000); // Set the delay time in milliseconds (1 second in this example)

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <img
      className={`${style.logoImg} ${showImage ? style.show : ''}`}
      src={process.env.PUBLIC_URL + '/Assets/NameLogo/profile.png'}
      alt="ProfilePic"
    />
  );
}
