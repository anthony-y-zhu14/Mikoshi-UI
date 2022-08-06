import React from 'react'
import {
  Container,
  Typography,
  Box,
  Toolbar,
  AppBar
} from '@mui/material'
import NavTabs from 'components/nav-bar/nav-tabs/component'
// import { AppBar } from '@mikoshi/core-components'
import { RouteData } from 'types/route'

const AUTHOR_NAME = 'Anthony Y. Zhu'

export default function NavBar (props: {routes: Array<RouteData>, onRouteChange: (_route: string) => void, currentRoute?: string}) {
  const { routes, currentRoute, onRouteChange } = props

  return (
    <AppBar color='primary' position='fixed' >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography variant='h6' sx={{ mr: 2, display: { xs: 'none', sm: 'block', md: 'block' } }}>
            {AUTHOR_NAME}
          </Typography>
          <Box sx={ { flexGrow: 1, display: 'flex', justifyContent: { xs: 'center', sm: 'center', md: 'center', lg: 'flex-end' } }}>
            <NavTabs routes={routes} currentRoute={currentRoute} onRouteChange={onRouteChange} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}