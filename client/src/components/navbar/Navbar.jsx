import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  //   const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/home" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo" style={{ fontSize: "30px" }}>
            RioBooking
          </span>
        </Link>
        {/* {user ? user.username : ( */}
        <div className="navItems gap-3 flex">
          <Link to="/register">
            <button
              style={{ color: "#003580" }}
              className="py-1.5 px-4 border-none bg-white cursor-pointer btn"
            >
              Đăng ký
            </button>
          </Link>
          <Link to="/login">
            <button
              style={{ color: "#003580" }}
              className="px-2 py-1.5 border-none bg-white cursor-pointer btn"
            >
              Đăng nhập
            </button>
          </Link>
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default Navbar;
