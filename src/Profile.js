import React from 'react';
import "./Profile.css";
import iris from './IMG_9922.JPG'
import swim from './swim.png'
import tennis from './tennis.png'
import bike from './bike.png'
import streak from './streak.png'
import silver from './silver.png'
import tenniscolor from './tennis-color.png'

function Profile(props) {
    return (
        <>
            <div className="page-header">
                <div className = "profImage">
                    <img className="profile-pic" src={iris} alt="profilepic" />
                </div>
            </div>
            <br></br> <br></br>
            <h2>Iris Dong</h2>
            <div className="row">
                <div className="col">
                    <img className="interest-pic" src={swim} alt="interest" />
                </div>
                <div className="col1">
                    <img className="interest-pic" src={tennis} alt="interest" />
                </div>
                <div className="col">
                    <img className="interest-pic" src={bike} alt="interest" />
                </div>
            </div>
                <p> Hi, my name is Iris. I do competitive coding and chess. I'm a mathlete.</p>

            <br></br>
            <div className = "row">
                <div className = "info">
                    <div className = "content1">
                        <h3>Exercise Streak</h3>
                        <div className = "row">
                            <h1 className = "spaceTop"> 14 </h1>
                            <img className="streak" src={streak} alt="profilepic" />
                        </div>
                    </div>
                    <div className = "content2">
                        <h3>Top Sport</h3>
                        <div className = "row">
                            <h1 className = "spaceTop"> Tennis </h1>
                            <img className="tenniscolor" src={tenniscolor} alt="profilepic" />
                        </div>
                    </div>
                    <div className = "content3">
                        <h3>Level</h3>
                        <div className = "row">
                            <h1 className = "spaceTop"> Silver </h1>
                            <img className="silver" src={silver} alt="profilepic" />
                        </div>
                    </div>
                </div>
            </div>


        </>
        
    );
}

export default Profile;