import MenuItems from "./MenuITem";

const navConfig = [
    {
      title: "dashboard",
      path: "/dashboard",
      //icon: <DashboardOutlined />,
      children: [
        {
          title: "overview",
          path: "/dashboard/overview",
        },
        {
          title: "devices",
          path: "/dashboard/devices",
          children: [
            {
              title: "device info",
              path: "/dashboard/overview/info",
            },
            {
              title: "device support",
              path: "/dashboard/devices/support",
            },
          ],
        },
      ],
    },
    {
      title: "mib browser",
      path: "/mib",
     // icon: <Language />,
    },
    {
      title: "management",
      path: "/management",
      //icon: <DashboardCustomizeOutlined />,
      children: [
        {
          title: "devices",
          path: "/management/devices",
        },
        {
          title: "devices Configuration",
          path: "/management/deviceConfig",
        },
        {
          title: "users",
          path: "/management/users",
        },
      ],
    },
    {
      title: "inventory",
      path: "/inventory",
     // icon: <Inventory2Outlined />,
      children: [
        {
          title: "devices",
          path: "/inventory/devices",
        },
      ],
    },
    {
      title: "account",
      path: "/account",
     // icon: <ManageAccountsOutlined />,
    },
  ];

const NavBar = () => {
  return(<nav>
    <ul className="menus">
      {navConfig.map((menu, index) => {
        return <MenuItems items={menu} key={index} />;
      })}
    </ul>
  </nav>)
}

export default NavBar;