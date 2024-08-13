// import React, { useState } from 'react'

export default function About(props) {
let myStyle={
    color:props.mode==='dark'?'white':'black',
    backgroundColor:props.mode==='dark'?'#042743':'white',
}
  
return (
<div className="container" style={myStyle} >
    <h1 className="my-3" >About Us</h1>
    <strong>
    <p>Welcome to TextUtils, your ultimate destination for all things text-related. Since our inception in [2024], we have been committed to providing innovative tools and solutions that make text manipulation and analysis easier than ever. Whether you need to format, analyze, convert, or enhance text, our comprehensive suite of utilities has got you covered. Our user-friendly platform is designed to cater to both individuals and businesses, ensuring that everyone can benefit from our powerful features. At TextUtils, we prioritize efficiency, accuracy, and customer satisfaction, striving to deliver the best possible experience. Join us in simplifying your text tasks and unlocking new possibilities with TextUtils. </p>
    </strong>
</div>
)
}

