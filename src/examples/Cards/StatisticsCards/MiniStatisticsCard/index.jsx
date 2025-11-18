import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function MiniStatisticsCard({ bgColor, title, count, percentage, icon }) {
  return (
    <Card elevation={3}>
      <SoftBox bgColor={bgColor} variant="gradient" borderRadius="md">
        <SoftBox p={2}>
          <Grid container alignItems="center" spacing={2}>
            {/* Icon */}
            {icon && (
              <Grid item>
                <SoftBox
                  variant="gradient"
                  bgColor={bgColor === "white" ? icon.color : "white"}
                  color={bgColor === "white" ? "white" : "dark"} // keep your icon colors
                  width="3rem"
                  height="3rem"
                  borderRadius="md"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  shadow="md"
                >
                  <Icon fontSize="small" color="inherit">
                    {icon.component}
                  </Icon>
                </SoftBox>
              </Grid>
            )}

            {/* Text Content */}
            <Grid item xs>
              <SoftBox display="flex" flexDirection="column" ml={1}>
                {title?.text && (
                  <SoftTypography
                    variant="button"
                    color={bgColor === "white" ? "#555555" : "#ffffff"}
                    textTransform="capitalize"
                    fontWeight={title.fontWeight}
                  >
                    {title.text}
                  </SoftTypography>
                )}

                <SoftBox display="flex" alignItems="center" gap={0.5} mt={0.5}>
                  {/* Count */}
                  {count && (
                    <SoftTypography
                      variant="h5"
                      fontWeight="bold"
                      color={bgColor === "white" ? "#1c1c1c" : "#e0e0e0"} // dark/black count
                    >
                      {count}
                    </SoftTypography>
                  )}

                  {/* Percentage */}
                  {percentage?.text && (
                    <SoftTypography
                      variant="button"
                      fontWeight="bold"
                      color={percentage.color} // keep original color
                    >
                      {percentage.text}
                    </SoftTypography>
                  )}
                </SoftBox>
              </SoftBox>
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

MiniStatisticsCard.defaultProps = {
  bgColor: "white",
  title: { fontWeight: "medium", text: "" },
  percentage: { color: "success", text: "" },
};

MiniStatisticsCard.propTypes = {
  bgColor: PropTypes.oneOf([
    "white",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
  ]),
  title: PropTypes.shape({
    fontWeight: PropTypes.oneOf(["light", "regular", "medium", "bold"]),
    text: PropTypes.string,
  }),
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  percentage: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "white",
    ]),
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  icon: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
    ]),
    component: PropTypes.node.isRequired,
  }),
};

export default MiniStatisticsCard;
