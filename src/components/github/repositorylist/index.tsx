import { Chip, CircularProgress, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { ForkRight, Star } from '@mui/icons-material';
import { useOrganisationRepositories } from 'hooks/api/github/useOrganisationRepositories';
import { Error } from 'components/error';
import { Repository } from 'api/github/types';
import { humaniseDistance } from 'utils/date';
import { isAfter } from 'date-fns';

type RepositoryListProps = {
  orgName: string;
}

const sortByDates = (a: Repository, b: Repository) => {
  if (a.updated_at === undefined || a.updated_at === null) return -1;

  if (b.updated_at === undefined || b.updated_at === null) return 1;

  const d1 = new Date(a.updated_at);
  const d2 = new Date(b.updated_at);

  return isAfter(d1, d2) ? -1 : 1;
}

export const RepositoryList: React.FC<RepositoryListProps> = ({ orgName }) => {

  const { isLoading, isError, isFetched, data } = useOrganisationRepositories(orgName);

  if (isLoading) return <CircularProgress />;
  if (isError) return <Error />;

  if (!isFetched || data === undefined) return null;

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Reposotitory</TableCell>
          <TableCell>Created</TableCell>
          <TableCell>Last Updated</TableCell>
          <TableCell>Topics</TableCell>
          <TableCell>Stats</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data
          .sort(sortByDates)
          .map((repository) => (
          <TableRow key={repository.id}>
            <TableCell>{repository.name}</TableCell>
            <TableCell>{humaniseDistance(repository.created_at)}</TableCell>
            <TableCell>{humaniseDistance(repository.updated_at)}</TableCell>
            <TableCell>
              {repository.topics?.map((topic) => (
                <Chip
                  color="primary"
                  key={topic}
                  label={topic}
                  sx={{
                    marginRight: '0.5rem',
                    marginBottom: '0.5rem',
                  }} 
                />
              ))}
            </TableCell>
            <TableCell>
              <Star /> {repository.stargazers_count}
              <ForkRight /> {repository.forks_count}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
