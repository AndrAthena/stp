import React, { FC } from 'react';
import { FilterListOutlined, GridViewSharp, SortOutlined } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import { CustomScrollbar, TextInput } from '@lib/common';
import { ProjectCard } from '../../components/ProjectCard';
import sx from './style';
import ProjectTopHeader from '../../components/ProjectTopHeader';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';

interface OverviewProps {}

const Overview: FC<OverviewProps> = () => {
  const navigate = useNavigate();
  const handleClickProject = (to: string) => () => navigate(to);

  return (
    <>
      <Box sx={sx.overview}>
        <ProjectTopHeader
          title="Project overview"
          desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod vero quisquam officiis
          doloribus perferendis voluptate doloremque. Optio in necessitatibus facere quisquam
          quaerat corporis, voluptatum suscipit, delectus eius nihil repellendus non quod ullam aut
          eveniet fuga explicabo."
          action={(_) => {}}
        />
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 4 }}>
          <Formik initialValues={{ search: '' }} onSubmit={() => {}}>
            {() => <TextInput type="search" name="search" placeholder="Searh" fullWidth />}
          </Formik>

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
          <Box sx={sx.projectList}>
            {new Array(5).fill(null).map((_, index: number) => (
              <ProjectCard onClick={handleClickProject('/project/' + index)} />
            ))}
          </Box>
        </CustomScrollbar>
      </Box>
    </>
  );
};

export default Overview;
