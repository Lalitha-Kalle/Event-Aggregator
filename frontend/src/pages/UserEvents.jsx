// src/pages/UserEvents.jsx
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function UserEvents() {
  const [events, setEvents] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/user/events")
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);

  const markInterest = async (id) => {
    await fetch(`http://localhost:5000/api/v1/user/interest/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user?.token}`
      }
    });
    alert("Interest marked!");
  };

  return (
    <div>
      <h2>All Events</h2>
      {events.map(e => (
        <div key={e._id}>
          <h3>{e.title}</h3>
          <button onClick={() => markInterest(e._id)}>I'm Interested</button>
        </div>
      ))}
    </div>
  );
}
