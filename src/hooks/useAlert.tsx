import { useState } from "react";

interface SnackbarProps {
  message: string;
  severity?: SeverityOptions;
}

type SeverityOptions = "success" | "error" | "warning" | "info";

export const useAlert = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<SeverityOptions>("success");

  const handleOpenSnackbar = ({ message, severity }: SnackbarProps) => {
    setIsOpen(true);
    setMessage(message);
    setSeverity(severity);
  };
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setIsOpen(false);
  };

  return {
    isOpen,
    message,
    severity,
    setMessage,
    setSeverity,
    handleOpenSnackbar,
    handleClose,
  };
};
