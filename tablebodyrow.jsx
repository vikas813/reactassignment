import React from 'react';

function Bodyrow(props) {
        console.log(props.users);
        const users_rows = props.users.map(
            user =>  (<tr>
                        <td>{user.Id}</td>
                        <td>{user.Name}</td>
                        <td>{user.Department}</td>
                        <td>{user.Salary}</td>
                        <td>{user.View}</td>
                        <td>{user.Update}</td>
                        <td>{user.Delete}</td>
                   </tr>)
        );

        return (
         <>
         {users_rows}
         </>
        );
      }
export default Bodyrow;