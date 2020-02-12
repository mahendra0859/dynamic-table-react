import React from "react";
import "./style.css";

const renderTableHeader = header =>
  header.map((key, index) => <th key={index}>{key.toUpperCase()}</th>);

const renderTableData = body =>
  body.map((ele, index) => {
    let keys = Object.keys(ele);
    return (
      <tr key={`table-row-${index}-${Math.random()}`}>
        {keys.map(item => (
          <td key={`table-data-${index}-${Math.random()}`}>{ele[item]}</td>
        ))}
      </tr>
    );
  });

const Table = ({ data }) => (
  <table className="dynamic-table">
    <tbody>
      <tr>{renderTableHeader(Object.keys(data[0]))}</tr>
      {renderTableData(data)}
    </tbody>
  </table>
);
export default Table;
