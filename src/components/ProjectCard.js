import React from 'react';

export const ProjectCard = ({ imgUrl, onClick, className }) => {
  // Extract image name from the URL
  const imageName = imgUrl.split('/').pop().split('.')[0].replace(/_/g, ' ');

  return (
    <div 
      className={`project-card ${className || ''} mb-2`} 
      onClick={onClick}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <img 
        src={imgUrl} 
        alt="project"
        style={{
          width: '100%',
          display: 'block'
        }}
      />
      <div className="overlay">
        <span className="overlay-text">{imageName}</span>
      </div>
    </div>
  );
};
