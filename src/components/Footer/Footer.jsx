
import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Row, Col , ListGroup, ListGroupItem} from 'reactstrap' ;

import "./footer.css"


const MY_ACCOUNT = [
    {
        display:'Author Profile',
        url: '/sellerprofile'
    },

    {
        display:'MintItem',
        url: '/sellerprofile'
    },

    {
        display:'HowToMint',
        url: '/sellerprofile'
    },
]

const RESOURCES = [
    {
        display:'Help Center',
        url: '#'
    },

    {
        display:'Partner',
        url: '#'
    },

    {
        display:'Comunity',
        url: '#'
    },
]

const COMPANY = [
    {
        display:'About',
        url: '#'
    },

    {
        display:'Career',
        url: '#'
    },

    {
        display:'Contact us',
        url: '#'
    },
]

const Footer = () => {
    return (
    <footer className="footer">
        <Container>
            <Row>
                <Col lg='3' md='6' sm='6'>
                <div className="logo">
                        <h2 className=" d-flex gap-2 align-items-center">
                            <span>
                                <i class="ri-fire-fill"></i>
                            </span>
                            NFT'S
                        </h2>
                        <p className="created">CREATED BY MARIO FERLITO</p>
                    </div>
                </Col>

                <Col lg='2' md='3' sm='6'>
                    <h5>My Account</h5>
                    <ListGroup className="list__group">
                        {
                        MY_ACCOUNT.map((item,index)=> (
                            <ListGroupItem key={index} className="list__item">
                                <Link  to={item.url}> {item.display}</Link>
                            </ListGroupItem>
                        ))
                        }
                    </ListGroup>

                </Col>
                 
                <Col lg='2' md='3' sm='6'>
                <h5>Resources</h5>
                    <ListGroup className="list__group">
                        {COMPANY.map((item,index)=> (
                            <ListGroupItem key={index} className="list__item">
                                <Link  to={item.url}> {item.display}</Link>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </Col>

                <Col lg='2' md='3' sm='6'>
                <h5>Company</h5>
                    <ListGroup className="list__group">
                        {RESOURCES.map((item,index)=> (
                            <ListGroupItem key={index} className="list__item">
                                <Link  to={item.url}> {item.display}</Link>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </Col>

                <Col lg='3' md='6' sm='6'>
                    <h5>Newsletter</h5>
                    <input type="text" className="newsletter" placeholder="Email" />
                    <div className="social__links d-flex gap-3 align-items-center ">
                        <span><a href={"https://www.facebook.com/mario.ferlito.1/"}><i class="ri-facebook-line"></i></a></span>
                        <span><a href={"https://www.instagram.com/mario.ferlito/"}><i class="ri-instagram-line"></i></a></span>
                        <span><a href={"https://twitter.com/ferlitomario99"}><i class="ri-twitter-line"></i></a></span>
                        <span><a href={"https://discord.com/"}><i class="ri-discord-line"></i></a></span>
                        <span><a href={"https://www.linkedin.com/in/mario-ferlito-06bba6174/"}><i class="ri-linkedin-line"></i></a></span>
                    </div>
                </Col>
                <Col lg='12' className=" mt-4 text-center">
                    <p className="copyright">
                         Copyrights 2022, Developed by Ferlito Mario
                         </p>

                </Col>
            </Row>
        </Container>

    </footer>
    );
};

export default Footer
