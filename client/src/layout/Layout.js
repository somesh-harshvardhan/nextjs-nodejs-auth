import React from 'react'
import Container from '../layout-blocks/Container'
import FlexBox from '../layout-blocks/FlexBox'
import Footer from './Footer'
import NavItems from './NavItems'
import Search from './Search'

const Layout = ({children,layoutNav,footer,preNav=undefined,afterNav=undefined,enableSearch="false"}) => {
const styleObjNav={
    "background" : "var(--layout-nav-background)",
    "padding"  : "0 80px",
    "color"  :  "#fff"
}
  return (
   <Container>
    {preNav && preNav}
     <FlexBox justify="space-between" alignItems="center" height="60px" styleObj={styleObjNav}>
     <FlexBox >
        Logo Goes Here
     </FlexBox>
     <Search enableSearch={enableSearch}/>
     <NavItems/>
     </FlexBox>
    {afterNav && afterNav}
    {children}
    <Footer/>
   </Container>
  )
}

export default Layout