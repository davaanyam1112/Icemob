import React from "react";
import {
  UserOutlined,
  LoginOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import { useRouter } from "next/router";

const HeaderMenu = () => {
  const router = useRouter();
  return (
    <nav className="header">
      <div>
        <img
          src="assets/images/logo.png"
          alt="logo"
          width={70}
          height={70}
          className="header-logo"
          onClick={() => router.push("./home")}
        />
      </div>
      <ul className=" navbar-right">
        <li onClick={() => router.push("./product")}>Бүтээгдэхүүн</li>
        <li> Бидний тухай</li>
        <li onClick={() => router.push("./information")}> Мэдээ мэдээлэл</li>
        <li onClick={() => router.push("./contact")}> Холбогдох</li>
        <li>
          <ShoppingCartOutlined />
        </li>
        <li>
          <Dropdown placement="bottomRight">
            <UserOutlined />
          </Dropdown>
        </li>
      </ul>
    </nav>
  );
};
export default HeaderMenu;