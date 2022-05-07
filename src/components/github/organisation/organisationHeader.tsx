import { Avatar, Container, Link, Typography } from '@mui/material';
import { MyLocation, Link as LinkIcon} from '@mui/icons-material';
import { Organisation } from 'api/github/types';
import { FlexBox } from 'components/flexBox';

type OrganisationHeaderProps = {
  organisation: Organisation;
  orgName: string;
}

export const OrganisationHeader: React.FC<OrganisationHeaderProps> = ({ organisation, orgName }) => (
  <Container
    sx={{
      display: 'flex',
      flexDirection: 'row',
    }}
  >
    <Avatar src={organisation.avatar_url} />
    <FlexBox direction="column">
      <Typography variant="h2">{organisation.name || orgName}</Typography>
      <Typography variant="subtitle1">{organisation.description}</Typography>
      <FlexBox direction="row">
        {organisation.location && (
          <>
            <MyLocation />
            <Typography variant="body1">{organisation.location}</Typography>
          </>
        )}
        {organisation.html_url && (
          <>
            <LinkIcon />
            <Link href={organisation.html_url}>{organisation.html_url}</Link>
          </>
        )}
      </FlexBox>
    </FlexBox>
  </Container>
);
