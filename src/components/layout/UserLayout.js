import {  Button, ConfigProvider, Layout, theme} from 'antd'
import { Content, Footer, } from 'antd/es/layout/layout'
import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const iteminfo = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      name: "Aboutus",
      link: "/aboutus",
    },
    {
      name: "Contact",
      link: "/contactus",
    },
    
  ];
  const authInfo = [
    {
      name: "Login",
      link: "/auth/login",
    },
   
    {
      name: "SignUp",
      link: "/auth/signup",
    },
  ];

const UserLayout = () => {
  
  return (
    <div>
       <ConfigProvider
      theme={{
        components: {
          Layout: {
            fontSize: 16,
            footerBg: "black",
          },
        },
      }}
    >

<Layout className=" font-madimi">
 <div style={{ color:'white',
    display: 'flex',
    alignItems: 'center',
    backgroundColor:'black',
    // backgroundImage: 'linear-gradient(to right, #fecaca 20%, rgb(253, 169, 183) 40%, #fecaca 90%)',
    width: '100%',
    height:'50px',
    position:'fixed',
    zIndex: 10,
    paddingLeft: '1rem', // Assuming 1rem = 16px
    paddingRight: '1rem',
  }}>
             <img style={{
               width: 50,
               height: 50,
               borderRadius: '60%', // Make it circular
               backgroundColor: '#fed7aa', // Example background color
               textAlign: 'center',
               lineHeight: '60px', 
               fontSize: 26, 
            }} 
            src="/logo2.png" alt="SwiftEvent"  />
            <span style={{  /* Adjust font size as needed */
  color: "white", fontFamily:'Copperplate'}}>SwiftEvents</span>
         
         <div className="gap-6 flex mx-auto">
              {iteminfo?.map((item, idx) => (
                <div key={idx}>
                  <Link to={item.link}>
                    <h1 >{item.name}</h1>
                  </Link>
                </div>
              ))}
            </div>
    {/* <div className="flex items-center md:max-w-0 ">
    <Search placeholder="input search text" />
</div> */}
<div className=" flex gap-2">
              {authInfo?.map((item, idx) => {
                return (
                  <div key={idx}>
                    <Link to={item.link}>
                      <h1 style={{background: 'black', padding:'0.1rem 0.1rem', borderRadius: '0.1rem', border: '1px solid white'}}>{item.name}</h1>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
      <Content
        style={{
            minHeight: '535px', 
            paddingTop: '2.5rem',
            width:"100%",
          }}
      >
       <Outlet/>
      </Content>
      <Footer style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', backgroundColor: 'black', padding: '5px 0', fontSize: '14px', textAlign: 'center' }}>
    <div style={{ flex: '1', textAlign: 'center' }}>
        <div style={{ marginBottom: '20px' }}>
            <p style={{ marginBottom: '10px', fontWeight: 'bold' }}>Follow Us</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a href="https://www.facebook.com/sachina.oli.988/" style={{ marginRight: '10px' }} target="_blank" rel="noopener noreferrer">
                    <img src="https://th.bing.com/th/id/OIP.Vl2DvNgdQ2McNmVZC4UaCgHaHa?pid=ImgDet&w=474&h=474&rs=1" alt="Facebook" style={{ width: '30px', height: '30px' }} />
                </a>
                <a href="https://www.instagram.com/sachinaoli/" target="_blank" rel="noopener noreferrer">
                    <img src="https://th.bing.com/th/id/OIP.VDkf14-_VAgjryLveN3ImQEgDY?pid=ImgDet&w=474&h=355&rs=1" alt="Instagram" style={{ width: '30px', height: '30px' }} />
                </a>
            </div>
        </div>
        <Button style={{ marginBottom: '20px' }}><a href='Contactus' style={{ color: 'Black', textDecoration: 'none' }}>Contact Us</a></Button>
        <div>
            <p style={{ marginBottom: '5px' }}>Phone: 9847592389</p>
            <p>Email: hello@swiftevents.com</p>
        </div>
        <div style={{ margin: 0,
      padding: 0,
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',}}> 
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5223576470025!2d85.33977647551966!3d27.70115387618616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199c88cfa867%3A0xad75b35e97cc392f!2sP82R%2BGW4%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1714737999516!5m2!1sen!2snp"  ></iframe>
        </div>
        <p style={{ marginTop: '20px', fontSize: '12px' }}>© 2022 SwiftEvents Hire. All Rights Reserved.</p>
    </div>
</Footer>
    </Layout>
    </ConfigProvider>
    </div>
  )
}

export default UserLayout
