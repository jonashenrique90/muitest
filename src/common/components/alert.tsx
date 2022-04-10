import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { FC, forwardRef } from "react";

type SeverityOptions = "success" | "error" | "warning" | "info";

interface CustomizedSnackbarsProps {
  open: boolean;
  message: string;
  severity: SeverityOptions;
  handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const CustomizedSnackbars: FC<CustomizedSnackbarsProps> = ({
  open,
  message,
  severity,
  handleClose,
}) => {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};
