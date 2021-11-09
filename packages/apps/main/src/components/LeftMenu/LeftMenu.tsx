import React from 'react';
import { Avatar, Box, Divider, Tab, Tabs, Tooltip, Typography } from '@mui/material';
import './style.css';
import { Link } from 'react-router-dom';
import {
  FolderOpenOutlined,
  DashboardOutlined,
  CheckBoxOutlined,
  BusinessCenterOutlined,
  NotificationsNoneOutlined,
  SettingsOutlined,
} from '@mui/icons-material';
import { useCallback, useState } from 'react';
import { Logo } from '@lib/icons';

type menus = 'workspace' | 'folder' | 'project' | 'dashboard' | 'notification' | 'setting';

const LeftMenu = () => {
  const activeSx = {
    '&.Mui-selected': { color: 'common.white', bgcolor: 'secondary.main', borderRadius: 1 },
  };
  const [active, setActive] = useState<menus>('dashboard');
  const handleChange = useCallback((value: menus) => setActive(value), []);

  return (
    <Box
      className="appMenu"
      sx={{ height: 1, p: 2, color: 'common.white', bgcolor: 'primary.main' }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Logo sx={{ fontSize: 36, mr: 2 }} />
        <Typography component="h1">Strategic Targeting Process</Typography>
      </Box>
      <Typography variant="body2" sx={{ mb: 1, textTransform: 'uppercase' }}>
        Overview
      </Typography>

      <Tabs
        orientation="vertical"
        className="menus"
        value={active}
        onChange={(_, value: menus) => handleChange(value)}
        TabIndicatorProps={{ style: { display: 'none' } }}
      >
        <Tab
          label={
            <Tooltip title="Workspace">
              <Typography variant="body2">Workspace</Typography>
            </Tooltip>
          }
          icon={<BusinessCenterOutlined />}
          to="/workspace"
          component={Link}
          iconPosition="start"
          value={'workspace'}
          sx={activeSx}
        />
        <Tab
          label={<Typography variant="body2">Folder</Typography>}
          icon={<FolderOpenOutlined />}
          to="/folder"
          component={Link}
          iconPosition="start"
          value="folder"
          sx={activeSx}
        />
        <Tab
          label={<Typography variant="body2">Project</Typography>}
          icon={<CheckBoxOutlined />}
          to="/project"
          component={Link}
          iconPosition="start"
          value="project"
          sx={activeSx}
        />
        <Tab
          label={<Typography variant="body2">Dashboard</Typography>}
          icon={<DashboardOutlined />}
          to="/dashboard"
          component={Link}
          iconPosition="start"
          value="dashboard"
          sx={activeSx}
        />
        <Box sx={{ mt: 'auto' }}>
          <Typography variant="body2" sx={{ mb: 1, textTransform: 'uppercase' }}>
            Account
          </Typography>
        </Box>
        <Tab
          label={<Typography variant="body2">Notification</Typography>}
          icon={<NotificationsNoneOutlined />}
          to="/notification"
          component={Link}
          iconPosition="start"
          value="notification"
          sx={activeSx}
        />
        <Tab
          label={<Typography variant="body2">Setting</Typography>}
          icon={<SettingsOutlined />}
          to="/setting"
          component={Link}
          iconPosition="start"
          value="setting"
          sx={activeSx}
        />
      </Tabs>
      <Divider variant="fullWidth" sx={{ mx: -2, my: 2, borderColor: 'rgb(255 255 255 / 25%)' }} />
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar sx={{ width: 32, height: 32, mr: 1.5 }}>
          <Typography variant="body2">AS</Typography>
        </Avatar>
        <Typography variant="body2">Amy Smith</Typography>
      </Box>
    </Box>
  );
};

export default LeftMenu;
