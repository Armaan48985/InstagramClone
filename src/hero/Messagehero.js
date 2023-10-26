import React, { useState, useEffect } from "react";
import MessageSidebar from "../sidebar/messageSidebar";
import Display from "../Messages/display";
import User from "../Messages/User";
import Person1 from "../Messages/user1";
import Person2 from "../Messages/user2";
import Person3 from "../Messages/user3";
import Person4 from "../Messages/user4";
import Person5 from "../Messages/user5";
import Person6 from "../Messages/user6";
import Person7 from "../Messages/user7";
import Person8 from "../Messages/user8";
import Person9 from "../Messages/user9";
import Person10 from "../Messages/user10";

import {
  BrowserRouter,
  Routes,
  Route,
  redirect,
  Outlet,
} from "react-router-dom";

function Messagehero() {
  return (
    <>
      <MessageSidebar /> {/* Your MessageSidebar component */}
      <Routes>
        <Route index element={<Display />} />{" "}
        {/* The index route for Display component */}
        <Route path="user" element={<User />}></Route>
        <Route path="..."></Route>
      </Routes>
      <Outlet />
    </>
  );
}

export default Messagehero;
