import React, { FC } from 'react';
import ProjectTopHeader from '../../components/ProjectTopHeader/ProjectTopHeader';
import { ProjectCard, TextInput } from '@lib/common';
import { Box, Button, Divider, Typography } from '@mui/material';
import { Info, InfoEdited } from '@lib/icons';
import Checklist from '@lib/icons/src/CheckList';
import sx from './style';
import BubbleText from '../../components/BubbleText';
import { ExpandMore } from '@mui/icons-material';
import targetMarket from '../../assets/target-market.png';

const ProjectDetails: FC<{}> = () => {
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
      <Box sx={sx.projectContainer}>
        <ProjectCard title="Business issues" badges={[Info, InfoEdited, Checklist]} sx={{ mr: 2 }}>
          <BubbleText
            title="Business issues to be addressed"
            textSx={{ mb: 2, bgcolor: '#EFF7FF' }}
          >
            Segments with strong growth rates are more attractive as firms can gain market share
            from primary demand (as opposed to
          </BubbleText>
          <BubbleText title="What is already known about this?" textSx={{ bgcolor: '#EFF7FF' }}>
            Segments with strong growth rates are more attractive as firms can gain market share
            from primary demand (as opposed to
          </BubbleText>
        </ProjectCard>

        <ProjectCard title="Specific solution" badges={[Info, InfoEdited, Checklist]}>
          <ProjectCard
            title="Objective 1"
            subtitle={
              <Typography variant="body2">Warning!!! the deadline is in 02 days</Typography>
            }
            sx={sx.innerCard}
            variant="elevation"
            elevation={0}
          >
            <Box sx={{ display: 'flex' }}>
              <Box>
                <BubbleText title="Description" textSx={{ bgcolor: '#FFF' }}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et enim alias quas sed
                  velit fugit modi error non excepturi atque dolor, aliquam molestiae vel ipsa culpa
                  molestias perferendis amet aperiam.
                </BubbleText>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                    <Typography sx={{ color: 'text.secondary' }} gutterBottom>
                      Budget&nbsp;
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ color: 'success.light', fontWeight: 600 }}
                      gutterBottom
                    >
                      $ 1000,00
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                    <Typography sx={{ color: 'text.secondary' }} gutterBottom>
                      Spent&nbsp;
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ color: 'success.light', fontWeight: 600 }}
                      gutterBottom
                    >
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
        <Box sx={{ textAlign: 'center' }}>
          <img src={targetMarket} alt="Target market" />
        </Box>
      </ProjectCard>
    </Box>
  );
};

export default ProjectDetails;
