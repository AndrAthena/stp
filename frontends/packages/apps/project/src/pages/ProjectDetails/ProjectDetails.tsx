import React, { FC, useState } from 'react';
import ProjectTopHeader from '../../components/ProjectTopHeader';
import { ProjectCard, TextInput } from '@lib/common';
import { Box, Button, Divider, IconButton, Typography } from '@mui/material';
import { Info, InfoEdited } from '@lib/icons';
import Checklist from '@lib/icons/src/CheckList';
import sx from './style';
import BubbleText from '../../components/BubbleText';
import { ArrowBack, ExpandMore } from '@mui/icons-material';
import TargetMarket from '../TargetMarket';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

const ProjectDetails: FC<{}> = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ height: 1, p: 2 }}>
      <ProjectTopHeader
        overview
        title="Project 1"
        desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod vero quisquam officiis
            doloribus perferendis voluptate doloremque. Optio in necessitatibus facere quisquam
            quaerat corporis, voluptatum suscipit, delectus eius nihil repellendus non quod ullam aut
            eveniet fuga explicabo."
        action={() => navigate('/project/create')}
      />
      <Formik initialValues={{ search: '' }} onSubmit={() => {}}>
        {() => <TextInput type="search" name="search" placeholder="Searh" sx={{ mt: 5, mb: 4 }} fullWidth />}
      </Formik>
      <Box sx={sx.projectContainer}>
        <ProjectCard title="Business issues" badges={[Info, InfoEdited, Checklist]} sx={{ mr: 2 }}>
          <BubbleText title="Business issues to be addressed" textSx={{ mb: 2, bgcolor: '#EFF7FF' }}>
            Segments with strong growth rates are more attractive as firms can gain market share from primary demand (as opposed to
          </BubbleText>
          <BubbleText title="What is already known about this?" textSx={{ bgcolor: '#EFF7FF' }}>
            Segments with strong growth rates are more attractive as firms can gain market share from primary demand (as opposed to
          </BubbleText>

          <Typography sx={{ color: 'text.secondary' }} gutterBottom>
            What need to be done
          </Typography>
          <Box sx={{ ml: 2 }}>
            <Typography sx={{ mb: 1 }}>1) TASK 1</Typography>
            <Box sx={{ ...sx.coloredBox, bgcolor: '#EFF7FF' }}>
              <Typography>
                Segments with strong growth rates are more attractive as firms can gain market share from primary demand (as opposed to
              </Typography>
            </Box>
            <Button variant="contained" size="small" sx={{ bgcolor: '#4E5679' }} disableElevation fullWidth>
              Completed
            </Button>
          </Box>

          <Box sx={{ ml: 2 }}>
            <Typography sx={{ mt: 2, mb: 1 }}>1) TASK 2</Typography>
            <Box sx={{ ...sx.coloredBox, bgcolor: '#EFF7FF' }}>
              <Typography>
                Segments with strong growth rates are more attractive as firms can gain market share from primary demand (as opposed to
              </Typography>
            </Box>
            <Button variant="contained" size="small" sx={{ bgcolor: '#2BDF60' }} disableElevation fullWidth>
              Completed
            </Button>
          </Box>

          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Button variant="contained" color="inherit" disableElevation>
              Show all task
            </Button>
          </Box>
        </ProjectCard>

        <ProjectCard title="Specific solution" badges={[Info, InfoEdited, Checklist]}>
          <ProjectCard
            title="Objective 1"
            subtitle={<Typography variant="body2">Warning!!! the deadline is in 02 days</Typography>}
            sx={sx.innerCard}
            variant="elevation"
            elevation={0}
          >
            <Box sx={{ display: 'flex' }}>
              <Box>
                <BubbleText title="Description" textSx={{ bgcolor: '#FFF' }}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et enim alias quas sed velit fugit modi error non excepturi atque dolor,
                  aliquam molestiae vel ipsa culpa molestias perferendis amet aperiam.
                </BubbleText>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                    <Typography sx={{ color: 'text.secondary' }} gutterBottom>
                      Budget&nbsp;
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'success.light', fontWeight: 600 }} gutterBottom>
                      $ 1000,00
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                    <Typography sx={{ color: 'text.secondary' }} gutterBottom>
                      Spent&nbsp;
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'success.light', fontWeight: 600 }} gutterBottom>
                      $ 99,00
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ mt: 3, textAlign: 'center' }}>
                  <Button
                    variant="contained"
                    color="inherit"
                    sx={{ textTransform: 'uppercase', borderRadius: 0 }}
                    endIcon={<ExpandMore />}
                    disableElevation
                  >
                    See Achievability
                  </Button>
                </Box>
              </Box>
              <Box>
                <Typography>Progression</Typography>
              </Box>
            </Box>
          </ProjectCard>

          <ProjectCard
            title="Objective 2"
            subtitle={<Typography variant="body2">Warning!!! the deadline is in 02 days</Typography>}
            sx={sx.innerCard}
            variant="elevation"
            elevation={0}
          >
            <Box sx={{ display: 'flex' }}>
              <Box>
                <BubbleText title="Description" textSx={{ bgcolor: '#FFF' }}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et enim alias quas sed velit fugit modi error non excepturi atque dolor,
                  aliquam molestiae vel ipsa culpa molestias perferendis amet aperiam.
                </BubbleText>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                    <Typography sx={{ color: 'text.secondary' }} gutterBottom>
                      Budget&nbsp;
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'success.light', fontWeight: 600 }} gutterBottom>
                      $ 1000,00
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                    <Typography sx={{ color: 'text.secondary' }} gutterBottom>
                      Spent&nbsp;
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'success.light', fontWeight: 600 }} gutterBottom>
                      $ 99,00
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ mt: 3, textAlign: 'center' }}>
                  <Button
                    variant="contained"
                    color="inherit"
                    sx={{ textTransform: 'uppercase', borderRadius: 0 }}
                    endIcon={<ExpandMore />}
                    disableElevation
                  >
                    See Achievability
                  </Button>
                </Box>
              </Box>
              <Box>
                <Typography>Progression</Typography>
              </Box>
            </Box>
          </ProjectCard>
        </ProjectCard>
      </Box>
      <Divider sx={{ my: 2 }} />
      <ProjectCard title="Target market" badges={[Info, InfoEdited, Checklist]}>
        <TargetMarket />
      </ProjectCard>
    </Box>
  );
};

export default ProjectDetails;
