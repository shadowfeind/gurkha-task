import { Alert, AlertTitle } from "./ui/alert";

type AlertProps = {
  type: "default" | "destructive" | null | undefined;
  title: string;
};

const ErrorAlert = ({ type, title }: AlertProps) => {
  return (
    <Alert variant={type}>
      <AlertTitle>{title}</AlertTitle>
    </Alert>
  );
};

export default ErrorAlert;
