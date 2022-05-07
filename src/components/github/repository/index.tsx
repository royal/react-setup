import { Container } from '@mui/material';
import { useRepository } from 'hooks/api/github/useRepository';

type RepositoryProps = {
  repository: string;
  organisation: string;
}

export const Repository: React.FC<RepositoryProps> = ({ repository, organisation }) => {
  const { isFetched, data } = useRepository(organisation, repository);
  
  if (!isFetched || data === undefined) return null;
  return (
    <Container>
      {JSON.stringify(data)}
    </Container>
  );
};