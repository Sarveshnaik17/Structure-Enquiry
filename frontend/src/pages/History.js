import { useEffect, useState } from "react";

function History() {
  const [donations, setDonations] = useState([]);
  const user = localStorage.getItem("user");

  useEffect(() => {
    fetch("http://localhost:5000/donation")
      .then(res => res.json())
      .then(data =>
        setDonations(data.filter(d => d.donorName === user))
      );
  }, [user]);

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h2>My Donation History</h2>

      {donations.length === 0 && (
        <p>No donations found for your account.</p>
      )}

      {donations.map(d => (
        <div
          key={d._id}
          style={{
            background: "white",
            color: "black",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "10px"
          }}
        >
          <strong>₹{d.amount}</strong> — {d.cause}
          <br />
          <small>{new Date(d.date).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}

export default History;
