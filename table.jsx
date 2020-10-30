import React from 'react';
import Tablehead from './tablehead.jsx';
import Tablebody from './tablebody.jsx';
const Data=()=>{

}
const header={
   Id:"Id",
    Name:"Name",
    age:"age",
    Department:"Department",
    Salary:"Salary",
    View:"View",
    Update:"Update",
    Delete:"Delete"
}
const user=[
    {
       Id:1,
    Name:"vikas",
    Department:"Testing",
    Salary:30000,
    View:<button>view</button>, 
    Update:<button>update</button>,
    Delete:<button>delete</button>
    
    },
    {
        Id:2,
    Name:"shivam",
    Department:"Networking",
    Salary:30000, 
    View:<button>view</button>,
    Update:<button>update</button>,
    Delete:<button>delete</button>
    
    },
    {
        Id:3,
    Name:"jais",
    Department:"development",
    Salary:30000, 
    View:<button>view</button>,
    Update:<button>update</button>,
    Delete:<button>delete</button>
    
    },
    {
        Id:4,
    Name:"rajat",
    Department:"Networking",
    Salary:30000, 
    View:<button>view</button>, 
    Update:<button>update</button>,
    Delete:<button>delete</button>



    },

];
function Table() {
    return (
        <>
        <button class="button button1" onClick={Data}>Add</button>      
            <table>
                <Tablehead header={header}/> 
                <Tablebody user={user}/>


                
            </table>
        </>

        );
  }
  export default Table;