import { CircularProgress } from '@mui/material';
import { Layout } from 'components/layout';
import { Error } from 'components/error';
import { Organisation } from 'components/github/organisation';
import { useOrganisation } from 'hooks/api/github/useOrganisation';
import { useRouter } from 'next/router';

const OrganisationPage = () => {
  const router = useRouter();
  const { organisation: orgQueryString } = router.query;

  const org = orgQueryString as string;

  let { organisation: { isLoading, isError, isFetched } } = useOrganisation(org);

  return (
    <Layout header={{ title: org as string }}>
      {isLoading && <CircularProgress />}
      {isError && <Error />}
      {isFetched && <Organisation org={org} />}
    </Layout>
  );
}

export default OrganisationPage;
