import React, { useState } from "react";

function Todolist() {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);

  function addActivity() {
    if (activity.trim()) {
      setListData((prevList) => [...prevList, activity]);
      setActivity("");
    }
  }

  function removeActivity(index) {
    setListData((prevList) => prevList.filter((_, id) => id !== index));
  }

  function removeAll() {
    setListData([]);
  }

  return (
    <div className="container">
      <div className="header">TODO LIST</div>
      <input
        type="text"
        placeholder="Add Activity"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      />
      <button onClick={addActivity}>Add</button>
      <p className="list-heading">Here is your List</p>
      <ul className="list-container">
        {listData.length > 0 &&
          listData.map((data, i) => (
            <li key={i} className="list-item">
              <span>{data}</span>
              <button onClick={() => removeActivity(i)}>Remove</button>
            </li>
          ))}
      </ul>
      {listData.length > 0 && <button onClick={removeAll}>Remove All</button>}
    </div>
  );
}

export default Todolist;
