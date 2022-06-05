import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import { LOAD_SINGLE } from '../graphql/queries'
import { useQuery } from '@apollo/client';
import SideBar from '../components/sideBar';
export default function Article() {
    const params = useParams();
    const id = params.id;
  
    const {error, loading, data} = useQuery(LOAD_SINGLE, {
      variables: {
        getSingleNewsId: id
      }
    });
  
  
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

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
        <Box sx={{ gridArea: 'main', bgcolor: 'inherit', margin: '0 20px 0 20px' }}>
            <h2>{data.getSingleNews.headline}</h2>
            <div dangerouslySetInnerHTML={{ __html: data.getSingleNews.content}} />
        </Box>
        <Box sx={{ gridArea: 'sidebar', bgcolor: 'inherit' }}>
          <SideBar />
        </Box>
      </Box>
    </Box>
  );
}
