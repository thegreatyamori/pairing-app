import { Card, Menu } from "antd";
import { useEffect, useState } from "react";
import { getAllMembers } from "../services/member.service";
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
const matrix = [
    { author: "john", coAuthor: "kweller", times: 1 },
    { author: "gus", coAuthor: "jipson", times: 1 }
];

function ChartTabCard({authors, rotation}) {
  const [current, setCurrent] = useState("circular");
  const [names, setNames] = useState([]);

  const onClick = (evt) => {
    console.log("Tab clicked: ", evt.key);
    setCurrent(evt.key);
  };

  useEffect(() => {
    const names = authors.map(item => item.name);
    setNames(names);
  }, [authors]);

  return (
    <Card className="card card__chart">
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={tabs}
      />
      {current === "circular" ? (
        <CircularChart authors={names} matrix={matrix} />
      ) : (
        <MatrixChart authors={names} matrix={matrix} />
      )}
    </Card>
  );
}

export default ChartTabCard;
