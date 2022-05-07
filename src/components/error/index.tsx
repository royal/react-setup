
type ErrorProps = {
  error?: string;
}

export const Error: React.FC<ErrorProps> = ({ error = 'An error has occured.'}) => (
  <p>{error}</p>
);
