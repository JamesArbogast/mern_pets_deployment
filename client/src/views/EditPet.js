import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import axios from "axios";
import { set } from "mongoose";

const EditPet = (props) => {
    const [name, setName] = useState("");
    const [ type, setType ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ skill1, setSkill1 ] = useState("nothing");
    const [ skill2, setSkill2 ] = useState("nothing");
    const [ skill3, setSkill3 ] = useState("nothing");

    const [errors, setErrors] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/pets/" + props.id)
            .then((res) => {
                console.log(res);
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkill1(res.data.skill1);
                setSkill2(res.data.skill2);
                setSkill3(res.data.skill3);
            })
            .catch((err) => {
                setErrors(err.response?.data?.errors);
                console.log(err);
            });
    }, [props.id]);

    const handleEditPetSubmit = (event) => {
    event.preventDefault();

    const editedPet = {
        name : name,
        type : type,
        description : description,
        skill1 : skill1,
        skill2 : skill2,
        skill3 : skill3
    };

    axios
        .put(
            `http://localhost:5000/api/pets/${props.id}/edit`,
            editedPet
        )
        .then((res) => {
            console.log(res);
            navigate("/pets/" + props.id);
        })
        .catch((err) => {
            setErrors(err.response?.data?.errors);
            console.log(err);
        });
    };

    return (
        <div className="w-50 p-4 rounded mx-auto shadow">
            <h3 className="text-center">New Pet</h3>

            <form
                onSubmit={(e) => {
                handleEditPetSubmit(e);
            }}
            >
                <div className="form-group">
                    <label className="h6">Name: </label>
                    <input
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                        value={name}
                    />
                </div>
                <div>
                    {errors?.name && (
                        <span style={{ color: "red" }}>{errors.name.message}</span>
                    )}
                </div>
                <div className="form-group">
                    <label className="h6">Type: </label>
                    <input
                        onChange={(e) => {
                            setType(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                        value={type}
                    />
                </div>
                <div>
                    {errors?.type && (
                        <span style={{ color: "red" }}>{errors.type.message}</span>
                    )}
                </div>
                <div className="form-group">
                    <label className="h6">Description: </label>
                    <input
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                        value={description}
                    />
                </div>
                <div>
                    {errors?.description && (
                        <span style={{ color: "red" }}>{errors.description.message}</span>
                    )}
                </div>
                        <div className="form-group">
                            <label className="h6">Skill 1: </label>
                            <input
                                onChange={(e) => {
                                    setSkill1(e.target.value);
                                }}
                                type="text"
                                className="form-control"
                                value={skill1}
                            />
                        </div>
                        <div className="form-group">
                            <label className="h6">Skill 2: </label>
                            <input
                                onChange={(e) => {
                                    setSkill2(e.target.value);
                                }}
                                type="text"
                                className="form-control"
                                value={skill2}
                            />
                    </div>
                    <div className="form-group">
                            <label className="h6">Skill 3: </label>
                            <input
                                onChange={(e) => {
                                    setSkill3(e.target.value);
                                }}
                                type="text"
                                className="form-control"
                                value={skill3}
                            />
                    </div>
            <button className="btn btn-sm btn-outline-success">Edit Pet</button>
        </form>
    </div>
    );
};

export default EditPet;