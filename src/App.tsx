import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import { css } from "@emotion/css";
import Footer from "./Footer";
import Astrologenie from "./Astrologenie";

export default function App() {
  return (
    <div
      className={css`
        minheight: "100vh";
      `}
    >
      <CssBaseline />
      <Container component="main">
        <Astrologenie />
      </Container>
      <Footer />
    </div>
  );
}
