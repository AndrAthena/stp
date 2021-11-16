import { Box, Card, CardHeader, CardContent, CardProps, Typography } from '@mui/material';
import React, { ElementType, FC, ReactNode } from 'react';
import sx from './style';

interface ProjectCardProps {
  title: string;
  subtitle?: ReactNode;
  badges?: ElementType[];
}

const ProjectCard: FC<ProjectCardProps & Omit<CardProps, 'title'>> = ({
  title,
  subtitle,
  badges,
  children,
  ...rest
}) => {
  return (
    <Card variant="outlined" sx={sx.card} {...rest}>
      <CardHeader
        title={
          <Box sx={{ ...sx.flex, justifyContent: 'space-between' }}>
            <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>
              {title}
            </Typography>
            <Box sx={sx.flex}>
              {badges ? (
                <>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Acquired Badge&nbsp;:&nbsp;
                  </Typography>
                  {badges.map((Badge: ElementType, index: number) => (
                    <Badge key={`card-header-badge-${index}`} />
                  ))}
                </>
              ) : (
                subtitle
              )}
            </Box>
          </Box>
        }
        sx={sx.cardHeader}
      />
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default ProjectCard;
