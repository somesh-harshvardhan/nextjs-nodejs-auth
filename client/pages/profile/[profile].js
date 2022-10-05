import React from 'react'
import FlexBox from '../../src/layout-blocks/FlexBox'
import Layout from '../../src/layout/Layout';
import WithAuth from '../../src/auth/WithAuth';


const Profile = () => {
 
  return (
  <Layout>
    <FlexBox alignItems="center" justify="center" minHeight="90vh">
        This is protected route
    </FlexBox>
  </Layout>
  )
}

export default Profile;

export  const  getServerSideProps = WithAuth