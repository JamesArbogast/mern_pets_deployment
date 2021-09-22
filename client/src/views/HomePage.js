import React, { useEffect, useState, Component } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import '../App.css';
import Cat from '../Img/cat_sillouette.png'
import Dog from '../Img/dog_sillouette.png'
import Rabbit from '../Img/rabbit_sillouette.png'
import Search from '../Img/search-icon.png'
import Meet from '../Img/human_dog.png'
import Adopt from '../Img/pet_adoption.png'
import Doggo from '../Img/doggo_banner.jpeg'
import {Carousel, Image, Col, Container, Row, Overlay} from 'react-bootstrap';


export class Home extends Component {
	render() {
		return (
			<div className="w-100" fluid>
				<div className="w-100" fluid>
				<Image src={Doggo} fluid />
					<Container className='d-flex justify-content-center bcolor1 w-100' fluid>
						<h3 className="mt-4">Your Pet Adoption Journey</h3>
					</Container>
					<Container className="d-flex justify-content-center bcolor1 w-100" fluid>
					<Row className="w-80">
						<Col xs={6} md={4}>
						<img
								style={{ height: '200px', width: '200px', margin: '50px 50px 30px 50px'}}
								src={Search}
							/>
							<h5 style={{ textAlign: 'center'}} className="mb-4">Search</h5>
						</Col>
						<Col xs={6} md={4}>
						<img
								style={{ height: '200px', width: '200px', margin: '50px 50px 30px 50px'}}
								src={Meet}
							/>
							<h5 style={{ textAlign: 'center'}} className="mb-4">Meet</h5>
						</Col>
						<Col xs={6} md={4}>
						<img
								style={{ height: '200px', width: '220px', margin: '50px 50px 30px 50px'}}
								src={Adopt}
							/>
							<h5 style={{ textAlign: 'center'}} className="mb-4">Adopt</h5>
						</Col>
					</Row>
				</Container>
					<Container className='d-flex justify-content-center w-100 bcolor2' fluid>
						<h3 className="mt-4">I'm looking for a...</h3>
					</Container>
					<Container className="d-flex justify-content-center w-100 bcolor2" fluid>
					<Row className="w-80">
						<Col xs={6} md={4}>
						<img
								style={{ height: '200px', width: '220px', margin: '50px 50px 50px 50px'}}
								src={Dog}
							/>
							<h5 style={{ textAlign: 'center'}} className="mb-4">Dog</h5>
						</Col>
						<Col xs={6} md={4}>
						<img
								style={{ height: '200px', width: '220px', margin: '50px 50px 50px 50px'}}
								src={Cat}
							/>
							<h5 style={{ textAlign: 'center'}} className="mb-4">Cat</h5>
						</Col>
						<Col xs={6} md={4}>
						<img
								style={{ height: '200px', width: '220px', margin: '50px 50px 50px 50px'}}
								src={Rabbit}
							/>
							<h5 style={{ textAlign: 'center'}} className="mb-4">Other</h5>
						</Col>
					</Row>
				</Container>
					<Carousel interval={5000} keyboard={false} pauseOnHover={true} className="w-100">
						<Carousel.Item style={{ height: '600px'}}>
							<img
								style={{ height: '600px' }}
								className="d-block w-100"
								src={'assets/img/banner1.png'}
							/>
							<Carousel.Caption>
								<h3>Search</h3>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item style={{ height: '600px' }}>
							<img
								style={{ height: '600px' }}
								className="d-block w-100"
								src={'assets/img/banner2.png'}
							/>
							<Carousel.Caption>
								<h3>Meet</h3>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item style={{ height: '600px' }}>
							<img
								style={{ height: '600px' }}
								className="d-block w-100"
								src={'assets/img/banner3.png'}
							/>
							<Carousel.Caption>
								<h3>Adopt</h3>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</div>
			</div>
		);
	}
}

export default Home;
