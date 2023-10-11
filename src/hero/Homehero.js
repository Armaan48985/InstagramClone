import React, { useEffect, useState } from "react";
import storyData from "../Homehero/storydata";
// import img from '../storyImg/images (1).jpeg'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import MemeData from "../Homehero/memedata";
import { BsThreeDots } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { BiBookmark } from "react-icons/bi";
import { FaBookmark } from "react-icons/fa";
import { GrEmoji } from "react-icons/gr";
import ppf from "../images/download.jpeg";
// import storydata from ''
import PostSetting from "../Homehero/postSetting";
import { GoAlert } from "react-icons/go";
import MemeItem from "../Homehero/Memeitem";
import Story from "../Homehero/Story";
import { Link } from "react-router-dom";

function Homehero() {
  const [story, setStory] = useState(0);
  const [showleftArrow, setShowleftArrow] = useState(false);
  const [showrightArrow, setShowrightArrow] = useState(true);
  const [showpostSetting, setShowpostSetting] = useState(false);
  // const [storydataArray, setStorydataArray] = useState(storyData);
  const [storySection, setStorySection] = useState(false);

  const storyRight = () => {
    // Update the style of the element
    const storiesSection = document.querySelector(".stories-section");
    if (storiesSection) {
      storiesSection.style.transform = `translateX(${story}px)`;
    }
    if (story < 0) {
      setShowleftArrow(true);
    } else {
      setShowleftArrow(false);
    }
    if (story < -1300) {
      setShowrightArrow(false);
    } else {
      setShowrightArrow(true);
    }
  };

  const leftarrowHandle = () => {
    setStory(story < 0 && story >= -1500 ? story + 660 : story);
  };

  const rightarrowHandle = () => {
    setStory(story <= 0 && story > -1500 ? story - 660 : story);
  };

  const openpostSetting = () => {
    setShowpostSetting(true);
  };
  const closepostSetting = () => {
    setShowpostSetting(false);
  };

  useEffect(() => {
    storyRight();
  }, [story]);

  // const addToEnd = () => {
  //   const newArray = [...storydataArray, 4];
  //   setStorydataArray(newArray);
  // };

  // const hour = new Date().getHours()

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     Notification.requestPermission().then(perm => {
  //       if(perm == "granted"){
  //        <div className="bg-red">
  //        {  new Notification("You Liked this Post", {
  //         body: "hello guys",
  //         icon: <GoAlert/>
  //       })}
  //        </div>
  //       }
  //     })
  //   }, 6000000)

  //   // return clearTimeout(timer)
  // }, [])

  return (
    <div className="home-container">
      <div className="home-main">
        <div className="stories-section">
          {storyData.map(({ name, imageUrl }) => {
            return (
              <div className="story" onClick={() => setStorySection(true)}>
                <img src={imageUrl} alt={name} />
                <p>{name.length > 7 ? name.substring(0, 7) + "..." : name}</p>
              </div>
            );
          })}
        </div>

        {showleftArrow && (
          <span className="left-arrow" onClick={leftarrowHandle}>
            <MdOutlineKeyboardArrowLeft />
          </span>
        )}
        {showrightArrow && (
          <span className="right-arrow" onClick={rightarrowHandle}>
            <MdOutlineKeyboardArrowRight />
          </span>
        )}

        <div className="memes-section">
          {MemeData.map((data, index) => (
            <MemeItem
              key={index}
              {...data}
              setShowpostSetting={setShowpostSetting}
            />
          ))}
        </div>
      </div>
      <div className="suggestion-section">
        <div className="suggestion-myprofile">
          <div className="flex">
            <img src={ppf} />
            <div>
              <p>_armaan_23___</p>
              <span>Armaan.</span>
            </div>
          </div>
          <a className="swtich-profile">Switch</a>
        </div>

        <div className="suggestion-header">
          <p>Suggested for you</p>
          <span>See all</span>
        </div>

        {storyData.slice(0, 5).map(({ name, imageUrl }) => {
          return (
            <div className="suggestion-container">
              <div className="flex">
                <img src={imageUrl} />
                <div>
                  <p>{name}</p>
                  <span>followed by ....</span>
                </div>
              </div>

              <p className="follow-btn">Follow</p>
            </div>
          );
        })}
      </div>
      {showpostSetting && (
        <PostSetting setShowpostSetting={setShowpostSetting} />
      )}
        {storySection && (
        <Story setStorySection={setStorySection}/>
      )}
    </div>
  );
}

export default Homehero;
