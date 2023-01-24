const Dropdown = ({ submenus }) => {
    return (
      <ul className="dropdown">
        {submenus.map((submenu, index) => (
          <li key={index} className="menu-items">
            <a href={submenu.path}>{submenu.title}</a>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Dropdown;