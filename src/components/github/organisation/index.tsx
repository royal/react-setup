import { Container } from '@mui/material';
import { useOrganisation } from 'hooks/api/github/useOrganisation';
import { OrganisationHeader } from './organisationHeader';
import { RepositoryList } from 'components/github/repositorylist';

type OrganisationProps = {
  org: string;
}

export const Organisation: React.FC<OrganisationProps> = ({ org }) => {

  let { isFetched, data } = useOrganisation(org);

  if (!isFetched || data === undefined) return null;

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <OrganisationHeader organisation={data} orgName={org} />
      <RepositoryList orgName={org} />
    </Container>
  );
};
