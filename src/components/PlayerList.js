import React from 'react';

export const PlayerList = ({ users }) => (
    <section className="Player-List">
        { users.length > 0
          ? (<div>
              <h3>Players in your party:</h3>
              <ul>
                {users.map(({ name }) => ( <li key={name} > {name} </li>))}
              </ul>
            </div>)
          : (<div><h1>There is no one in your party yet</h1></div>)}
    </section>
);

