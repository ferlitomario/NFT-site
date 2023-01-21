import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Link } from 'react-router-dom';
import './hero-section.css'

import HeroImg from "../../assets/nft-bored-ape.png"

const HeroSection = () => {
    return <section className="hero__section">
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="hero__content">
                        <h2>Mint your NFT  and <br></br>
                            <span> 
                                collect them!
                        </span>
                        </h2>
                        <h3>Are you ready to mine your favorite NFT? <br/>
                        connect your wallet, mint and enjoy them.</h3>
                        <div className="hero__btns d-flex align-items-center gap-4">
                        <button className=" d-flex align-items-center gap-2"><i class="ri-money-dollar-circle-line"></i><Link to='/mintpages'>MINT</Link></button>
                        <button className=" d-flex align-items-center gap-2"><i class="ri-links-line"></i><Link to='/mintpages'>OPENSEA</Link></button>
                        </div>
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <div className="hero__img">
                        <img src={HeroImg} alt="" className="w-20" />
                    </div>
                </Col>
            </Row>
        </Container>


    </section>
        
    
}

export default HeroSection
