import { CircularProgress } from '@mui/material';
import { Error } from 'components/error';
import { useRepositoryFileTree } from 'hooks/api/github/useRepositoryFileTree'
import { TreeItem } from '@mui/lab';

type RepositoryFileTreeProps = {
  repository: string;
  owner: string;
  sha?: string;
}

export const RepositoryFileTree: React.FC<RepositoryFileTreeProps> = ({ repository, owner, sha = 'main' }) => {
  const { isLoading, isError, isFetched, data } = useRepositoryFileTree(owner, repository, sha);

  if (isLoading) return <CircularProgress />;
  if (isError) return <Error />;
  if (!isFetched || data === undefined) return null;

  return (
    <>
      {
        data.tree
          .filter(x => x.type === 'tree')
          .sort((a, b) => (a.path === undefined || b.path === undefined) ? 0 : a.path.localeCompare(b.path))
          .map(x => (
            <TreeItem key={x.sha} nodeId={x.sha ?? ''} label={x.path}>
              <RepositoryFileTree repository={repository} owner={owner} sha={x.sha} />
            </TreeItem>
          ))
      }
      {
        data.tree.filter(x => x.type === 'blob').length > 0
        && <TreeItem nodeId={`blobs-${sha}`} label='Files'>
          {
            data.tree
              .filter(x => x.type === 'blob')
              .sort((a, b) => (a.path === undefined || b.path === undefined) ? 0 : a.path.localeCompare(b.path))
              .map(x => <TreeItem key={x.sha} nodeId={x.sha ?? ''} label={x.path} />)
          }
        </TreeItem>
      }
    </>
  );
}
