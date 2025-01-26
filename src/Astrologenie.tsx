import { Paper, Box, Typography } from "@mui/material";

const Astrologenie: React.FunctionComponent = () => {
  return (
    <Paper
      elevation={8}
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        margin: "20px",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Typography variant="h2" margin="10px" border="10px">
        Astrologenie
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", p: 1, m: 1 }}>
        <Typography variant="h4" gutterBottom>
          Use AI to get your horoscope
        </Typography>
      </Box>
    </Paper>
  );
};
export default Astrologenie;
