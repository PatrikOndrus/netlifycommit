import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { styled } from '@mui/material'
import NavBar from './NavBar'
import TopBar from './TopBar'

const PREFIX = 'DashboardLayout'
const classes = {
  root: `${PREFIX}-root`,
  wrapper: `${PREFIX}-wrapper`,
  contentContainer: `${PREFIX}-contentContainer`,
  content: `${PREFIX}-content`,
}
const StyledDashboard = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    backgroundColor: theme.palette.background?.dark,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
  },
  [`& .${classes.wrapper}`]: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256,
    },
  },
  [`& .${classes.contentContainer}`]: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
  [`& .${classes.content}`]: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
  },
}))

const DashboardLayout = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <StyledDashboard className={classes.root}>
      {/* // @ts/ignore */}
      <TopBar className="" onMobileNavOpen={() => setMobileNavOpen(true)} />
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <Outlet />
          </div>
        </div>
      </div>
    </StyledDashboard>
  )
}

export default DashboardLayout
