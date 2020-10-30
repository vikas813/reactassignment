import React from 'react';

    function Tablehead(props) {
        const headers = props.header;
        return (
            
    <thead>
         <tr>
            <th>{headers.Id}</th>
            <th>{headers.Name}</th>
            <th>{headers.Department}</th>
            <th>{headers.Salary}</th>
            <th>{headers.View}</th>
            <th>{headers.Update}</th>
            <th>{headers.Delete}</th>
        </tr> 
    </thead>
    
       
       );
      }

      export default Tablehead;
