import React from 'react';
import climbercrewlogo from './images/ClimberCrewLogo-small.png';
import anglefishlogo from './images/ANGLEFISH_logo-small.png';
import bg from './images/backgroundimage.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={climbercrewlogo} className="App-logo" alt="" />        
      </header>
      <body>
        <p className="sky"><b>Climber Crew is a rock climbing adventure game with delightful ragdoll physics.</b> Play solo and master each route on the map or race your friends in multiplayer for up to 4 players. Features endless rock walls to ascend, a diverse cast of climbers, and many fun surprises as you go.</p>

        <h2 className="sky">In development</h2>
        <h3 className="sky">Expected release on iPad, iPhone, PC, Switch, and more...</h3>

        <p>more information and presskit coming soon</p>

        <a href="http://twitter.com/RobQuiiinn">Follow on Twitter</a>
        
        <img src={anglefishlogo} className="Co-logo" alt="" />        


        <p>Copyright &copy; 2020 Robert Quinn and ANGLEFISH™. All rights reserved.</p>
      </body>
    </div>
  );
}

export default App;
