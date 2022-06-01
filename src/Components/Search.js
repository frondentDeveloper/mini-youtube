import React, {useState} from 'react';
import logo from './image/logo1.png'
import functions from './image/functions.png'
import profileImg from './image/profile.jpg'

const Search = ({ onSubmit }) => {

    const [searchTerm, setSearchTerm] = useState("");
    const handelChange =(event) =>setSearchTerm(event.target.value);


    const keyPress = (event) =>{
        if (event.key === "Enter"){
            onSubmit(searchTerm)
        }
    }

    return (
        <>
           <div className="header">
                 <a href="/" className="Brand">
                     <img src={logo} alt="logo" className="logoBrand" />
                 </a>
                 <input 
                 type="text"
                 placeholder="search"
                 value={searchTerm}
                 onChange={handelChange}
                 onKeyPress={keyPress}
                 />

                 <div className="icons">
                     <img 
                     src={functions} 
                     alt="functions" 
                     className="functions" />

                     <a href="/" className="profile">
                         <img className="img-fluid" src={profileImg} alt="profileImg" />
                     </a>
                 </div>
            </div> 
        </>
    );
};

export default Search;