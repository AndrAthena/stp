import { ProjectOutlined } from '@lib/icons';
import { Avatar, Card, CardContent, CardHeader, CardProps, Typography } from '@mui/material';
import React, { FC } from 'react';
import cls from './style'

interface ProjectCardProps {}

const ProjectCard: FC<ProjectCardProps & CardProps> = ({ sx, ...rest }) => {
  return (
    <Card variant="outlined" sx={{...sx, ...cls.card}} {...rest}>
      <CardHeader
        sx={{ p: 0 }}
        avatar={
          <Avatar sx={{ width: '86px', height: '86px', bgcolor: '#D8D8D8' }}>
            <ProjectOutlined sx={{ fontSize: '3rem' }} color="primary" />
          </Avatar>
        }
      />
      <CardContent sx={{ p: '0 !important' }}>
        <Typography variant="h6" gutterBottom>
          Project 1
        </Typography>
        <Typography variant="body2" gutterBottom noWrap>
          <Typography variant="body2" component="span" sx={{ display: 'inline-flex', width: 90 }}>
            Description&nbsp;:&nbsp;
          </Typography>
          <Typography variant="body2" component="span" sx={{ color: 'text.secondary' }}>
            Lorem ipsum dolor sit amet.
          </Typography>
        </Typography>
        <Typography variant="body2" gutterBottom noWrap>
          <Typography variant="body2" component="span" sx={{ display: 'inline-flex', width: 90 }}>
            Team&nbsp;:&nbsp;
          </Typography>
          <Typography variant="body2" component="span" sx={{ color: 'text.secondary' }}>
            Lorem ipsum dolor sit amet.
          </Typography>
        </Typography>
        <Typography variant="body2" gutterBottom>
          Progression&nbsp;:
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
