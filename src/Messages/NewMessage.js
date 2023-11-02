import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import dummyData from "../sidebar/SearchSidebarData";

function NewMessage({ closeNewMsgBox }) {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([])
  const [filteredNames, setFilteredNames] = useState([]);

  // const handleInputChange = (e) => {
  //   const searchValue = e.target.value;
  //   setInputValue(searchValue);

  //   // Filter names based on the searchValue
  //   const filtered = dummyData.filter((person) =>
  //     person.name.includes(searchValue)
  //   );

  //   setFilteredNames(filtered);
  // };

  const fetchData = (value) => {
    const results = dummyData.filter((user) => {
      return (
        value &&
        user &&
        user.profileName &&
        user.profileName.toLowerCase().includes(value.toLowerCase())
      );
    });
    setResults(results);

    console.log(results)
  };

  
  const handleChange = (value) => {
    console.log(value)
    setInput(value);
    fetchData(value);
  };
  
  // const results = dummyData.filter((user) => {
  //         return (
  //           value &&
  //           user &&
  //           user.name &&
  //           user.name.toLowerCase().includes(value)
  //         );
  //       });
  //       setResults(results);


  return (
    <div className="postsetting-container">
      <div className="comment-section new-msg-box">
        <div className="new-msg-header">
          <h5>New Message</h5>
        </div>

        <div className="new-msg-input-container">
          <p>To: </p>
          <input
            placeholder="Search..."
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>

        <div className="new-msg-result-section">
          {results.map((e, i) => {
            return (
                <div className={true ? "prsn-msg-container search-result" : "prsn-msg-container"}>
                    <div className="flex">
                        <img src={e.imageUrl} />
                          <div>
                            <h4>{e.profileName}</h4>
                            <div className="msg-active-section">
                              <p>{e.username}</p>
                            </div>
                          </div>
                    </div>

                  
                    <div class="container">
                        <div class="round">
                          <input type="checkbox" id="checkbox" />
                          <label for="checkbox"></label>
                        </div>
                    </div>
                </div>
          )
          })}
        </div>

        <button>Chat</button>

        <span
          className="close-story-icon comment-close new-msg-close"
          onClick={closeNewMsgBox}
        >
          <RxCross1 />
        </span>
      </div>
      <div className="overlay" onClick={closeNewMsgBox}></div>
    </div>
  );
}

export default NewMessage;
