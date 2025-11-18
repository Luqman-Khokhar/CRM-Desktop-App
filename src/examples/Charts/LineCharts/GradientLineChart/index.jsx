import { useRef, useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import gradientChartLine from "assets/theme/functions/gradientChartLine";
import colors from "assets/theme/base/colors";
import configs from "./configs"; // updated configs file

// Chart.js imports and registration
import {
  Chart as ChartJS,
  CategoryScale, // x-axis "category"
  LinearScale,   // y-axis "linear"
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function GradientLineChart({ title, description, height, chart }) {
  const chartRef = useRef(null);

  const [chartData, setChartData] = useState({
    data: { labels: [], datasets: [] },
    options: {}
  });

  const { data, options } = chartData;

  useEffect(() => {
    if (!chart) return;

    const chartDatasets = chart.datasets?.map((dataset) => ({
      ...dataset,
      tension: 0.4,
      pointRadius: 0,
      borderWidth: 3,
      borderColor: colors[dataset.color]?.main || colors.dark.main,
      fill: true,
      maxBarThickness: 6,
      backgroundColor: gradientChartLine(
        chartRef.current?.children[0],
        colors[dataset.color]?.main || colors.dark.main
      ),
    })) || [];

    // Safe config: always provides labels and datasets
    setChartData(configs(chart.labels || [], chartDatasets));
  }, [chart]);

  const renderChart = (
    <SoftBox p={2}>
      {title || description ? (
        <SoftBox px={description ? 1 : 0} pt={description ? 1 : 0}>
          {title && (
            <SoftBox mb={1}>
              <SoftTypography variant="h6">{title}</SoftTypography>
            </SoftBox>
          )}
          {description && (
            <SoftBox mb={2}>
              <SoftTypography component="div" variant="button" fontWeight="regular" color="text">
                {description}
              </SoftTypography>
            </SoftBox>
          )}
        </SoftBox>
      ) : null}
      {useMemo(
        () => (
          <SoftBox ref={chartRef} sx={{ height }}>
            {data.labels.length > 0 && <Line data={data} options={options} />}
          </SoftBox>
        ),
        [chartData, height]
      )}
    </SoftBox>
  );

  return title || description ? <Card>{renderChart}</Card> : renderChart;
}

GradientLineChart.defaultProps = {
  title: "",
  description: "",
  height: "19.125rem",
};

GradientLineChart.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  chart: PropTypes.shape({
    labels: PropTypes.array.isRequired,
    datasets: PropTypes.array.isRequired
  }).isRequired,
};

export default GradientLineChart;
