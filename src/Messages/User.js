import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import Person1 from "./user1";
import Person2 from "./user2";
import Person3 from "./user3";
import Person4 from "./user4";
import Person5 from "./user5";
import Person6 from "./user6";
import Person7 from "./user7";
import Person8 from "./user8";
import Person9 from "./user9";
import Person10 from "./user10";
import Person11 from "./user11";
import Person12 from "./user12";
import Person13 from "./user13";
import UserMain from "./UserMain";


function User() {
 
  return (
    
       <Routes>
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
        </Routes>
  
  );
}

export default User;
