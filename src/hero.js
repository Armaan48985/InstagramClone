import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import Home from "./hero/Homehero";
import Explore from "./hero/Explorehero";
import Messages from "./hero/Messagehero";
import Profile from "./hero/Profilehero";
import Reels from "./hero/Reelshero";
import Sidebar from "./sidebar";
import Display from "./Messages/display";
import User from "./Messages/User";
import Person1 from "./Messages/user1";
import Person2 from "./Messages/user2";
import Person3 from "./Messages/user3";
import Person4 from "./Messages/user4";
import Person5 from "./Messages/user5";
import Person6 from "./Messages/user6";
import Person7 from "./Messages/user7";
import Person8 from "./Messages/user8";
import Person9 from "./Messages/user9";
import Person10 from "./Messages/user10";
import Person11 from "./Messages/user11";
import Person12 from "./Messages/user12";
import Person13 from "./Messages/user13";

export default function App() {
  return (
     <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="home" element={<Home />}/>
          <Route path="explore" element={<Explore />} />
          <Route path="message" element={<Messages />}>
            <Route path="display" element={<Display />} />
            <Route path="user" element={<User />}>
              <Route path="person1" element={<Person1 />} />
              <Route path="person2" element={<Person2 />} />
              <Route path="person3" element={<Person3 />} />
              <Route path="person4" element={<Person4 />} />
              <Route path="person5" element={<Person5 />} />
              <Route path="person6" element={<Person6 />} />
              <Route path="person7" element={<Person7 />} />
              <Route path="person8" element={<Person8 />} />
              <Route path="person9" element={<Person9 />} />
              <Route path="person10" element={<Person10 />} />
              <Route path="person11" element={<Person11 />} />
              <Route path="person12" element={<Person12 />} />
              <Route path="person13" element={<Person13 />} />
            </Route>
          </Route>
          <Route path="profile" element={<Profile />} />
          <Route path="reel" element={<Reels />} />
      </Routes>
  );
}