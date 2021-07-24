import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import NotFound from "./NotFound";

const Pet = (props) => {
    const [pet, setPet] = useState(null);
    const [likes, setLikes ] = useState(null);
    const [clicked, setClick]= useState(false);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/pets/" + props.id)
            .then((res) => {
                setPet(res.data);
                setLikes(res.data);
            })
            .catch((err) => {
                console.log(err);
                navigate("/notFound")
            });
    }, [props.likes]);

    const handleDelete = (delId) => {
        axios
        .delete("http://localhost:5000/api/pets/" + delId)
        .then((res) => {
            navigate("/pets");
        })
        .catch((err) => {
            console.log(err);
        });
    };

    const handleEdit = (edtId) => {
        axios
        .put("http://localhost:5000/api/pets/" + edtId + "/edit")
        .then((res) => {
            navigate(`/pets/${edtId}/edit`);
        })
        .catch((err) => {
            console.log(err);
        });
    };

    const handleLikeCount = (likedPet) => {
        const updateBody = {
            likes : likedPet.likes + 1,
        }

        axios
            .put(`http://localhost:5000/api/pets/${likedPet._id}`, updateBody)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.log(err);
            })
    };

    if (pet === null) {
        return "Loading...";
    }
    return (
        <div className={"table"}>
        <h2 style={{marginLeft: "90px"}}>Details About {pet.name}</h2>
        <div style={{marginLeft: "90px"}}>
            <h3>Pet type:</h3>
            <p>{pet.type}</p>
            <h3>Description:</h3> 
            <p>{pet.description}</p>
            <h3>Skills:</h3>
            <p>{pet.skill1}</p>
            <p>{pet.skill2}</p>
            <p>{pet.skill3}</p>
        <div>
                <button 
                    style={{}}
                    onClick={(e) => {
                    handleEdit(pet._id);
                    }}
                    style={{ color: "red", cursor: "pointer", margin: "5px" }}
                >Edit
                </button>
                <button
                    style={{margin: "5px"}}
                    onClick={(e) => {
                    handleDelete(pet._id);
                    }}
                    style={{ color: "red", cursor: "pointer", margin: "5px" }}
                >Adopt {pet.name}
                </button>
                <p>Likes: {pet.likes}{" "}</p>
                <button
                    onClick={(e) => {
                        handleLikeCount(pet);
                        setClick(e)
                        pet.likes += 1;
                    }}
                    style={{ cursor: "pointer" }}
                    disabled={clicked}
                    >
                    Like {pet.name}
                </button>
            </div>
        </div>
        </div>
    );
};

export default Pet;