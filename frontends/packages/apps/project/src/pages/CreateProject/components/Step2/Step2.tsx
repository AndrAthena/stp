import { Avatar, Box, Button, Card, CardActionArea, CardHeader, Typography } from '@mui/material';
import React, { FC } from 'react';
import sx from './style';
import { TextInput } from '@lib/common';

interface Step2Props {
  onChange(e: React.ChangeEvent<any>): void;
  onSubmit(e?: React.FormEvent<HTMLFormElement>): void;
}

const Step2: FC<Step2Props> = ({ onChange, onSubmit }) => {
  return (
    <Box sx={sx.step}>
      <Box>
        <Typography variant="h2" align="center" gutterBottom>
          Welcome, Set up your project
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          Second, invite all your team member and validators
        </Typography>
        <Box sx={{ mt: 10 }}>
          <form
            onSubmit={onSubmit}
            onKeyPress={(e: React.KeyboardEvent<HTMLFormElement>) => {
              if (e.key === 'Enter') {
                onSubmit(e);
              }
            }}
          >
            <TextInput label="Add member" name="project_name" type="search" searchIconPlacement="end" gutterBottom fullWidth />
            <Button variant="contained" color="secondary" fullWidth disableElevation>
              Send invitation
            </Button>
            <Box sx={{ mt: 3 }}>
              <Card variant="outlined">
                <CardActionArea>
                  <CardHeader
                    avatar={<Avatar variant="circular">M</Avatar>}
                    title={<Typography>Marosoa</Typography>}
                    subheader={
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        marosoa@gmail.com
                      </Typography>
                    }
                    action={<Typography sx={{ mr: 1, color: 'text.secondary' }}>IT Member</Typography>}
                  />
                </CardActionArea>
              </Card>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Step2;
