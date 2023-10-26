import React, { useEffect, useRef, useState } from "react";
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
    setShowpostSetting,
    setComment
  }){
    const [savedpost, setSavepost] = useState(false)
    const [likedpost, setLikedpost] = useState(false)
    const [likedComment, setLikedComment] = useState(false)
    const [postStyle, setPostStyle] = useState({})
    const [addedPostStyle, setAddedPostStyle] = useState({})
    const [posttxtt, setPosttxtt] = useState('')
    const [puttedcomment, setPuttedcomment] = useState('')

    const showPostTxt = (e) => {
      // console.log(posttxtt)
      if(posttxtt !== ''){
        // setPostStyle({display: "none"})
        // console.log("empty")
        // console.log("working") 
        setPostStyle({display: "block"})
      } 
      setPosttxtt(e.target.value)

    }


    useEffect(() => {
      // console.log(posttxtt)
      if(posttxtt == ''){
        // setPostStyle({display: "none"})
        // console.log("empty")
        // console.log("working") 
        
        setPostStyle({display: "none"})

      }   
    }, [posttxtt])


    const showAddedPost = (event) => {
      // document.createElement(div)
      if(event.type == 'click'){
        setAddedPostStyle({display: "flex"})
      setPuttedcomment(posttxtt)
      setPosttxtt('')
      }
      
    }
    
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        // Call your like function when the Enter key is pressed
        setAddedPostStyle({display: "flex"})
        setPuttedcomment(posttxtt)
        setPosttxtt('')
      }
    }

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
              <span className="meme-button-comment" onClick={() => setComment(true)}>
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

          <div className="added-comment" style={addedPostStyle}>
              <div>
              <h4>_armaan_23___</h4>
                <p>{puttedcomment}</p>
              </div>
                <span onClick={() => setLikedComment(e => !e)}>
                {likedComment ? <img className="red-heart-comment" src={redHeart}/> :  <FaRegHeart />}
              </span>
            </div>

          <div className="add-comment">
            <input className="comment-input"  onKeyDown={handleKeyPress} placeholder="Add a comment..." value={posttxtt} type="text" onChange={showPostTxt}/>
            
          

            <span className="flex">
              <p className="comment-post-txt" style={postStyle} onClick={showAddedPost}>Post</p>
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
