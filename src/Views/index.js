import React from 'react'
import { Row, Col, Container } from 'react-grid-system';

import DrawerBtn from '../Components/DrawerBtn.js'
import SlideDrawer from '../SlideDrawer/SlideDrawer.js'
import Backdrop from '../SlideDrawer/Backdrop.js'
import Modal from './../Components/Modal/index';

// const JaacLogo = './../assets/Logo.png';
import { ReactComponent as BarCodeIcon } from './../assets/qrscan_qr_icon_button.svg';
import { ReactComponent as MenuIcon } from './../assets/navigation_menu_icon_inactive.svg';
import { ReactComponent as OrderIcon } from './../assets/navigation_orders_icon_inactive.svg';
import { ReactComponent as CallWaiterIcon } from './../assets/navigation_call_icon_inactive.svg';

import './index.css';

class Home extends React.Component {
   state = { drawerOpen: false }
   drawerToggleClickHandler = () => {
       this.setState({
         drawerOpen: !this.state.drawerOpen
       })
   }

   render(){
      let backdrop;
      if(this.state.drawerOpen){
        backdrop = <Backdrop/>;
       }
      return(<>
      <Modal />
          <div class="main-container">
            <SlideDrawer show={this.state.drawerOpen} onClose={this.drawerToggleClickHandler}/>
            { backdrop }

            <div class="header-container">
                <div class="drawer-btn-div">
                    <DrawerBtn toggle={this.drawerToggleClickHandler}/>
                </div>
            </div>

             <Container class="content-container">

                <Row class="logo-div">
                    <img src='assets/logo.png' class="logo-img" alt="Logo" />
                </Row>

                <Row class="content-div">
                    <Col>
                        <h1 class="heading-01">Hi, I’m Jaac!</h1>
                        <h1 class="heading-01">Your E-waiter</h1>

                        <a href="#" class="scan-qr-btn">
                            <div class="scan-qr-btn-icon">
                                <BarCodeIcon />
                            </div>
                            <div class="scan-qr-btn-text">Scan QR Code</div>
                        </a>

                        <p class="instration-p">Click the Scan QR Code button to turn on your phone’s camera and scan the QR code on your table!</p>

                        <p class="note-p">I'll show you this restaurant's menu and take your orders. With me, you can call a waiter and ask for the bill with one click.</p>
                    </Col>
                </Row>

             </Container>

             <div class="footer-container">
                <Container>
                    <Row>
                        <Col class="footer-icon-col">
                            <a href="#openModal" class="bar-code-main">
                                <div class="bar-code-btn-icon-view">
                                    <BarCodeIcon />
                                </div>
                                <span class="footer-btn-text">Scan QR</span>
                            </a>
                        </Col>
                        <Col class="footer-icon-col">
                            <a href="#openModal" class="bottom-href">
                                <div class="bar-code-btn-icon-other">
                                    <MenuIcon />
                                </div>
                                <span class="footer-btn-text">Menu</span>
                            </a>
                        </Col>
                        <Col class="footer-icon-col">
                            <a href="#openModal" class="bottom-href">
                                <div class="bar-code-btn-icon-other">
                                    <OrderIcon />
                                </div>
                                <span class="footer-btn-text">Orders</span>
                            </a>
                        </Col>
                        <Col class="footer-icon-col">
                            <a href="#openModal" class="bottom-href">
                                <div class="bar-code-btn-icon-other">
                                    <CallWaiterIcon />
                                </div>
                                <span class="footer-btn-text">Call Waiter</span>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
          </div>
        </>)  
    }
  }

export default Home;