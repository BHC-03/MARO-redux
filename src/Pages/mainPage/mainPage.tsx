import React from 'react';
import PostsContainer from '../../Components/PostsContainer/PostsContainer';
import PostInput from '../../Components/postInput/PostInput';
import './styling/mainPage.css'


const MainPage:React.FC = ()=>{
    return (
        <div className='pageBody mainPageBody'>
            <div className="mainPageContentContainer">
                <PostInput />
                <PostsContainer />
            </div>
        </div>
    )
}

export default MainPage;