import React from "react"
import { Layout} from 'antd';
import {PhoneOutlined,MailOutlined,CompassOutlined} from '@ant-design/icons'
const {Footer} = Layout;
const MobFooter = () =>{
    return(
        <div className="footer">
          <div className="footer-top">
            <img src="assets/images/logo.png"/>
            <div>
                <h3 > Туслах цэс</h3>
                <p>Бидний тухай</p>
                <p>Мэдээ мэдээлэл</p>
                <p>Түгээмэл асуултууд</p>
                <p>Холбоо барих</p>
            </div>
            <div>
                <h3>Холбоо барих</h3>
                <p><PhoneOutlined />  Утас: 80177190</p>
                <p><CompassOutlined />  Хаяг: Улсын их дэлгүүрээс Peacemall явах зам дагуу ICE MOB records</p>
                <p><MailOutlined />  И-мэйл хаяг: icemob.mongol@gmail.com</p>
            </div>
        </div>
        <Footer className="footer-bottom">
            <p className="copyright">COPYRIGHT ©   2022   ICEMOB</p>
        </Footer>
        </div>
      
    )
}
export default MobFooter;