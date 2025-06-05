import React from "react"
export default function About({image,about}){
    const image1 = image ?? "https://via.placeholder.com/215";
    return(
        <aside>
         <img src={image1} alt = "blog logo"></img>
            <p>{about}</p>
        </aside>
    )

}
