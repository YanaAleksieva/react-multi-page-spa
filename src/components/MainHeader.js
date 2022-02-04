import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            {/* <a href="/welcome">... - if we use this we are making a new request every time when clicked, and this is not the goal because of we use states - we will lose our info and we won't be reactive
             */}
            <Link to="/welcome">Welcome</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
