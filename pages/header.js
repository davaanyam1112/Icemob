
import React from "react"
import Link from "next/link";
import { UserOutlined ,LoginOutlined,ShoppingCartOutlined} from '@ant-design/icons'
import {Dropdown , Menu } from 'antd'
import { useRouter } from "next/router";

const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                <ShoppingCartOutlined /> Миний сагс
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
               <LoginOutlined /> Нэвтрэх
            </a>
          ),
        }
      ]}
    />
  );
const HeaderMenu = () =>{
    const router = useRouter();
    return(
      <nav className="header">
        <div>
          <img src="assets/images/logo.png" alt="logo" width={70} height = {70} className = "header-logo" onClick={() => router.push("./home")}/>
        
        </div> 
        <ul className=" navbar-right">
          <li onClick = {()=> router.push("./product")}>
            Бүтээгдэхүүн
         
          </li>
          <li> Бидний тухай</li>
          <li onClick = {() => router.push('./information')}>  Мэдээ мэдээлэл</li>
          <li onClick={() => router.push('./contact')}> Холбогдох</li>
          <li><ShoppingCartOutlined/></li>
          <li><Dropdown  overlay={menu} placement="bottomRight">          
                     <UserOutlined  /> 
           </Dropdown></li>
    
        </ul>
      </nav>
     
        
        
    );

}
export default HeaderMenu;