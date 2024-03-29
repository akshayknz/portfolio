import React, { Component, useEffect, useState, useRef, ReactNode } from "react";
import type { NextPage } from "next";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Head from "next/head";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";
import Link from 'next/link'
import { Button } from "../components/elements";
import { VscArrowRight, VscGithubAlt } from "react-icons/vsc";
import { RiStackOverflowFill, RiLinkedinLine } from "react-icons/ri";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsSun, BsMoonStars } from "react-icons/bs";
import { AboutText } from "./AboutBlock";
import Script from "next/script";
import { useRouter, withRouter, NextRouter  } from "next/router";
import { CSSTransition } from 'react-transition-group';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));
interface LayoutProps {
  toggleColorScheme: React.MouseEventHandler<HTMLButtonElement> | undefined;
  toggleColorSchemeLight: React.MouseEventHandler<HTMLButtonElement> | undefined;
  toggleColorSchemeDark: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children: ReactNode;
}
const Layout: NextPage<LayoutProps> = ({toggleColorScheme, toggleColorSchemeLight, toggleColorSchemeDark, children}:LayoutProps) => {
  const router = useRouter()
  const [menu, setMenu] = useState(0);
  const menuRef = useRef<HTMLInputElement>(null);
  const ssRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
  },[])
    const openMenu = () => {
      setMenu(1-menu)
      console.log(menu);
    }
    return (
      <div data-scroll-container style={{transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}}>
        <Head>
          <html lang="en" />
          <title>AKSHAY K NAIR, Software Engineer</title>
          <meta
            name="description"
            content="Portfolio of Akshay K Nair, Software Engineer"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="canonical" href={(`https://akshaykn.vercel.app` + (router.asPath === "/" ? "": router.asPath)).split("?")[0]} />
          <meta property="og:site_name" content="AKSHY"/>
          <meta property="og:type" content= "website" />
          <meta property="og:url" content={(`https://akshaykn.vercel.app` + (router.asPath === "/" ? "": router.asPath)).split("?")[0]} />
          <meta property="og:image" content="https://akshaykn.vercel.app/akshay_k_nair.webp" />
          <meta property="og:image:secure_url" content="https://akshaykn.vercel.app/akshay_k_nair.webp" />
          <meta name="twitter:card" content="summary"/>
          <meta name="twitter:domain" content="akshaykn.vercel.app/"/>
          <link rel="alternate" href="https://akshaykn.vercel.app/" />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-3WX9F6G7GB"></Script>
          <Script id="gtag-script"
  strategy="afterInteractive" dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];function gtag(){
                dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-3WX9F6G7GB');`,}}
          />
        <Navigation maxWidth={false} >
          <NavigationInner data-scroll-sticky data-scroll-target="scroll-direction" id="fixed-navbar">
            <Box>
              
            <Link href="/"><a><Logo>AKSHAY K NAIR</Logo></a></Link>
            </Box>
            <Box>
              <Box className="hamburger-round" onClick={openMenu} ref={menuRef} data-state={menu} >
                <Box className="hamburger"></Box>
              </Box>
            </Box>
          </NavigationInner>
        </Navigation>
        <Box className="menu-wrapper" data-state={menu}>

        <Grid container maxWidth="lg">
        
          <Grid
            item data-aos="anim1" data-aos-delay="100"
            xs={12}
            md={5}
            sx={{ display: "flex", justifyContent: "center", py:3, alignItems: 'flex-end' }}
          >
            <Stack direction="column" spacing={4} sx={{alignItems: 'flex-start','@media (max-width: 900px)':{alignItems: 'center', justifyContent:'center'}}}>
                <Link href="/"><a className="menu-links"><Typography variant="h4" onClick={openMenu}>Home</Typography></a></Link>
                <Link href="/about"><a className="menu-links"><Typography variant="h4" onClick={openMenu}>About</Typography></a></Link>
                <Link href="/work"><a className="menu-links"><Typography variant="h4" onClick={openMenu}>Works</Typography></a></Link>
                <Link href="/blog"><a className="menu-links"><Typography variant="h4" onClick={openMenu}>Blog</Typography></a></Link>
                <Link href="/contact"><a className="menu-links"><Typography variant="h4" onClick={openMenu}>Contact</Typography></a></Link>
                <Typography className="menu-links">
                  <MaterialUISwitch 
                    onClick={toggleColorScheme} 
                    inputProps={{ 'aria-label': 'Toggle dark theme' }}
                  />
                </Typography>
              </Stack>
          </Grid>
          <Grid item xs={12} md={6} sx={{display:"flex", alignItems:"center", '@media (max-width: 900px)':{display:'none'}}}>
            <AboutText classText="menu-links"/>
          </Grid>
        </Grid>
              
        </Box>
        <Loading/>
<div id="scroll-direction" data-scroll-section style={{zIndex:1, position:'relative'}}>

        {children}
</div>
        <Grid data-scroll-section container spacing={5} justifyContent="center" sx={{background:"linear-gradient(45deg, rgb(var(--one)/81%) -47%, rgb(var(--two)/30%) 93%)"}}>
          <Grid item xs={10} md={5} >
            <FooterWrapper>
              <Typography  data-aos="anim1"
                sx={{ fontSize: "10vw !important", opacity: ".3", fontWeight: "100", textAlign:{
                  xs: "center",
                  md: "left"
                } }}
              >
                AKSHY
              </Typography>
            </FooterWrapper>
          </Grid>
          <Grid item xs={10} md={5}>
            <FooterWrapper>
              <Stack direction="row" spacing={2}>
              <Stack sx={{width:"30%", justifyContent:"space-between"}}>
                <span><Typography align="left" onClick={toggleColorSchemeLight} data-aos="anim1" data-aos-delay="350"><BsSun /></Typography></span>
                <span><Typography align="left" onClick={toggleColorSchemeDark} data-aos="anim1" data-aos-delay="350"><BsMoonStars /></Typography></span>
              </Stack>  
              <Stack sx={{width:"70%", justifyContent:"space-between"}}>
                <Link href="/">
                  <Typography style={{cursor:"pointer"}} align="right" data-aos="anim1" data-aos-delay="50">Home</Typography>
                </Link>
                <Link href="/work">
                  <Typography style={{cursor:"pointer"}} align="right" data-aos="anim1" data-aos-delay="100">Work</Typography>
                </Link>
                <Link href="/about">
                  <Typography style={{cursor:"pointer"}} align="right" data-aos="anim1" data-aos-delay="150">About</Typography>
                </Link>
                <Link href="/blog">
                  <Typography style={{cursor:"pointer"}} align="right" data-aos="anim1" data-aos-delay="150">Blog</Typography>
                </Link>
                <Link href="/contact">
                  <Typography align="right" data-aos="anim1" data-aos-delay="200">Contact Me</Typography>
                </Link>
                <a href="/Akshay-K-Nair-Resume.pdf" download>
                  <Typography align="right" data-aos="anim1" data-aos-delay="200">Download Résumé</Typography>
                </a>
                <a href="https://www.linkedin.com/in/akshay-k-nair/" target="_blank" rel="noreferrer">
                  <Typography align="right" data-aos="anim1" data-aos-delay="200">LinkedIn</Typography>
                </a>
                <a href="https://github.com/akshayknz" target="_blank" rel="noreferrer">
                  <Typography align="right" data-aos="anim1" data-aos-delay="250">Github</Typography>
                </a>
                <a href="https://stackoverflow.com/users/7481663/akshay-k-nair" target="_blank" rel="noreferrer">
                  <Typography align="right" data-aos="anim1" data-aos-delay="300">StackOverflow</Typography>
                </a>
                <a href="https://api.whatsapp.com/send?phone=+918301044114&text=Hi%20Akshay!" target="_blank" rel="noreferrer">
                  <Typography align="right" data-aos="anim1" data-aos-delay="350">WhatsApp</Typography>
                </a>
              </Stack>  
              </Stack>
            </FooterWrapper>
          </Grid>
          <Grid item xs={11}><hr></hr></Grid>
          
          <Grid item xs={10}>
            <Typography align="center" mb={4}>
          &copy;&nbsp; Not at all copyrighted by Akshay K Nair.
        </Typography>
          </Grid>
        </Grid>
      </div>
    );
}

