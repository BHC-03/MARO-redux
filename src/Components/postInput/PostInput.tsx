import React ,{useState}from "react";
import useAppSelector from "../../Hooks/ReduxHooks";
import fire from "../../firebaseConfig";
import './styling/PostInput.css'
import { postType } from "../../Types/Posts/posts";
const PostInput:React.FC = ()=>{
    const [text,setText] = useState<string>('');
    const currentUser = useAppSelector(state=> state.user);





    const clickHandler = async()=>{ 
        const id = 'someId' //TODO:change it with the library
        const newPost:postType = { //TODO: implement a post type
            id,
            author:currentUser.id,
            text,
            upvotes:[],
            downvotes:[],
            comments:[],
            timing: Date.now(),
        }
        await fire.firestore().doc(`${id}`).set(newPost);
        console.log('post added');
    }
    const changeHandler = (e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        setText(e.target.value);
    }
    return (
        <div className="postInputContainer">
            <p className="textAreaLabel">What's on your mind ?</p>
            <textarea value={text} onChange={changeHandler} style={{width:'70%',height:'180px'}} className="postInputArea" placeholder="Write down your story"></textarea>
            <div className="controlls">
                <div onClick={clickHandler} className="postSubmitButton">
                    Submit
                </div>
            </div>
        </div>
    )
}


export default PostInput;