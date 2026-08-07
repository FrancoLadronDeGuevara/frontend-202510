import "./Alert.css";

const Alert = ({ message, show }) => {
  const colors = {
    success: "green",
    pending: "orange",
    failed: "red",
  };

  if (!show) {
    return null;
  }

  return (
    <div
      className="alert"
      style={{
        backgroundColor:
          message == "Exito"
            ? colors.success
            : message == "Pendiente"
            ? colors.pending
            : colors.failed,
      }}
    >
      {message}
    </div>
  );
};

export default Alert;
