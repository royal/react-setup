import { Box } from "@mui/material";

type FlexBoxProps = {
  direction: 'row' | 'column';
  children: React.ReactNode;
}

export const FlexBox: React.FC<FlexBoxProps> = ({ direction, children }) => (
  <Box sx={{ display: 'flex', flexDirection: direction }}>
    {children}
  </Box>
);
