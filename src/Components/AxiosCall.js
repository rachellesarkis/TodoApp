import React from 'react';
function AxiosCall({users}) {

    return (
        <div>
        <ul key={users.id}>
          {users.map(user =>
            <li key={user.id}>{user.id} {user.title}</li>
          )}
        </ul>
    

        </div>
    );
}

export default AxiosCall;