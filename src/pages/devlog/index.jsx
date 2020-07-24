import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import MidMenu from '../../components/MidMenu'

export default function index() {
  return (
    <Layout>
    <SEO title="Home" />
      <MidMenu />
  </Layout>
  )
}
