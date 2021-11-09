import React, { FC } from 'react';
import { FilterListOutlined, GridViewSharp, SortOutlined } from '@mui/icons-material';
import { Box, Button, IconButton, Typography } from '@mui/material';
import CustomScrollbar from '@lib/common/CustomScrollbar';
import { TextInput } from '@lib/common/Input';
import { ProjectOutlined } from '@lib/icons';
import { ProjectCard } from '../../components/ProjectCard';

interface OverviewProps {}

const Overview: FC<OverviewProps> = () => {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: 1, maxHeight: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'start' }}>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
              <ProjectOutlined color="primary" sx={{ mr: 1, fontSize: '2.5rem' }} />
              <Typography variant="h6" component="h2">
                Project overview
              </Typography>
            </Box>
            <Typography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod vero quisquam officiis
              doloribus perferendis voluptate doloremque. Optio in necessitatibus facere quisquam
              quaerat corporis, voluptatum suscipit, delectus eius nihil repellendus non quod ullam
              aut eveniet fuga explicabo.
            </Typography>
          </Box>
          <Button variant="outlined" color="secondary" sx={{ ml: 'auto' }}>
            Create project
          </Button>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 4 }}>
          <TextInput type="search" placeholder="Searh" fullWidth />
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
            <IconButton size="small">
              <GridViewSharp />
            </IconButton>
            <IconButton size="small">
              <SortOutlined />
            </IconButton>
            <IconButton size="small">
              <FilterListOutlined />
            </IconButton>
          </Box>
        </Box>
        <CustomScrollbar>
          <Box
            sx={{
              width: 1,
              flex: 1,
              display: 'flex',
              flexWrap: 'wrap',
              mt: 3,
              overflowY: 'hidden',
              '& > div': { flex: '0 0 calc(33.33% - .7rem)' },
              '& > div:not(:nth-of-type(3n))': { marginRight: 2 },
            }}
          >
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </Box>
        </CustomScrollbar>
      </Box>
    </>
  );
};

export default Overview;
