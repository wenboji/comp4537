import React from 'react';
const Home = () => {
  return (
    <div className="App">
      <div className="intro">
        <div className="my_name">Wenbo Ji</div>
        <div className="my_photo">
          <img
            src={process.env.PUBLIC_URL + '/image/headshot.jpg'}
            alt="headshot"
          ></img>
        </div>
        <div className="intro_text">I think it is OK!</div>
      </div>
    </div>
  );
};

export default Home;
