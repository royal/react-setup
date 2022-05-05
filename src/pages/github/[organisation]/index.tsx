import { Layout } from 'components/layout';
import { useOrganisation } from 'hooks/api/github/useOrganisation';
import { useRouter } from 'next/router';

const OrganisationPage = () => {
  const router = useRouter();
  const { organisation: org } = router.query;

  let { organisation, repositories } = useOrganisation(org as string);

  return (
    <Layout header={{ title: org as string }}>

    </Layout>
  );
}

export default OrganisationPage;
