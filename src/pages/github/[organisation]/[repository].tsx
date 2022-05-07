import { CircularProgress } from '@mui/material';
import { useRouter } from 'next/router'
import { Error } from 'components/error';
import { Layout } from 'components/layout';
import { Repository } from 'components/github/repository';
import { useRepository } from 'hooks/api/github/useRepository';

const RepositoryPage = () => {
  const router = useRouter();
  const { organisation: orgQuery, repository: repoQuery } = router.query;
  const orgName = orgQuery as string;
  const repoName = repoQuery as string;

  const { isLoading, isError, isFetched, data } = useRepository(orgName, repoName);

  <Layout header={{ title: `${orgName} / ${repoName}` }}>
    {isLoading && <CircularProgress />}
    {isError && <Error />}
    {isFetched && <Repository organisation={orgName} repository={repoName} />}
  </Layout>
}

export default RepositoryPage;
