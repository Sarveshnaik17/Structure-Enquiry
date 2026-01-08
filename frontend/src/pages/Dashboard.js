import { Link } from "react-router-dom";

const causes = [
  { name: "Education", icon: "🎓" },
  { name: "Food & Hunger", icon: "🍱" },
  { name: "Healthcare", icon: "🏥" },
  { name: "Natural Disasters", icon: "🌪️" },
  { name: "Women Empowerment", icon: "👩‍🦱" },
  { name: "Animal Welfare", icon: "🐄" },
  { name: "Rural Development", icon: "🌾" }
];

function Dashboard() {
  return (
    <div style={{ padding: "40px", textAlign: "center", color: "white" }}>
      <h1>Select Donation Cause</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "30px",
          marginTop: "40px"
        }}
      >
        {causes.map(c => (
          <Link
            key={c.name}
            to={`/donate/${c.name}`}
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                background: "#ffffff",
                color: "#000",
                padding: "25px",
                borderRadius: "20px",
                boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
                height: "220px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                transition: "transform 0.2s"
              }}
            >
              {/* ICON CONTAINER */}
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "40px",
                  marginBottom: "15px"
                }}
              >
                {c.icon}
              </div>

              <h3 style={{ margin: 0, textAlign: "center" }}>{c.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
