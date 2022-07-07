import React from "react";
import './styling/PostInput.css'
const PostInput:React.FC = ()=>{
    return (
        <div className="postInputContainer">
            <p className="textAreaLabel">What's on your mind ?</p>
            <textarea style={{width:'70%',height:'180px'}} className="postInputArea" placeholder="Write down your story"></textarea>
            <div className="controlls">
                <div className="postSubmitButton">
                    Submit
                </div>
            </div>
        </div>
    )
}


export default PostInput;