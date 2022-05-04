import { Header, HeaderProps } from 'components/header'
import { Footer } from 'components/footer'
import Box from '@mui/material/Box';

type Props = {
  header: HeaderProps;
  children: React.ReactNode;
};

export const Layout : React.FC<Props> = ({ header, children }) => {
  
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header {...header} />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};
