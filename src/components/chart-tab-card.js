import { Card, Menu } from "antd";
import { useEffect, useState } from "react";
import CircularChart from "./charts/circular";
import MatrixChart from "./charts/matrix";

const tabs = [
  {
    label: "Matrix",
    key: "matrix",
  },
  {
    label: "Circular",
    key: "circular",
  },
];


function ChartTabCard({ authors, rotation }) {
  const [current, setCurrent] = useState("matrix");
  const [names, setNames] = useState([]);
  const [matrix, setMatrix] = useState([]);

  const onClick = (evt) => {
    console.log("Tab clicked: ", evt.key);
    setCurrent(evt.key);
  };

  useEffect(() => {
    const names = authors.map((item) => item.name);
    setNames(names);
    setMatrix(rotation.matrix);
  }, [authors, rotation]);

  return (
    <Card className="card card__chart">
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={tabs}
      />
      {current === "circular" && (
        <CircularChart authors={names} matrix={matrix} />
      )}
      {current === "matrix" && <MatrixChart authors={names} matrix={matrix} />}
    </Card>
  );
}

export default ChartTabCard;
