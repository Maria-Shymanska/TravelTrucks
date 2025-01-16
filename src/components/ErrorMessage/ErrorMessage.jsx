import { useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";

const ErrorMessage = ({ message }) => {
  useEffect(() => {
    if (message) {
      toast.error(message, {
        style: {
          border: "1px solid #1976d2",
          padding: "16px",
          color: "#1976d2",
          borderRadius: "8px",
        },
        iconTheme: {
          primary: "#1976d2",
          secondary: "#FFFAEE",
        },
      });
    }
  }, [message]);

  return <Toaster position="top-center" reverseOrder={false} />;
};

export default ErrorMessage;
