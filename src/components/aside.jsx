import React from 'react';

const Aside = (props) => {
  const { garage, children } = props;
  return (
    <div className="aside">
      <div className="illustration" style={{ backgroundImage: "url('/assets/images/mechanic.jpg')" }} />
      <img className="logo" src="/assets/images/logo.svg" alt="logo" />
      <h1>{garage}</h1>
      <p>
        Our garage is the best. Reasonable prices, always on time, we are the best (and fictionnal).
      </p>
      {children}
    </div>
  );
};

export default Aside;
