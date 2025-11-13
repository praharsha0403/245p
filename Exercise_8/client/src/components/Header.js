import "./Header.css";

function Header() {
  return (
    <div className="header">
      <a href="#brand" className="logo">MyBrand</a>
      <div className="headerRight">
        <a className="active" href="#home">Home</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default Header;
