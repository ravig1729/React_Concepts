import React from "react";

// const Student = (props) =>{

//     console.log(props);
    
//     // const {name, country} = studentObj;
//     return(
//         <div>
//           {/* <h3>{index}</h3>
//           <h3>{name}</h3>
//           <h3>{country}</h3> */}
//         </div>
//     )
// }

const Student = ({ index, studentObj }) => {
  console.log(studentObj);
  const { name, country } = studentObj;
  return (
    <>
      <li
        className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
        style={{ backgroundColor: "#f4f6f7" }}
      >
        {name}    ||    {country}
      </li>
      
    </>
  );
};

export default Student