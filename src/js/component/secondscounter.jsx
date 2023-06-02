import React from "react";

import { useState, useEffect } from "react";

const SecondsCounter = () => {

    let [currentTime, setCurrentTime] = useState(new Date());
    let [counter, setCounter] = useState(1000);

    useEffect(() => {
        setInterval(() => {
            setCurrentTime(new Date());
        }, 1000)
    }, [])

    useEffect(() => {
        setCounter(counter-1);
    }, [currentTime])

    let secCounter = counter.toString().padStart(6, 0);

    return (
        <div>
            <div className="container-fluid" id="navBar">
                <div className="row">
                    <div class="col align-middle" id="icon">
                        <i class="far fa-clock" style={{color: "white"}} ></i>
                    </div>
                    <div class="col align-middle" id="counter">
                        <span className="text-white">{secCounter}</span>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default SecondsCounter;