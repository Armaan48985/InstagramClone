import React, { useState, useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { MdExplore } from "react-icons/md";
import { BsCameraReels } from "react-icons/bs";
import { BsCameraReelsFill } from "react-icons/bs";
import { PiMessengerLogoBold } from "react-icons/pi";
import { FaFacebookMessenger } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { FiPlus, FiPlusSquare } from "react-icons/fi";

export const sidebarData = [
  {
    name: "Home",
    activeLogo: <AiFillHome />,
    logo: <AiOutlineHome />,
    path: "home",
    id: 1,
  },
  {
    name: "Search",
    logo: <AiOutlineSearch />,
    activeLogo: <AiOutlineSearch />,
    click: "search-sidebar",
    id: 2,
  },
  {
    name: "Explore",
    logo: <MdOutlineExplore />,
    activeLogo: <MdExplore />,
    path: "explore",
    click: null,
    id: 3,
  },
  {
    name: "Reels",
    logo: <BsCameraReels />,
    activeLogo: <BsCameraReelsFill />,
    path: "reel",
    click: null,
    id: 4,
  },
  {
    name: "Messages",
    logo: <PiMessengerLogoBold />,
    activeLogo: <FaFacebookMessenger />,
    path: "message",
    click: null,
    id: 5,
  },
  {
    name: "Notifications",
    logo: <AiOutlineHeart />,
    activeLogo: <AiFillHeart />,
    click: "notification-sidebar",
    id: 6,
  },
  {
    name: "Create",
    logo: <FiPlusSquare />,
    activeLogo: <FiPlusSquare />,
    click: null,
    id: 7,
  },
];
