import React, { useEffect, useState } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import { styled } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined'
import InputIcon from '@mui/icons-material/Input'
import Logo from '../../components/Logo'
import { locales } from '../../locale'
import {
  LocaleSwitch,
  Translate,
  getEntityNameFromUrl,
  stringPrettyCapitalize,
} from '@iteria-app/component-templates'

const PREFIX = 'StyledAppBar'
const classes = {
  root: `${PREFIX}-root`,
  avatar: `${PREFIX}-avatar`,
}
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  [`&.${classes.root}`]: {},
  [`& .${classes.avatar}`]: {
    width: 60,
    height: 60,
  },
}))

const TopBar = ({ className, onMobileNavOpen, ...rest }) => {
  const location = useLocation()
  const [entityName, setEntityName] = useState(getEntityNameFromUrl())
  useEffect(() => {
    const entityName = setEntityName(getEntityNameFromUrl())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  return (
    <StyledAppBar
      sx={{ zIndex: 2000 }}
      className={classes.root}
      elevation={0}
      {...rest}
    >
      <Toolbar>
        <RouterLink to="/app/dashboard">
          <Logo />
        </RouterLink>
        <Typography
          variant="h3"
          component="div"
          style={{ fontFamily: 'Monospace', fontWeight: 'bold' }}
        >
          <Translate
            entityName={'navbar.' + entityName}
            defaultMessage={stringPrettyCapitalize(entityName)}
          />
        </Typography>
        <Box flexGrow={1} />
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge badgeContent={1} color="primary" variant="dot">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <InputIcon />
          </IconButton>
          <LocaleSwitch locales={locales} />
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </StyledAppBar>
  )
}

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
}

export default TopBar
