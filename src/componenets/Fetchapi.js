import React, { useEffect, useState } from "react";

const Fetchapi = () => {

    const [records, setRecords] = useState([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setRecords(data))
            .catch(error => console.error(error))

    }, [])


    return (
        <div className="h-max w-full" >
            <ul className=" text-cyan-200">
                {records.map((list, index) => {
                    
                    return(
                    <li key={index} > {list.id} | {list.name} </li>
                    )

                })}

            </ul>
            </div>
    )
}

export default Fetchapi; 