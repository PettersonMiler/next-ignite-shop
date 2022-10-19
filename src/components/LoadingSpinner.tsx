import { Container, Spinner } from "../styles/components/loadingSpinner";

interface LoadingSpinnerProps {
  center: boolean;
  size: "sm" | "md" | "lg" | "xl";
}

export default function LoadingSpinner({
  size = "sm",
  center,
}: LoadingSpinnerProps) {
  return (
    <Container center={center}>
      <Spinner size={size} />
    </Container>
  );
}
