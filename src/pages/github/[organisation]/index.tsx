import { Layout } from 'components/layout';
import { useRouter } from 'next/router';

const OrganisationPage = () => {
  const router = useRouter();
  const { organisation } = router.query;

  return (
    <Layout header={{ title: organisation as string }}>

    </Layout>
  );
}

export default OrganisationPage;
