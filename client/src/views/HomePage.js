import React, { useEffect, useState, Component } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
export class Home extends Component {
	render() {
		return (
			<div>
				<div class="container-fluid">
					<div className="row title" style={{ marginBottom: '20px' }}>
						<div class="col-sm-12 btn btn-warning">
							How To Use Bootstrap Carousel In ReactJS
						</div>
					</div>
				</div>
				<div className="container-fluid">
					<Carousel interval={2000} keyboard={false} pauseOnHover={true}>
						<Carousel.Item style={{ height: '300px' }}>
							<img
								style={{ height: '300px' }}
								className="d-block w-100"
								src={'assets/img/banner1.png'}
							/>
							<Carousel.Caption>
								<h3>First Demo </h3>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item style={{ height: '300px' }}>
							<img
								style={{ height: '300px' }}
								className="d-block w-100"
								src={'assets/img/banner2.png'}
							/>
							<Carousel.Caption>
								<h3>Second Demo</h3>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item style={{ height: '300px' }}>
							<img
								style={{ height: '300px' }}
								className="d-block w-100"
								src={'assets/img/banner3.png'}
							/>
							<Carousel.Caption>
								<h3>Third Demo</h3>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</div>
			</div>
		);
	}
}

export default Home;
