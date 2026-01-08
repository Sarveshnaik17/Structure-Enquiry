import { useParams } from "react-router-dom";
import { useState } from "react";

function Donate() {
  const { type } = useParams();
  const [amount, setAmount] = useState("");

  const donate = async () => {
    const user = localStorage.getItem("user");

    await fetch("http://localhost:5000/donation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        donorName: user,
        amount: Number(amount),
        cause: type
      })
    });

    alert("Thank you for your donation ❤️");
    setAmount("");
  };

  return (
    <div className="page-center">
      <div className="card">
        <h2>{type} Donation</h2>

        <input
          className="input"
          type="number"
          placeholder="Enter amount (₹)"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />

        <button className="btn" onClick={donate}>Donate Now</button>
      </div>
    </div>
  );
}

export default Donate;
