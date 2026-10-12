import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  const list = localStorage.getItem("list");
  return list ? JSON.parse(list) : [];
};

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      showAlert(true, "danger", "please enter values");
    } else if (isEditing) {
      setList(list.map((item) => item.id === editID ? { ...item, title: name } : item));
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "item edited");
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
      showAlert(true, "success", "task added to the list");
    }
  };

  const clearList = () => {
    setList([]);
    setName("");
    setEditID(null);
    setIsEditing(false);
    showAlert(true, "danger", "empty list");
  };

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
    if (id === editID) {
      setName("");
      setEditID(null);
      setIsEditing(false);
    }
    showAlert(true, "danger", "item removed");
  };

  const editItem = (id) => {
    const item = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(item.title);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  useEffect(() => {
    if (!alert.show) return;
    const timeout = setTimeout(() => {
      setAlert({ show: false, msg: "", type: "" });
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} />}
        <h3>TODO list</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. pass the exam"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>clear items</button>
        </div>
      )}
    </section>
  );
}

export default App;
