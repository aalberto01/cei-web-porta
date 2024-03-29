/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from 'react'
import { BlogsRecientes } from '../componentes/BlogsRecientes'
import { useModals } from '@mantine/modals'

import '../styles/Blog.css'
import { NavbarAdmin } from '../componentes/NavbarAdmin'

import { Button, MantineProvider, useMantineTheme } from '@mantine/core'

export const BlogAdmin = () => {
  const  sizemodal = window.innerWidth > 1000 ? 'calc(80% - 4rem)' : 'calc(100% - 0rem)';

  const modals = useModals()
  const theme = useMantineTheme()

  const agregarBlogModal = () => {
    const id = modals.openContextModal('agregarBlogModal', {
      overlayColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[9]
          : theme.colors.gray[2],
      overlayOpacity: 0.55,
      overlayBlur: 3,
      centered: true,
      padding: 'xl',
      size: sizemodal,
      innerProps: {}
    })
  }

  const verBlogModal = () => {
    const id = modals.openContextModal('verBlogModal', {
      overlayColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[9]
          : theme.colors.gray[2],
      overlayOpacity: 0.55,
      overlayBlur: 3,
      centered: true,
      padding: 'xl',
      size: 'calc(100% - 2rem)',
      innerProps: {}
    })
  }

  return (
    <div>
      <MantineProvider
        theme={{ fontFamily: 'Poppins, sans-serif' }}
        withGlobalStyles
      >
        <div className='blog casos'>
          <div className='blog-container flex'>
            <div className='casos-title section-title'>
              NUESTRO<span style={{ color: '#e1575f' }}> BlOG 🛸</span>
              <div className='casos-subtitle'>RECURSOS & CONOCIMIENTOS</div>
              <div className='casos-admin-btns'>
                <div>
                  <Button
                    radius='xs'
                    size='md'
                    uppercase
                    variant='gradient'
                    gradient={{ from: 'indigo', to: 'cyan' }}
                    onClick={agregarBlogModal}
                  >
                    Agregar Blog
                  </Button>
                </div>
                <div>
                  <Button
                    radius='xs'
                    size='md'
                    uppercase
                    variant='outline'
                    color='#e1575f'
                    onClick={verBlogModal}
                  >
                    Ver Blogs
                  </Button>
                </div>
              </div>
            </div>

            <div className='casos-content'>
              <div className='casos-section'>
                <BlogsRecientes />
              </div>
            </div>
          </div>
        </div>
      </MantineProvider>
    </div>
  )
}
