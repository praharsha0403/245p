import "./SidebarAndMain.css";

function SidebarAndMain() {
  return (
    <div className="container">
      <div className="sidebar">
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>
      </div>
      <div className="main">
        <h1>Hello, I'm Praharsha!</h1>
        <p>This is my custom React view layout. I build interactive UIs and love working with clean, scalable front-end architecture.</p>
      </div>
    </div>
  );
}

export default SidebarAndMain;
