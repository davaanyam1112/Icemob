import { Tabs } from "antd";
import React from "react";
import { Tab1 } from "./components/Tab1";
import { Tab2 } from "./components/Tab2";
import { Tab3 } from "./components/Tab3";
const ProductListScene = () => {
  return (
    <>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Пянз" key="1">
          <Tab1 />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Пянзны хэрэгсэл" key="2">
          <Tab2 />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Пянз тоглуулагч" key="3">
          <Tab3 />
        </Tabs.TabPane>
      </Tabs>
    </>
  );
};
export default ProductListScene;
