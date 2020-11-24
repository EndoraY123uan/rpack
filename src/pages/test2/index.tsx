import React from "react";
import { Link } from "react-router-dom";
import { DatePicker, Space } from "antd";

import styles from "./index.less";

const Test2 = (props) => {
  function onChange(date: any, dateString: any) {
    console.log(
      "%c 🍪 dateString: ",
      "font-size:20px;background-color: #F5CE50;color:#fff;",
      dateString
    );
    console.log(
      "%c 🍈 date: ",
      "font-size:20px;background-color: #33A5FF;color:#fff;",
      date
    );

    //
  }
  return (
    <div className={styles.content}>
      {/* <Space direction="vertical">
        <DatePicker onChange={onChange} />
        <DatePicker onChange={onChange} picker="week" />
        <DatePicker onChange={onChange} picker="month" />
        <DatePicker onChange={onChange} picker="quarter" />
        <DatePicker onChange={onChange} picker="year" />
      </Space> */}
      {props.children}
    </div>
  );
};

export default Test2;
