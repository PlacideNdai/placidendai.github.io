import React from 'react';
import './App.css';
import logo from './logo.jpg';
import mePhoto from './meimg.jpg';

function App() {

  function reloads(){
    window.location.reload();
  }

  return (
    <div className="App">
      {/* head */}
      <div id="heads">

        <div id="logosholder">
           <img id="logos" src={logo} alt={'logo'} onClick={reloads}/> 
        </div>

        <div id="links">
          <span> <h3>Games</h3></span>
          <span > <h3 > <a href="https://corruptedseed.bandcamp.com"> Music</a></h3></span>
          <span> <h3>Other Links</h3></span>
        </div>

      </div>

      {/* body */}
      <div id="body">
        <div id='imgholder'>
          <img id='mephoto' src={mePhoto} alt={'me'} />
        </div>
        <div id='aboutmeholder'>
          <p id="aboutme"> Hi!<br />I am Placide. <br />Growing to be a future builder. Studying computer science and planning doing mathematics as a minor. I love good friends, good music, FAITH, #cookie, Younglife, CHESS. I learn things fast and I am able to do anything with training. Yes, that includes flying.</p>
        </div>
      </div>

      {/* footer */}
      <div id="footer">
        <span id='logosholder'> <img id="logos" src={logo} alt={'logo'}/> </span>
        <span id='social'>
          <p> <a href="https://www.instagram.com/notplacide/">Instagram</a> </p>
          <p> <a href="https://www.linkedin.com/in/placidendaisenga/">LinkedIn</a> </p>
          <p> <a href="https://www.twitter.com/placidendai/">Twitter</a> </p>
        </span>
        <span> <p>Tic Tac Toe</p></span>
      </div>

    </div>
  );
}



export default App;
