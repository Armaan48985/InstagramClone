import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { BiBookmark } from "react-icons/bi";
import {FaBookmark} from 'react-icons/fa'
import { GrEmoji } from "react-icons/gr";
import redHeart from '../images/redHeart.png'


function Memeitem({
    name,
    time,
    profilePic,
    mainImg,
    video,
    mainVideo,
    comments,
    likes,
    caption,
    setShowpostSetting
  }){
    const [savedpost, setSavepost] = useState(false)
    const [likedpost, setLikedpost] = useState(false)

    return (
      <div className="meme-container">
        <div className="meme-header">
          <div className="flex">
            <img src={profilePic} />
            <p>{name}</p>
            <span>{time}</span>
          </div>
          <div className="threedot-menu" onClick={() => setShowpostSetting(e => !e)}>
            <BsThreeDots />
          </div>
        </div>

        <img className="meme-img" src={video ? mainVideo : mainImg} />

        <div className="meme-footer">
          <div className="meme-buttons">
            <div>
              <span className="meme-button-heart" onClick={() => setLikedpost(e => !e)}>
                {likedpost ? <img className="red-heart" src={redHeart}/> :  <FaRegHeart />}
              </span>
              <span className="meme-button-comment">
                <FaRegComment />
              </span>
            </div>
            <span className="meme-button-save" onClick={() => setSavepost(e => !e)}>
              {savedpost ? <FaBookmark/> :  <BiBookmark />}
            </span>
          </div>

          <p className="likes">{likedpost? likes+1: likes} likes</p>
          <p className="caption">
            <span>{name}</span>
            {caption}...
          </p>
          <p className="comment">View all {comments} comments</p>
          <div className="add-comment">
            <p>Add a comment...</p>
            <span>
              <GrEmoji />
            </span>
          </div>
        </div>

      {savedpost &&  <div className="saved-txt">
          <p>Your item has been saved.</p>
          <span>View Your saved posts</span>
        </div>}
      </div>
    );
}

export default Memeitem
