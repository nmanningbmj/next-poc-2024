import { loggedOutNav } from "../../constants";

export const Navbar = () => {
  return (
    <div className="nav">
      <div className="container">
        <div className="navbar">
          {loggedOutNav.map((navItem) => (
            <div key={navItem.link} className="nav-item">
              <a href={navItem.link}>{navItem.title}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
