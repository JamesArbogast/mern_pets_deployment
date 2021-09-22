import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import '../App.css';

const Home = (props) => {
	const [pets, setPets] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:5000/api/pets')
			.then((res) => {
				const sortedPets = res.data.sort((a, b) =>
					a.type.localeCompare(b.type)
				);
				setPets(sortedPets);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleDelete = (deletedId) => {
		axios
			.delete('http://localhost:5000/api/pets/' + deletedId)
			.then((res) => {
				// At this point it is deleted from DB but we need to cause a re-render to remove it from the page.
				const filteredPets = pets.filter((pet) => {
					return pet._id == deletedId;
				});

				setPets(filteredPets);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="container">
			<h3 className="text-center">These pets are looking for new homes.</h3>{' '}
			<hr />
			<div className="row">
				<div className="col-sm-12 d-flex">
					{pets.map((pet) => {
						return (
							<div key={pet._id} className="card col-sm-3 m-3">
								<Link to={'/pets/' + pet._id}>
									<img
										className="card-img-top"
										style={{ objectFit: 'cover', height: 300 }}
										src={pet.src}
										alt="pet picture"
									/>
								</Link>
								<div className="card-body">
									<h4 className="card-title">{pet.name}</h4>
									<p>{pet.header}</p>
								</div>
								<ul className="list-group list-group-flush">
									<li className="list-group-item">{pet.age}</li>
								</ul>
								<div className="card-body">
									<Link to={'/pets/' + pet._id}>
										<a href="#">Details</a>
									</Link>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<h3 style={{ marginLeft: '85px', fontSize: '30px' }}>
				These pets are looking for a shelter.
			</h3>
			<table className={'innerTable'} cellPadding="0px" cellSpacing="0px">
				<thead>
					<th>Name</th>
					<th>Type</th>
					<th>Actions</th>
				</thead>
				{pets.map((pet) => {
					return (
						<tr key={pet._id}>
							<td>
								<Link
									to={'/pets/' + pet._id}
									style={{
										margin: '10px',
										textDecoration: 'none',
										fontSize: '20px',
										color: 'darkblue',
									}}
								>
									{pet.name}
								</Link>
							</td>
							<td>{pet.type}</td>
							<td>
								<Link
									to={`/pets/${pet._id}`}
									style={{
										margin: '10px',
										textDecoration: 'none',
										fontSize: '20px',
										color: 'darkblue',
									}}
								>
									details
								</Link>{' '}
								|{' '}
								<Link
									to={`/pets/${pet._id}/edit`}
									style={{
										margin: '10px',
										textDecoration: 'none',
										fontSize: '20px',
										color: 'darkblue',
									}}
								>
									edit
								</Link>
							</td>
						</tr>
					);
				})}
			</table>
		</div>
	);
};

export default Home;
