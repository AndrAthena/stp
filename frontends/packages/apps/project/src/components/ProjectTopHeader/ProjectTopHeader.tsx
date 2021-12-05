import React, { FC } from 'react';
import { ProjectOutlined } from '@lib/icons';
import { Box, Button, Typography } from '@mui/material';

interface ProjectTopHeaderProps {
  overview?: boolean;
  title: string;
  desc: string;
  action(event: React.MouseEvent<any>): void;
}

const ProjectTopHeader: FC<ProjectTopHeaderProps> = ({ title, desc, action, overview = false }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'start' }}>
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
          {overview && <ProjectOutlined color="primary" sx={{ mr: 1, fontSize: '2.5rem' }} />}
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
        </Box>
        <Typography>{desc}</Typography>
      </Box>
      <Button variant="outlined" color="secondary" sx={{ ml: 'auto' }} onClick={action}>
        Create project
      </Button>
    </Box>
  );
};
export default ProjectTopHeader;
