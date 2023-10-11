import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import Home from "./hero/Homehero";
import Explore from "./hero/Explorehero";
import Messages from "./hero/Messagehero";
import Profile from "./hero/Profilehero";
import Reels from "./hero/Reelshero";
import Sidebar from "./sidebar";


export default function App() {
  return (
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="home" element={<Home />}/>
          <Route path="explore" element={<Explore />} />
          <Route path="message" element={<Messages />} />
          <Route path="profile" element={<Profile />} />
          <Route path="reel" element={<Reels />} />
      </Routes>
  );
}