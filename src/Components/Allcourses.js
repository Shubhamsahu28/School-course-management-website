import React, { useState } from "react";
import Course from "./course";


const Allcourse=()=>{

   const[courses,setCourses]=useState([
        {title:"java Course",description:"this is demo course"},
       {title:"C++ Course",description:"this is demo course"},
       {title:"react js Course",description:"this is demo course"},
    ]);
    return (
        <div>
            <h1>
                All course
            </h1>
            <p>List of courses are as follows</p>
            {
                courses.length>0? courses.map((item)=><Course course={item} />):"no courses "}
            
        </div>


    );
};

export default Allcourse;