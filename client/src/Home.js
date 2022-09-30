import React from 'react'
import FlexBox from './layout-blocks/FlexBox'
import Text from './layout-blocks/Text'
import Layout from './layout/Layout'

const Home = () => {
  return (
   <Layout>
    <FlexBox minHeight="100vh" justify="center" alignItems="center">
            <Text tag="h3">This is public route</Text>
    </FlexBox>
   </Layout>
  )
}

export default Home