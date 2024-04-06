import React from "react";
import { Link } from "react-router-dom";

import Container from "@/components/Container";
import MainTable from "@/components/MainTable";

const Test1 = (props) => {
  console.log("这是test页面");

  const dataSource = [
    {
      name: "yuan",
      sex: "女",
      position: "开发",
    },
    {
      name: "yuan",
      sex: "女",
      position: "开发",
    },
    {
      name: "yuan",
      sex: "女",
      position: "开发",
    },
    {
      name: "yuan",
      sex: "女",
      position: "开发",
    },
  ];

  const columns = [
    {
      title: "名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "性别",
      dataIndex: "sex",
      key: "sex",
    },
    {
      title: "职位",
      dataIndex: "position",
      key: "position",
    },
  ];

  return (
    <Container>
      {props.children}
      {/* <MainTable
        columns={columns}
        dataSource={dataSource}
        searchProps={{
          placeholder: "请输入员工姓名",
          onSearch: () => {},
        }}
      /> */}
    </Container>
  );
};

export default Test1;
