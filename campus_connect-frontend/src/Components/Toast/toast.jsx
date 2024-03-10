import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
// import PropTypes from "prop-types";

// AlertToast.propTypes = {
//   severity: PropTypes.string.isRequired,
//   message: PropTypes.string.isRequired,
// };

const AlertToast = ({ severity, message }) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity={severity}>{message}</Alert>
    </Stack>
  );
};

export default AlertToast;