export default Layout;

const Navigation = styled(Container)({
  height: "auto",
  paddingBlock: "13px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  position: "sticky",
  top: 0,
  zIndex: 20,
  backdropFilter: 'blur(7px)',
  boxShadow: '0 0 20px 0 #0000001a',
  background: 'linear-gradient(0deg, transparent, rgb(var(--background) / 85%))'
});

const NavigationInner = styled(Container)({
  width: "90%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
});

const FooterWrapper = styled(Container)({
  paddingBlock: '20px',
  overflow:'hidden'
});

const Logo = styled(Typography)({
  padding: '2px 8px',
  fontWeight: '500'
})

const Footer = styled("footer")({});

function Loading() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    router.events.on('routeChangeStart', (url) => {
      setLoading(true);
    });
    router.events.on('routeChangeComplete', (url) => {
        setLoading(false);
    });
    router.events.on('routeChangeError', (url) => {
      setLoading(false);
    });
  })
  
  // return loading? <div>Loading....</div>:<div>Loaded</div>;
  return(
    <>
    <CSSTransition
        in={loading}
        timeout={500}
        classNames={{
          appear: 'loading-screen',
          appearActive: 'loading-screen',
          appearDone: 'loading-screen',
          enter: 'loading-screen',
          enterActive: 'loading-screen',
          enterDone: 'loading-screen',
          exit: 'loading-screen',
          exitActive: 'loading-screen',
          // exitDone: 'loading-screen',
        }}
      >
        <LoadingScreeen>
          <Typography variant="h1">
            AKSHY
          </Typography>
        </LoadingScreeen>
      </CSSTransition>
      
    </>
  );
}

const LoadingScreeen = styled(Box)(({ theme }) => (`
  background:${theme.palette.mode == "dark"? "#000":"#fff"};
  position:fixed;
  height: 100vh;
  top:0;
  opacity:0;
  left:0;
  width:100vw;
  z-index:-10;
  transition: all .3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`))