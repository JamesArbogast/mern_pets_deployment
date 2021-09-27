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
import {Carousel, Image, Col, Container, Row, Overlay, Dropdown} from 'react-bootstrap';


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
					<Container className='d-flex flex-column align-items-center w-100 bcolor2' fluid>
						<h3 className="mt-4 colorW">I'm looking for a...</h3>
						<Dropdown className="mb-4 p-4">
							<Dropdown.Toggle id="dropdown-button-dark-example1" variant="light" className="w-100 p-4">
								Pet Type
							</Dropdown.Toggle>
							<Dropdown.Menu variant="light">
								<Dropdown.Item href="/pets/dogs">Dog</Dropdown.Item>
								<Dropdown.Item href="/api/pets/cats">Cat</Dropdown.Item>
								<Dropdown.Item href="/api/pets/other">Other</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Container>
					<Container className="d-flex bcolor4 w-100" fluid>
						<Container className="w-25 rounded shadow d-flex flex-column h-100 bcolor5 p-4" fluid>
							<p className="overlayText">Featured Pets</p>
							<Carousel fade interval={5000} keyboard={false} pauseOnHover={true} className="w-100 rounded h-auto">
								<Carousel.Item style={{ height: '300px', borderRadius: "5px"}} className="rounded">
									<img
										style={{ height: '300px' }}
										className="d-block w-100 rounded"
										src={'assets/img/banner1.png'}
									/>
									<Carousel.Caption>
										<h3>Luigi</h3>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item style={{ height: '300px' }}>
									<img
										style={{ height: '300px' }}
										className="d-block w-100 rounded"
										src={'assets/img/banner2.png'}
									/>
									<Carousel.Caption>
										<h3>Stella</h3>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item style={{ height: '300px' }}>
									<img
										style={{ height: '300px' }}
										className="d-block w-100 rounded"
										src={'assets/img/banner3.png'}
									/>
									<Carousel.Caption>
										<h3>Munch</h3>
									</Carousel.Caption>
								</Carousel.Item>
							</Carousel>
						</Container>
						<Container className="w-25 rounded shadow d-flex flex-column h-100 bcolor5 p-4" fluid>
							<p className="overlayText">Volunteer With Us</p>
							<Carousel fade interval={5000} keyboard={false} pauseOnHover={true} className="w-100 rounded h-auto">
								<Carousel.Item style={{ height: '300px', borderRadius: "5px"}} className="rounded">
									<img
										style={{ height: '300px' }}
										className="d-block w-100 rounded"
										src={'assets/img/banner1.png'}
									/>
									<Carousel.Caption>
										<h3>Luigi</h3>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item style={{ height: '300px' }}>
									<img
										style={{ height: '300px' }}
										className="d-block w-100 rounded"
										src={'assets/img/banner2.png'}
									/>
									<Carousel.Caption>
										<h3>Stella</h3>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item style={{ height: '300px' }}>
									<img
										style={{ height: '300px' }}
										className="d-block w-100 rounded"
										src={'assets/img/banner3.png'}
									/>
									<Carousel.Caption>
										<h3>Munch</h3>
									</Carousel.Caption>
								</Carousel.Item>
							</Carousel>
						</Container>
						</Container>
				</div>
			</div>
		);
	}
}

export default Home;
