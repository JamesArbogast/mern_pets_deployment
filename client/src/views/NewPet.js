import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const NewPet = (props) => {
	// required inputs
	const [name, setName] = useState('');
	const [type, setType] = useState('Cat');
	const [description, setDescription] = useState('');
	const [header, setHeader] = useState('');
	const [src, setSrc] = useState('');
	// optional inputs
	const [gender, setGender] = useState('');
	const [age, setAge] = useState('');
	const [fixed, setFixed] = useState(false);

	const [errors, setErrors] = useState(null);

	const handleNewPetSubmit = (event) => {
		event.preventDefault();
		const newPet = {
			name: name,
			type: type,
			description: description,
			header: header,
			src: src,
			gender: gender,
			age: age,
			fixed: fixed,
		};

		axios
			.post('http://localhost:5000/api/pets', newPet)
			.then((res) => {
				console.log(res);
				navigate(`/pets`);
			})
			.catch((err) => {
				console.log(err);
				setErrors(err.response?.data?.errors);
			});
	};

	return (
		<div className="w-75 p-5 rounded mx-auto shadow">
			<h2 className="text-center">Know a pet needing a home?</h2> <hr />
			<h4 className="text-left">Pet Information</h4>
			<form
				onSubmit={(e) => {
					handleNewPetSubmit(e);
				}}
			>
				<div className="form-group w-50 m-4">
					<label className="h6">Name: </label>
					<input
						onChange={(e) => {
							setName(e.target.value);
						}}
						type="text"
						className="form-control"
					/>
					<div>
						{errors?.name && (
							<span style={{ color: 'red' }}>{errors.name.message}</span>
						)}
					</div>
				</div>

				<div className="form-group m-4 w-25">
					<label className="h6">Type: </label>
					<select
						onChange={(e) => {
							setType(e.target.value);
						}}
						type="text"
						className="form-control"
					>
						<option value="Cat">Cat</option>
						<option value="Dog">Dog</option>
						<option value="Rabbit">Rabbit</option>
						<option value="Fish">Fish</option>
						<option value="Reptile">Reptile</option>
						<option value="SmallAnimals">Small Animals</option>
						<option value="Exotic">Exotic</option>
						<option value="Imaginary">Imaginary / Mythical</option>
						<option value="RodentOfUnsualSizes">Rodent Of Unsual Sizes</option>
					</select>
					<div>
						{errors?.type && (
							<span style={{ color: 'red' }}>{errors.type.message}</span>
						)}
					</div>
				</div>

				<div className="form-group m-4 w-75">
					<label className="h6">Add a Brief Caption! </label>
					<input
						onChange={(e) => {
							setHeader(e.target.value);
						}}
						type="text"
						className="form-control h-100"
						maxLength="200"
					></input>

					<div>
						{errors?.header && (
							<span style={{ color: 'red' }}>{errors.header.message}</span>
						)}
					</div>
				</div>

				<div className="form-group m-4 w-75">
					<label className="h6">Description: </label>
					<textarea
						onChange={(e) => {
							setDescription(e.target.value);
						}}
						type="text"
						className="form-control h-100"
					></textarea>
					<div>
						{errors?.description && (
							<span style={{ color: 'red' }}>{errors.description.message}</span>
						)}
					</div>
				</div>

				<div className="form-group m-4">
					<label className="h6">Add an Image: </label>
					<input
						onChange={(e) => {
							setSrc(e.target.value);
						}}
						type="text"
						placeholder="add URL here"
						className="form-control"
					/>
					<div>
						{errors?.src && (
							<span style={{ color: 'red' }}>{errors.src.message}</span>
						)}
					</div>
				</div>

				<h4 className="text-left">Pet Details</h4>
				<p>
					These are optional, but more details means finding your pet a new home
					even faster!
				</p>

				<div className="form-group w-25 m-4">
					<label className="h6">Gender: </label>
					<select
						onChange={(e) => {
							setGender(e.target.value);
						}}
						type="text"
						className="form-control"
					>
						<option>Unknown</option>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
					</select>
					<div>
						{errors?.gender && (
							<span style={{ color: 'red' }}>{errors.gender.message}</span>
						)}
					</div>
				</div>

				<div className="form-group  w-25 m-4">
					<label className="h6">Age: </label>
					<select
						onChange={(e) => {
							setAge(e.target.value);
						}}
						type="text"
						className="form-control"
					>
						<option>Unknown</option>
						<option value="New Born">6 months {'>'}</option>
						<option value="1 year">1 year</option>
						<option value="2 years">2 years</option>
						<option value="3 years">3 years</option>
						<option value="4 years">4 years</option>
						<option value="5 years">5 years</option>
						<option value="6 years">6 years</option>
						<option value="7 years">7 years</option>
						<option value="8 years">8 years</option>
						<option value="9 years">9 years</option>
						<option value="10 years">10 years</option>
						<option value="11 years">11 years</option>
						<option value="Senior">12 years {'<'}</option>
					</select>
					<div>
						{errors?.age && (
							<span style={{ color: 'red' }}>{errors.age.message}</span>
						)}
					</div>
				</div>

				<div className="form-group m-4">
					<label className="h6">Is Fixed:</label>
					<input
						onChange={(e) => {
							setFixed(e.target.checked);
						}}
						checked={fixed}
						type="checkbox"
						className="form-check-input"
						style={{ marginRight: '5px', marginLeft: '20px' }}
					/>
					<div>
						{errors?.fixed && (
							<span style={{ color: 'red' }}>{errors.fixed.message}</span>
						)}
					</div>
				</div>

				<Link to="/pets">
					<button
						style={{
							color: 'red',
							cursor: 'pointer',
							margin: '5px',
							padding: '5px 20px 5px 20px',
						}}
					>
						Cancel
					</button>
				</Link>
				<button
					style={{
						cursor: 'pointer',
						margin: '5px',
						padding: '5px 20px 5px 20px',
					}}
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default NewPet;
