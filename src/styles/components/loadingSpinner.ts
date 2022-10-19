import { styled, keyframes } from "..";

export const Container = styled("div", {
  variants: {
    center: {
      true: {
        justifyContent: "center",
        display: "flex",
        width: "100%",
      },
    },
  },
});

const spinner = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const Spinner = styled("div", {
  width: "50px",
  height: "50px",
  border: "10px solid $green300",
  borderTop: "10px solid rgba(0, 179, 126, 0.5)",
  borderRadius: "50%",
  animation: `${spinner} 1.5s linear infinite`,

  variants: {
    size: {
      sm: {
        width: "25px",
        height: "25px",
        borderWidth: "5px",
      },
      md: {
        width: "50px",
        height: "50px",
        borderWidth: "10px",
      },
      lg: {
        width: "150px",
        height: "150px",
        borderWidth: "20px",
      },
      xl: {
        width: "300px",
        height: "300px",
        borderWidth: "30px",
      },
    },
  },
});
