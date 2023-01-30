import { useEffect, useState } from "react";
import { TabularChart } from "pairing-matrix-charts";

function MatrixChart(props) {
  const [tabularChart, setTabularChart] = useState(new TabularChart());
  const defaultOptions = {
    height: 600,
    width: 600,
  };

  useEffect(() => {
    const { authors, matrix } = props;
    tabularChart.createChart(
      "#tabular-pairing-chart",
      authors,
      matrix,
      defaultOptions.width,
      defaultOptions.height
    );
  }, [props]);

  return <div id="tabular-pairing-chart" />;
}

export default MatrixChart;
