import { styled } from "..";

export const Wrapper = styled("div", {
  position: "relative",
  width: "100%",
});

export const Container = styled("div", {
  minHeight: 656,
});

export const Svg = styled("svg", {
  width: "30px",
  height: "30px",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  WebkitTransform: "translateY(-50%)",
  fill: "$white",
  cursor: "pointer",

  variants: {
    position: {
      left: {
        left: "16px",
      },
      right: {
        left: "auto",
        right: "16px",
      },
    },
    disbled: {
      true: {
        display: "none",
      },
    },
  },
});
