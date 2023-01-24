import Dropdown from './Dropdown';

const MenuItems = ({ items }) => {
  return (
    <li className="menu-items">
      {items.children ? (
        <>
          <button type="button" aria-haspopup="menu">
            {items.title}{' '}
          </button>
          <Dropdown submenus={items.children} />
        </>
      ) : (
        <a href={items.path}>{items.title}</a>
      )}
    </li>
  );
};

export default MenuItems;