import React, { useEffect, useState } from "react";

export function Bikin() {
  const [data, setData] = useState([]);
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks? JSON.parse(savedTasks) : [];
  });

  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [alamat, setAlamat] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!nama ||!email ||!phone ||!alamat) {
      alert("Harus di isi terlebih dahulu");
      return;
    }

    const newTask = {
      id: Date.now(),
      nama,
      article: `${email}, ${phone}, ${alamat}`,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setNama("");
    setEmail("");
    setPhone("");
    setAlamat("");
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id!== id);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1 style={{ paddingLeft: "3%", display: "flex", justifyContent: "row" }}>
        My Register
      </h1>

      <div style={{ margin: "20px" }}>
        <label>
          
          <input
            type="text"
            placeholder="Nama"
            value={nama}
            onChange={(event) => setNama(event.target.value)}
            required
            style={{
              borderRadius: "10px",
              padding: "15px",
              width: "100%",
            }}
          />
        </label>
      </div>

      <div style={{ margin: "20px" }}>
        <label>
          
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            style={{
              borderRadius: "10px",
              padding: "15px",
              width: "100%",
            }}
          />
        </label>
      </div>

      <div style={{ margin: "20px" }}>
        <label>
          
          <input
            type="number"
            placeholder="Phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
            style={{
              borderRadius: "10px",
              padding: "15px",
              width: "100%",
            }}
          />
        </label>
      </div>

      <div style={{ margin: "20px" }}>
        <label>
          
          <input
            type="text"
            placeholder="Alamat"
            value={alamat}
            onChange={(event) => setAlamat(event.target.value)}
            required
            style={{
              borderRadius: "10px",
              padding: "15px",
              width: "100%",
            }}
          />
        </label>
      </div>

      <button
        onClick={addTask}
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "10px",
          margin: "20px",
          width: "100%",
        }}
      >
        Add Post
      </button>

      {tasks.map((task) => (
        <div
          key={task.id}
          style={{
            backgroundColor: "white",
            border: "1px solid black",
            margin: "20px",
            padding: "10px",
          }}
        >
          <h3>{task.nama}</h3>
          <p>{task.article}</p>
          <button
            onClick={() => deleteTask(task.id)}
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "5px 10px",
              border: "1px solid black",
              borderRadius: "5px",
              marginTop: "10px",
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}