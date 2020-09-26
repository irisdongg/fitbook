import React from 'react';
import "./Postworkout.css";


function Postworkout(props) {
    return (
        <div className="UserPost">
            <input post = "beforePosts" placeholder = "Ask your friends to workout!"></input>
            <br></br>
            <button onclick = "fn1()" id = "btn1">Post!</button>
        </div>

    );
}

export default Postworkout;
