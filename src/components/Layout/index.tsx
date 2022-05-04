import { Header, HeaderProps } from 'components/Header'

type Props = {
  header: HeaderProps;
  children: React.ReactNode;
};

export const Layout : React.FC<Props> = ({ header, children }) => {
  
  return (
    <>
      <Header {...header} />
      <main>
        {children}
      </main>
      <footer>

      </footer>
    </>
  );
};
