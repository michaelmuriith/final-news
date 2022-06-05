import * as React from 'react';
import Box from '@mui/material/Box';
import NewsList from '../components/newsList/newsList';

export default function Homepage() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '140px',
        color: '#fff',
        '& > .MuiBox-root > .MuiBox-root': {
          p: 1,
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
        },
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 1,
          gridTemplateRows: 'auto',
          gridTemplateAreas: `"main main main sidebar"`
        }}
      >
        <Box sx={{ gridArea: 'main', bgcolor: 'inherit' }}>
          <NewsList />
        </Box>
        {/* <Box sx={{ gridArea: 'sidebar', bgcolor: 'error.main' }}>Sidebar</Box> */}
      </Box>
    </Box>
  );
}
