import { styled } from "..";

export const Button = styled("button", {
  padding: "1rem",
  backgroundColor: "$gray800",
  borderRadius: 6,
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  cursor: "pointer",
  position: "relative",
  border: 0,
});

export const CarCount = styled("span", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  width: "30px",
  height: "30px",
  right: "-10px",
  top: "-10px",
  background: "$green500",
  border: "3px solid #121214",
  borderRadius: "100px",
});

export const SideBar = styled("div", {
  position: "absolute",
  width: "480px",
  backgroundColor: "$gray800",
  boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.8)",
  zIndex: 999,
  right: 0,
  top: 0,
  bottom: 0,

  footer: {
    marginTop: "auto",

    button: {
      marginTop: "3.5rem",
      width: "100%",
      backgroundColor: "$green500",
      border: 0,
      color: "$white",
      borderRadius: 8,
      padding: "1.25rem",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "$md",

      "&:disabled": {
        opacity: 0.6,
        cursor: "not-allowed",
      },

      "&:not(:disabled):hover": {
        backgroundColor: "$green300",
      },
    },
  },
});

export const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "3rem",
  height: "100%",
});

export const Title = styled("span", {
  margin: "24px 0 8px 0",
  fontWeight: 700,
  fontSize: 20,
  color: "$gray100",
});

export const CloseButton = styled("button", {
  backgroundColor: "$gray800",
  cursor: "pointer",
  border: 0,
  position: "absolute",
  top: 24,
  right: 24,
});

export const Quantity = styled("div", {
  display: "flex",
  justifyContent: "space-between",

  span: {
    fontWeight: 400,
    fontSize: 16,
    display: "flex",
    alignItems: "center",
    color: "$gray100",
  },

  "span:last-of-type": {
    color: "$gray300",
    fontSize: 18,
  },
});

export const Total = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 3,

  span: {
    fontWeight: 700,
    fontSize: 18,
    display: "flex",
    alignItems: "center",
    color: "$gray100",
  },

  "span:last-of-type": {
    fontSize: 24,
  },
});
