function Nav(props) {
  return (
    <nav className="main-nav">
      <ul>
        <li>Home {props.color}</li>
        <li>Articles</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Nav;