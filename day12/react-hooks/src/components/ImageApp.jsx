import React, { useState } from 'react';
import pic from '../images/image.jpg';
import './imageApp.css';
const ImageApp = ()=>{
    const [height,setHeight] = useState(200);
    const [width,setWidth] = useState(200);
    const [rotation,setRotation] = useState(0);
    return(
        <div className='disp'>
            <div className='img'>
                <img src={pic} alt="" style={{
                    height: height,
                    width: width,
                    transform: `rotate(${rotation}deg)`
                }} />
            </div>
        </div>
    )

}
export default ImageApp;