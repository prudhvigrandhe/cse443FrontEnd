import React, { useEffect, useState, useRef } from "react";
import "./Dashboard.css";
import upload from "../../img/upload.png";
import video from "../../img/youtube.png";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import Logo from "../../img/road-barrier.png"
import { useNavigate } from "react-router-dom"


function Dashboard({ setIsAuth, isAuth }) {
    let navigate = useNavigate();
    const [wet, setwet] = useState([]);
    const [setter, setsetter] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const [search, setsearch] = useState("kolkata");
    const divRef = useRef(null);

    const handleClick = () => {
        setIsVisible(!isVisible);
        divRef.current.style.display = isVisible ? 'none' : 'block';
    };
    const signUserOut = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false);
            window.location.pathname = "/"
        });
    };

    useEffect(() => {

        if (!isAuth) {
            navigate("/");
        }

    }, [search])


    const selectopt = (event) => {
        setsearch(event.target.value)

    }
    const url = 'https://appbacken-hvwoypdrr2hfhuhecrbuun.streamlit.app'
    const redirectToWebsite = () => {
        window.location.href = url; // Replace 'https://example.com' with your desired URL
    };
    const redirectToUpload = () => {
        window.location.href = url + '/upload'; // Replace 'https://example.com' with your desired URL
    };




    return (

        <div className="main-dash">
            {/* <div className="nav-dash">
                <div className="in-nav-dash">
                    <h1>CSE443.</h1>
                    <a><img src={dashboard} /><p>Dashboard</p></a>
                    <a><img src={transaction} /><p>Transition</p></a>
                    <a><img src={schedule} /><p>Schedule</p></a>

                </div>
                <div className="in-nav-dash">
                    <p>Help</p>
                    <p>Contact us</p>
                </div>


            </div > */}

            <div className="container-dash">
                <div className="top-cont-dash">
                    <div className="logo-dash">
                        <img src={Logo}/>
                        <h1>Catch At Toll</h1>

                    </div>
                    <div className="search-dash">
                        
                        
                        <button  onClick={handleClick} className="useric"><img src={localStorage.photoURL} /></button>



                    </div>
                    <div ref={divRef} className="opt">
                        <p>{localStorage.name}</p>
                        <p onClick={signUserOut} >Sign Out</p>
                    </div>
                </div>
                <div className="graph-cont-dash">
                    <div className="head-graph-cont-dash">
                        <div>
                        <img src={video}/>
                            <button className="button-45" onClick={redirectToWebsite}>
                                Video Capture
                            </button>
                        </div>
                        <div>
                        <img src={upload}/>
                        <button className="button-45" onClick={redirectToUpload}>

                        Upload Image
                            </button>
                        </div>


                    </div>



                </div>


            </div>

        </div>
    )
}
export default Dashboard;