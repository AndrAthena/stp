import React, { FC } from 'react';
import ProjectTopHeader from '../../components/ProjectTopHeader/ProjectTopHeader';
import { CustomScrollbar, ProjectCard, TextInput } from '@lib/common';
import { Box, Typography } from '@mui/material';
import { Info, InfoEdited } from '@lib/icons';
import Checklist from '@lib/icons/src/CheckList';
import sx from './style';

const ProjectDetails: FC<{}> = (params) => {
  return (
    <Box sx={{ height: 1 }}>
      <ProjectTopHeader
        overview
        title="Project 1"
        desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod vero quisquam officiis
            doloribus perferendis voluptate doloremque. Optio in necessitatibus facere quisquam
            quaerat corporis, voluptatum suscipit, delectus eius nihil repellendus non quod ullam aut
            eveniet fuga explicabo."
        action={(_) => {}}
      />
      <TextInput type="search" sx={{ mt: 5, mb: 4 }} fullWidth />
      <CustomScrollbar style={{ height: '100%' }}>
        <Box sx={sx.projectContainer}>
          <ProjectCard
            title="Business issues"
            badges={[Info, InfoEdited, Checklist]}
            sx={{ mr: 2 }}
          >
            <Box>
              <Typography sx={{ color: 'text.secondary' }} gutterBottom>
                Business issues to be addressed
              </Typography>
              <Box
                sx={{
                  ...sx.coloredBox,
                  bgcolor: '#EFF7FF',
                }}
              >
                Segments with strong growth rates are more attractive as firms can gain market share
                from primary demand (as opposed to
              </Box>
            </Box>
          </ProjectCard>

          <ProjectCard title="Specific solution" badges={[Info, InfoEdited, Checklist]}>
            <ProjectCard
              title="Objective 1"
              subtitle={
                <Typography variant="body2">Warning!!! the deadline is in 02 days</Typography>
              }
              sx={sx.innerCard}
            >
              <Box>
                <Typography sx={{ color: 'text.secondary' }} gutterBottom>
                  Description
                </Typography>
                <Box
                  sx={{
                    ...sx.coloredBox,
                    bgcolor: '#FFF',
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et enim alias quas sed
                  velit fugit modi error non excepturi atque dolor, aliquam molestiae vel ipsa culpa
                  molestias perferendis amet aperiam.
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Typography sx={{ color: 'text.secondary' }} gutterBottom>
                    Budget
                  </Typography>
                  &nbsp;
                  <Typography sx={{ color: 'success.light', fontWeight: 600 }} gutterBottom>
                    $ 1000,00
                  </Typography>
                </Box>
              </Box>
            </ProjectCard>
          </ProjectCard>
        </Box>
      </CustomScrollbar>
    </Box>
  );
};

export default ProjectDetails;
