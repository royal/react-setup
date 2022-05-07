import { formatDistance } from 'date-fns'

export const humaniseDistance = (dateString: string | null | undefined): string | null => {
  if (dateString === null || dateString === undefined) return null;

  const now = new Date();
  const date = new Date(dateString);

  return formatDistance(date, now, { addSuffix: true });
}
