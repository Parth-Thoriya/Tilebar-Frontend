import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Typography from '@mui/material/Typography';
export default function Footer() {
    return (
        <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <Typography color="white">
                        Get connected with us on social networks:
                    </Typography>
                </div>

                <div className='row'>
                    <a href='' className='col me-4 text-reset'>
                        <Typography color="white">
                            <MDBIcon fab icon="facebook-f" />
                        </Typography>
                    </a>
                    <a href='' className='col me-4 text-reset'>
                        <Typography color="white">
                            <MDBIcon fab icon="twitter" />
                        </Typography>
                    </a>
                    <a href='' className='col me-4 text-reset'>
                        <Typography color="white">
                            <MDBIcon fab icon="google" />
                        </Typography>
                    </a>
                    <a href='' className='col me-4 text-reset'>
                        <Typography color="white">
                            <MDBIcon fab icon="instagram" />
                        </Typography>
                    </a>
                    <a href='' className='col me-4 text-reset'>
                        <Typography color="white">
                            <MDBIcon fab icon="linkedin" />
                        </Typography>
                    </a>
                    <a href='' className='col me-4 text-reset'>
                        <Typography color="white">
                            <MDBIcon fab icon="github" />
                        </Typography>
                    </a>
                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon icon="gem" className="me-3" />
                                <Typography color="white">
                                    TileBar
                                </Typography>
                            </h6>
                            <Typography color="white">                                
                            Tilebar is an online retailer offering a vast selection of tiles for various purposes, including home improvement projects and commercial spaces. They provide quality products and convenient online shopping experience.                                
                            </Typography>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                        <Typography color="white">
        
                            <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
        </Typography>
                            <p>
                                <a href='#!' className='text-reset'>
                                    <Typography color="white">
                                        Angular

                                    </Typography>
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    <Typography color="white">

                                        React
                                    </Typography>
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    <Typography color="white">
                                        Vue

                                    </Typography>
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    <Typography color="white">
                                        Laravel

                                    </Typography>
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                        <Typography color="white">        
                            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
        </Typography>
                            <p>
                                <a href='#!' className='text-reset'>
                                    <Typography color="white">
                                        Pricing
                                    </Typography>
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    <Typography color="white">

                                        Settings
                                    </Typography>
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    <Typography color="white">

                                        Orders
                                    </Typography>
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    <Typography color="white">

                                        Help
                                    </Typography>
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <Typography color="white">                                   
                            <h6 className='text-uppercase fw-bold mb-4'>
                                     Contact
                            </h6>
                                </Typography>
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                <Typography color="white">
                                    New York, NY 10012, US
                                </Typography>
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                <Typography color="white">

                                    tilebar@gmail.com
                                </Typography>
                            </p>
                            <p>
                                <Typography color="white">

                                    <MDBIcon icon="phone" className="me-3" /> +91 99125 93867
                                </Typography>
                            </p>
                            <p>
                                <Typography color="white">

                                    <MDBIcon icon="phone" className="me-3" /> +91 89512 68934
                                </Typography>
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                <Typography color="white">

                    © 2023 Copyright:
                </Typography>
                <a className='text-reset fw-bold' href='https://www.tilebar.com/' target='_blank'>
                    <Typography color="white">

                        Tilebar.com
                    </Typography>
                </a>
            </div>
        </MDBFooter>
    );
}