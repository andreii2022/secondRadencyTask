import React from "react";



type src = {
    src: string
}
const CategoryImg = (props: src) => {
    return(
        <div className="img-wrapper">
            <img className="img" src={props.src} alt='icon'/>
        </div>
    )
}

export default CategoryImg;

