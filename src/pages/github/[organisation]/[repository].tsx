import { CircularProgress } from '@mui/material';
import { NextPage } from 'next';
import { useRouter } from 'next/router'
import { Error } from 'components/error';
import { Layout } from 'components/layout';
import { Repository } from 'components/github/repository';
import { useRepository } from 'hooks/api/github/useRepository';
import { useOrganisation } from 'hooks/api/github/useOrganisation';

const RepositoryPage: NextPage = () => {
  const router = useRouter();
  const { organisation: orgQuery, repository: repoQuery } = router.query;
  const orgName = orgQuery as string;
  const repoName = repoQuery as string;

  const orgData = useOrganisation(orgName);
  const repositoryData = useRepository(orgName, repoName);

  return (
    <Layout header={{ title: `${orgName} / ${repoName}` }}>
      {(orgData.isLoading || repositoryData.isLoading) && <CircularProgress />}
      {(orgData.isError || repositoryData.isError) && <Error />}
      {orgData.isFetched && repositoryData.isFetched && <Repository organisation={orgName} repository={repoName} />}
    </Layout>
  );
}

export default RepositoryPage;
