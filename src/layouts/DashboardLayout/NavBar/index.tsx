import React, { useEffect } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
} from '@mui/material'
import { styled } from '@mui/material'
import { Users, Home } from 'react-feather'
import {
  MenuItems,
  calculateMenuItems,
  Translate,
} from '@iteria-app/component-templates'
import * as graphqlGen from '../../../generated/graphql'

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith',
}
const PREFIX = 'StyledNavBar'
const classes = {
  root: `${PREFIX}-root`,
  mobileDrawer: `${PREFIX}-mobileDrawer`,
  desktopDrawer: `${PREFIX}-desktopDrawer`,
  avatar: `${PREFIX}-avatar`,
}
const StyledNavBar = styled(Box)(({ theme }) => ({
  [`&.${classes.root}`]: {},
  [`& .${classes.mobileDrawer}`]: {
    width: 256,
  },
  [`& .${classes.desktopDrawer}`]: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)',
  },
  [`& .${classes.avatar}`]: {
    cursor: 'pointer',
    width: 64,
    height: 64,
  },
}))
const NavBar = ({ onMobileClose, openMobile }) => {
  const location = useLocation()
  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])
  const content = (
    <StyledNavBar
      sx={{ pt: '64px' }}
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box alignItems="center" display="flex" flexDirection="column" p={2}>
        <Avatar
          className={classes.avatar}
          component={RouterLink}
          src={user.avatar}
          to="/app/account"
        />
        <Typography className={classes.name} color="textPrimary" variant="h5">
          {user.name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          <Translate entityName={user.jobTitle} />
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          <MenuItems
            items={[
              {
                href: '/app/dashboard',
                icon: Home,
                label: 'menu.dashboard',
                title: 'Dashboard',
              },
              ...calculateMenuItems(graphqlGen, Users),
            ]}
          />
        </List>
      </Box>
    </StyledNavBar>
  )
  return (
    <StyledNavBar>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </StyledNavBar>
  )
}
NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
}
NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
}
export default NavBar
