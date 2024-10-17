import { Stack } from '@mui/material'
import React from 'react'
import { Header } from './header/header'
import { Outlet } from 'react-router-dom/dist'
import { Footer } from './footer/footer'

export const MainLayout = () => {
  return (
    <div>
      <Stack>
        <Header
        />
      </Stack>
      <Outlet />
      <Stack>
        <Footer/>
      </Stack>
    </div>
  )
}

