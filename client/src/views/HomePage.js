import React, { useEffect, useState, Component } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import '../App.css';
import Cat from '../Img/cat_sillouette.png'
import {Carousel, Image, Col, Container, Row} from 'react-bootstrap';
export class Home extends Component {
	render() {
		return (
			<div>
				<div className="container-fluid">
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
					<Container className="d-flex justify-content-around">
					<Row>
						<Col xs={6} md={4}>
						<img
								style={{ height: '200px', width: '175px', margin: '50px'}}
								src={Cat}
							/>
						</Col>
						<Col xs={6} md={4}>
						<img
								style={{ height: '200px', width: '175px', margin: '50px'}}
								src={Cat}
							/>
						</Col>
						<Col xs={6} md={4}>
						<img
								style={{ height: '200px', width: '175px', margin: '50px'}}
								src={Cat}
							/>
						</Col>
					</Row>
				</Container>
				</div>
			</div>
		);
	}
}

export default Home;
