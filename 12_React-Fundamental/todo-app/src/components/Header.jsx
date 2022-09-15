function Header(props) {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">{props.name}</span>
      </div>
    </nav>
  );
}

export default Header;
