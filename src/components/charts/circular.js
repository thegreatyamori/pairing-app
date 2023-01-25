import { useEffect, useState } from "react";
import { ChordChart } from "pairing-matrix-charts";

function CircularChart(props) {
    const [chordChart, setChordChart] = useState(new ChordChart());
    const defaultOptions = {
        height: 600,
        width: 600,
    };
    const renderPairingChord = () => {
        const { authors, matrix } = props;
        chordChart.createChart(
            "#chord-pairing-chart",
            authors,
            matrix,
            defaultOptions.width,
            defaultOptions.height
        );
    };

    useEffect(() => renderPairingChord(), []);
    useEffect(() => renderPairingChord(), [props]);

    return <div id="chord-pairing-chart" />;
}

export default CircularChart;
