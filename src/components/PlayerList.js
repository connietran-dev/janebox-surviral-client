import React from 'react';

const PlayerList = ({ users }) => (
    <div className="textContainer">
        {
            users
                ? (
                    <div>
                        <h1>Players in your party:</h1>
                        <div>
                            <h2>
                                {users.map(({ name }) => (
                                    <div key={name} >
                                        {name}
                                    </div>
                                ))}
                            </h2>
                        </div>
                    </div>
                )
                : (
                    <div>
                        <h1>There is no one in your party yet</h1>
                    </div>
                )
        }
    </div>
);

export default PlayerList;