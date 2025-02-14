import React from 'react';

const AguaCard = ({ img, title, text1,text2 }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>

      <img src={img} className="card-img-top" alt={title} />      
      
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text1}<br />{text2}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>

    </div>
  );
};

export default AguaCard;
