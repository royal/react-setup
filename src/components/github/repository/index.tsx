import { Container } from '@mui/material';
import { RepositoryHeader } from './repositoryHeader';
import { RepositoryFileTree } from './repositoryFileTree';
import { OrganisationHeader } from 'components/github/organisation/organisationHeader';
import { useOrganisation } from 'hooks/api/github/useOrganisation';
import { useRepository } from 'hooks/api/github/useRepository';
import { TreeView } from '@mui/lab';

type RepositoryProps = {
  repository: string;
  organisation: string;
}

export const Repository: React.FC<RepositoryProps> = ({ repository, organisation }) => {
  const { isFetched: isOrgFetched, data: orgData } = useOrganisation(organisation);
  const { isFetched, data} = useRepository(organisation, repository);
  
  if (!isFetched || data === undefined) return null;

  return (
    <Container>
      {isOrgFetched && orgData !== undefined && <OrganisationHeader organisation={orgData} orgName={organisation} />}
      <RepositoryHeader repository={data} repoName={repository} />
      <TreeView>
        <RepositoryFileTree repository={repository} owner={organisation} sha={data.default_branch} />
      </TreeView>
    </Container>
  );
};
