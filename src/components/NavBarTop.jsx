import "./NavBarTop.css";

function NavBarTop({ children }) {
  return (
    <nav className="navbar-container">
      <div className="navbar-content">{children}</div>
    </nav>
  );
}

export default NavBarTop;
