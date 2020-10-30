import React from 'react';
import Bodyrow from './tablebodyrow.jsx';

    function Tablebody(props) {
        const users = props.user;
        return (
            <tbody>
                <Bodyrow users={users}/>
            </tbody>   
        )
      }

      export default Tablebody;