import React, { useState } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

const NewPet = (props) => {
    const [ name, setName ] = useState("");
    const [ type, setType ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ skill1, setSkill1 ] = useState("nothing");
    const [ skill2, setSkill2 ] = useState("nothing");
    const [ skill3, setSkill3 ] = useState("nothing");

    const [errors, setErrors] = useState(null);

    const handleNewPetSubmit = (event) => {
        event.preventDefault();

        const newPet = {
            name: name,
            type: type,
            description: description,
        };

        axios
            .post("http://localhost:5000/api/pets", newPet)
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
        <div className="table">
            <h2 className="">Know a pet needing a home?</h2>
            <form
                onSubmit={(e) => {
                    handleNewPetSubmit(e);
                }}
            >
            <div className="form-group">
                <label className="h6">Pet Name: </label>
                <input
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                />
                <div>
                    {errors?.name && (
                    <span style={{ color: "red" }}>{errors.name.message}</span>
                    )}
                </div>
            </div>
            <div className="form-group">
                <label className="h6">Pet Type: </label>
                <input
                    onChange={(e) => {
                        setType(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                />
                <div>
                    {errors?.type && (
                    <span style={{ color: "red" }}>{errors.type.message}</span>
                    )}
                </div>
            </div>
            <div className="form-group">
                <label className="h6">Pet Description: </label>
                <input
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                    description="text"
                    className="form-control"
                />
                <div>
                    {errors?.description && (
                    <span style={{ color: "red" }}>{errors.description.message}</span>
                    )}
                </div>
            </div>
            <h3>Skills (optional):</h3>
            <div className="form-group">
                <label className="h6">Skill 1: </label>
                <input
                    onChange={(e) => {
                        setSkill1(e.target.value);
                    }}
                    description="text"
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label className="h6">Skill 2: </label>
                <input
                    onChange={(e) => {
                        setSkill2(e.target.value);
                    }}
                    description="text"
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label className="h6">Skill 3: </label>
                <input
                    onChange={(e) => {
                        setSkill3(e.target.value);
                    }}
                    description="text"
                    className="form-control"
                />
            </div>
            <Link to="/pets"><button style={{ color: "red", cursor: "pointer", margin: "5px", padding: "5px 20px 5px 20px" }}>Cancel</button></Link>
            <button style={{cursor: "pointer", margin: "5px", padding: "5px 20px 5px 20px"}}>Submit</button>
            </form>
        </div>
    );
};

export default NewPet;