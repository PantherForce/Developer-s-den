import React from "react";

const Footer = ()=>{
    return(
      <div className="">
       <center>
        <h1>
            Simple Website Contact us !! 
        </h1>
        <ul className="flex text-xl text-blue-400">
            <link to ="./home"> Home </link>
            <link to ="./Company"> Company </link>
            <link to ="./Resources"> Resources </link>
            <link to ="./About"> About  </link>
            <link to ="./Contact"> Contact </link>
        </ul>
       </center>
      </div>
    )
}

export default Footer ; 