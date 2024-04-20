import React, { useEffect, useState, useRef } from "react";
import "./Dashboard.css";
import Graph from "../../logo.svg";
import notification from "../../logo.svg";
import LineGraph from "../../logo.svg";
import user from "../../logo.svg"
import schedule from "../../logo.svg"
import transaction from "../../logo.svg"
import settings from "../../logo.svg"
import dashboard from "../../logo.svg"
import searchic from "../../logo.svg"
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import temperature from "../../logo.svg"
import feels from "../../logo.svg"
import humidity from "../../logo.svg"
import pressure from "../../logo.svg"
import {useNavigate} from "react-router-dom"


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




    return (

        <div className="main-dash">
            <div className="nav-dash">
                <div className="in-nav-dash">
                    <h1>Santa.</h1>
                    <a><img src={dashboard} /><p>Dashboard</p></a>
                    <a><img src={transaction} /><p>Transition</p></a>
                    <a><img src={schedule} /><p>Schedule</p></a>
                    
                </div>
                <div className="in-nav-dash">
                    <p>Help</p>
                    <p>Contact us</p>
                </div>


            </div >

            <div className="container-dash">
                <div className="top-cont-dash">
                    <div className="logo-dash">
                        <h1>Dashboard</h1>

                    </div>
                    <div className="search-dash">
                        <div className="search-bar">
                            <input placeholder="Search..." />
                            <button ><img src={searchic} /></button>

                        </div>

                        <img src={notification} />
                        <button onClick={handleClick} className="useric"><img src={localStorage.photoURL} /></button>



                    </div>
                    <div ref={divRef} className="opt">
                        <p>{localStorage.name}</p>
                        <p onClick={signUserOut} >Sign Out</p>
                    </div>
                </div>
                <div className="graph-cont-dash">
                    <div className="head-graph-cont-dash">
                        <div>
                            <button ><a href="/Recordvideo">Capture Image</a></button>
                        </div>
                        <div>
                            <button>Upload ImageSSS</button>
                        </div>
                        
                        
                    </div>
                    


                </div>
                
                
            </div>

        </div>
    )
}
export default Dashboard;