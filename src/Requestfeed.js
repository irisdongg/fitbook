import React from 'react';
import "./Requestfeed.css";
import "./App.css";

function Requestfeed(props) {
    return (
        <>
            <div className = "requestfeed">
                <h1>Suzanne Nie</h1>
                <h4> Anyone want to play tennis tomorrow at Memorial Park at 6:00pm? </h4>
                <p> Beginner/Intermediate Level</p>
                <input post = "beforePosts" placeholder = "Let Suzanne know you're interested" size = "100"></input>
            </div>

            <div className = "requestfeed2">
                <h1>Divya Aggrawal</h1>
                <h4> Looking for a buddy to do Chloe Ting workouts with me! </h4>
                <p> Intermediate </p>
                <input post = "beforePosts" placeholder = "Let Divya know you're interested" size = "100"></input>
            </div>

            <div className = "requestfeed3">
                <h1>Emma Herrera</h1>
                <h4>Looking for a boxing/sparring partner for Mondays at 5:30pm.</h4>
                <p> Advanced </p>
                <input post = "beforePosts" placeholder = "Let Emma know you're interested" size = "100"></input>
            </div>

        </>
        
    );
}

export default Requestfeed;