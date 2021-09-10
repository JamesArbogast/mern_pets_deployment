import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import "../App.css"
import Dog from '../Img/dog150.png'

const Pets = (props) => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:5000/api/pets")
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
            .delete("http://localhost:5000/api/pets/" + deletedId)
            .then((res) => {
                // At this point it is deleted from DB but we need to cause a re-render to remove it from the page.
                const filteredPets = pets.filter((pet) => {
                return pet._id !== deletedId;
                });

                setPets(filteredPets);
            })
            .catch((err) => {
                console.log(err);
        });
    };

    return (
        <div>
        <h3 style={{fontSize: "30px"}} className={"text-center"}>Meet our Adoptable Pets!</h3>
        <div cellPadding="0px" cellSpacing="0px" style={{overflow: "auto", margin: "10px", display: "flex justify-content-between" }}>
            {pets.map((pet) => {
                return (
                    <div
                        key={pet._id}
                    >
                        <div className={"d-flex-column center"}>
                            <img src={Dog} className="center"/>
                            <Link to={"/pets/" + pet._id} style={{textDecoration: "none", fontSize: "20px", color: "darkblue"}} className="text-center">{pet.name}</Link>
                            <p className={"text-left"}>{pet.type}</p>
                            <Link to={`/pets/${pet._id}`} style={{textDecoration: "none", fontSize: "20px", color: "darkblue"}} className="text-center">Learn More</Link>
                        </div>
                    </div>
                );
            })}
        </div>
        </div>
    );
};

export default Pets;