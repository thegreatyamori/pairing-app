import { useEffect, useState } from "react";
import { TabularChart } from "pairing-matrix-charts";

function MatrixChart(props) {
  const [tabularChart, setTabularChart] = useState(new TabularChart());
  const defaultOptions = {
    height: 600,
    width: 600,
  };
  const renderPairingMatrix = () => {
    const { authors, matrix } = props;
    tabularChart.createChart(
      "#tabular-pairing-chart",
      authors,
      matrix,
      defaultOptions.width,
      defaultOptions.height
    );
  };

  useEffect(() => renderPairingMatrix(), []);
  useEffect(() => renderPairingMatrix(), [props]);

  return <div id="tabular-pairing-chart" />;
}

export default MatrixChart;
