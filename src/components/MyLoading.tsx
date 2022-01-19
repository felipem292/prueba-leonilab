export const MyLoading = () => {
  return (
    <div
      style={{
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        color: "white",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        position: "fixed",
        right: "0",
        top: "0",
        width: "100%",
      }}
      className="loading-map d-flex justify-content-center align-items-center"
    >
      <div className="text-center">
        <h3 style={{ color: "#fff" }}>Espere por favor</h3>
        <span>Consultando..</span>
      </div>
    </div>
  );
};
