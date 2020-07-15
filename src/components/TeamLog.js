import React from 'react';

const TeamLog = ({ users }) => {
  function toggleTeamLog() {
    var x = document.getElementById('players-ul')
    x.style.height = `${users.length * 5}rem`
    
    if (x.style.display === "none") {
      x.style.display = "inline-block";
    } else {
      x.style.display = "none";
    }
  }

  return (
  <section className="team-log">
    <div className="team-log-btn" onClick={toggleTeamLog}>
      <h5>Team Log</h5>
      <p>+</p>
    </div>
    <ul id="players-ul">
      {users.map(({ name }) => ( <li key={name} > {name} </li>))}
    </ul>
  </section>
)}

export default TeamLog;
