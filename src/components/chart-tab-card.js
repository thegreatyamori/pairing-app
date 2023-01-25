import { Card, Menu } from "antd";
import { useState } from "react";
import CircularChart from "./charts/circular";
import MatrixChart from "./charts/matrix";

const tabs = [
  {
    label: "Circular",
    key: "circular",
  },
  {
    label: "Matrix",
    key: "matrix",
  },
];
const authors = ["john", "kweller", "jerson", "gus", "jipson", "gabo", "jeff"];
const matrix = [
    { author: "john", coAuthor: "kweller", times: 1 },
    { author: "gus", coAuthor: "jipson", times: 1 }
];

function ChartTabCard() {
  const [current, setCurrent] = useState("circular");

  const onClick = (evt) => {
    console.log("Tab clicked: ", evt.key);
    setCurrent(evt.key);
  };

  return (
    <Card className="card card__chart">
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={tabs}
      />
      {current === "circular" ? (
        <CircularChart authors={authors} matrix={matrix} />
      ) : (
        <MatrixChart authors={authors} matrix={matrix} />
      )}
    </Card>
  );
}

export default ChartTabCard;
