import { Container, Typography } from '@mui/material';
import { Repository } from 'api/github/types';

type RepositoryHeaderProps = {
  repository: Repository;
  repoName: string;
}

export const RepositoryHeader: React.FC<RepositoryHeaderProps> = ({ repository, repoName }) => (
  <Container
    sx={{
      display: 'flex',
      flexDirection: 'row',
    }}
  >
    <Typography variant="h2">{repository.name || repoName}</Typography>
  </Container>
);
