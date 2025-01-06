import React from 'react';

function Image() {
  const imageCount = 6;

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const imageStyle = {
    maxWidth: '1000px',
    width: '100%',
    height: 'auto',
    marginBottom: '0px',
  };

  return (
    <div style={containerStyle}>
      {[...Array(imageCount)].map((_, index) => (
        <img
          key={index}
          src={`/image/${index + 1}.jpg`}
          alt={`Image ${index + 1}`}
          style={imageStyle}
        />
      ))}
    </div>
  );
}

export default Image;
