import { Button, Grid, Paper, Typography } from "@mui/material";
import styled from "styled-components";
import { IndexAppBar } from "../common/components/app-bar";
import d from "../public/icons/1544136836.svg";
import { OptimizedImage } from "../common/components/optimized-image";
import { useAlert } from "../hooks/useAlert";
import { CustomizedSnackbars } from "../common/components/alert";

const StyledMain = styled.main`
  min-height: calc(100vh - 64px);
`;

const Home = () => {
  const { handleOpenSnackbar, isOpen, severity, message, handleClose } =
    useAlert();
  return (
    <StyledMain>
      <IndexAppBar />
      <Grid container>
        <Grid item xs={12}>
          <Paper sx={{ my: 4, p: 2 }}>
            <Typography variant="h5" component="h1">
              ksdjjjnsdkljskdnflsk
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ my: 4, p: 2 }}>
            <OptimizedImage src={d} ext="svg" width="32" height="32" />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ my: 4, p: 2 }}>
            <Typography variant="h5" component="h1">
              ksdjjjnsdkljskdnflsk
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ my: 4, p: 2 }}>
            <Typography variant="h5" component="h1">
              ksdjjjnsdkljskdnflsk
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ my: 4, p: 2, display: "flex", gap: "16px" }}>
            <Button
              variant="contained"
              color="success"
              onClick={() =>
                handleOpenSnackbar({
                  message: "Ola como vai vc, eu so queria saber?",
                })
              }
            >
              Open Success
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() =>
                handleOpenSnackbar({
                  message:
                    "Ola como vai vc, essa deveria ser uma mensagem de erro?",
                  severity: "error",
                })
              }
            >
              Open error
            </Button>
            <Button
              variant="contained"
              color="info"
              onClick={() =>
                handleOpenSnackbar({
                  message:
                    "Ola como vai vc,essa deveria ser uma mensagem de informacao?",
                  severity: "info",
                })
              }
            >
              Open info
            </Button>
            <Button
              variant="contained"
              color="warning"
              onClick={() =>
                handleOpenSnackbar({
                  message:
                    "Ola como vai vc,essa deveria ser uma mensagem de cuidado?",
                  severity: "warning",
                })
              }
            >
              Open warning
            </Button>
          </Paper>
        </Grid>
      </Grid>
      <CustomizedSnackbars
        open={isOpen}
        severity={severity}
        message={message}
        handleClose={handleClose}
      />
    </StyledMain>
  );
};

export default Home;
