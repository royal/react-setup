import { useRouter } from 'next/router';
import { QueryFunction, QueryKey, useQuery as useReactQuery, UseQueryOptions, UseQueryResult } from 'react-query';

type useQueryType = <TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>
(queryKey: TQueryKey,
  queryFn: QueryFunction<TQueryFnData, TQueryKey>,
  options?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn'>)
  => UseQueryResult<TData, TError>; 

export const useQuery: useQueryType = (queryKey, queryFn, config = {}) => {
  const { isReady } = useRouter();
  const enabled = config.enabled ?? true;

  return useReactQuery(
    queryKey,
    queryFn,
    { ...config, enabled: isReady && enabled });
}
