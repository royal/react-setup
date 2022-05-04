import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export const Footer : React.FC = () => {
  
  return (
    <footer>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{ pt: 4 }}
      >
        Copyright &copy;&nbsp;
        <Link color="inherit" href="https://github.com/royal">
          @royal
        </Link>
        {` ${new Date().getFullYear()}.`}
      </Typography>
    </footer>
  );
};
