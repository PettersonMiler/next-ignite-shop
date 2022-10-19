import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100vh",
});

export const Header = styled("header", {
  padding: "2rem",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
  display: "flex",

  variants: {
    position: {
      true: {
        justifyContent: "center",
      },
      false: {
        justifyContent: "space-between",
      },
    },
  },
});

export const LoaderContainer = styled("div", {
  display: "flex",
  height: 656,
  width: "100%",
  paddingTop: "100px",
});
