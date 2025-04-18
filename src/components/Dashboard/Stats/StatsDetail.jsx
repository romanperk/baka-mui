import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  LinearProgress,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const StatsDetail = ({
  icon,
  title,
  value,
  color,
  progress,
  percentage,
}) => {
  const navigate = useNavigate();
  const isClickable = title === "Total Orders";

  const styles = {
    card: {
      borderRadius: 2,
      position: "relative",
      cursor: isClickable && "pointer",
    },
    indicator: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "4px",
    },
    progressBar: {
      flex: 1,
      height: 6,
      borderRadius: 3,
    },
  };

  return (
    <Card
      elevation={2}
      sx={styles.card}
      onClick={isClickable ? () => navigate("/orders") : null}
    >
      <Box sx={{ ...styles.indicator, bgcolor: color }} />
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
          {icon}
          <Typography variant="subtitle2" color="text.secondary">
            {title}
          </Typography>
        </Stack>
        <Typography variant="h3" sx={{ fontWeight: "medium", mb: 1 }}>
          {value}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <LinearProgress
            variant="determinate"
            value={progress}
            color={color.split(".")[0]}
            sx={styles.progressBar}
          />
          <Typography variant="caption" color="text.secondary">
            {percentage}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
