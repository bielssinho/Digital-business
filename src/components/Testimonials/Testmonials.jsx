import React from "react";
import "./Testmonials.css"
import SlickSlider from "./SlickSlider";


const Testmonials = () => {
    return (
        <div className="t-wrapper">
            <div className="container">
                <div className="t-container">
                    <div className="t-head">
                        <span className="tag">Testmonials</span>
                        <span className="title">Access Capital That Complements Traditional Funding Options</span>
                        <span className="des">What people say about us</span>
                    </div>

                    <div>
                        <SlickSlider />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testmonials