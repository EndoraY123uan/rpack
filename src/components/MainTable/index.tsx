import React, { FC, ReactNode } from "react";

import { Table, Input } from "antd";
import { TableProps } from "antd/lib/table";

import styles from "./index.less";

const { Search } = Input;

interface Props {
  columns: object[];
  dataSource: object[];
  searchProps?: ISearchProps;
}

interface ISearchProps {
  placeholder: string;
  onSearch: (value: any) => void;
  enterButton?: ReactNode;
  enterText?: string;
}

const MainTable: FC<Props & TableProps<any>> = ({
  columns,
  dataSource,
  searchProps,
}) => {
  const searchContent = () => {
    if (searchProps) {
      const { placeholder, onSearch, enterText } = searchProps;
      return (
        <div>
          <Search
            className={styles.search}
            placeholder={placeholder}
            enterButton={enterText ? enterText : "搜索"}
            onSearch={onSearch}
          />
        </div>
      );
    }
  };

  return (
    <div className={styles.mainTable}>
      <div className={styles.tableOperate}>
        <div className={styles.leftItem}></div>
        <div className={styles.rightItem}>{searchProps && searchContent()}</div>
      </div>
      <div className={styles.tableHeader}></div>
      <Table
        columns={columns}
        bordered
        dataSource={dataSource}
        rowClassName={(record, index) => {
          console.log("table index", index);
          return index % 2 === 0 ? styles.even : styles.odd;
        }}
      />
    </div>
  );
};

export default MainTable;
