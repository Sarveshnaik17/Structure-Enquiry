import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div style={styles.nav}>
      <h2 style={styles.logo}>CharityCare</h2>

      {user && (
        <div>
          <Link to="/dashboard" style={styles.link}>Dashboard</Link>
          <Link to="/history" style={styles.link}>My Donations</Link>
          <button onClick={logout} style={styles.logout}>Logout</button>
        </div>
      )}
    </div>
  );
}

const styles = {
  nav: {
    background: "#1d2671",
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white"
  },
  logo: {
    margin: 0
  },
  link: {
    color: "white",
    marginRight: "20px",
    textDecoration: "none",
    fontWeight: "bold"
  },
  logout: {
    padding: "8px 14px",
    background: "#ff4d4d",
    border: "none",
    borderRadius: "6px",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold"
  }
};

export default Navbar;
