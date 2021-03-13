import React, { Component } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = (props) => {
  const { sortColumn, columns, onSort, data } = props;
  return (
    <table className="table">
      <TableHeader sortColumn={sortColumn} columns={columns} onSort={onSort} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
