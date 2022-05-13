import React from "react";
import { characters } from "../DATA/characters";
import { Card } from "react-bootstrap";
// imports
const Characters = () => {
	return (
		<div className="container">
			<h1 className="display-2 m-3">
				Characters{"      "}
				<img
					style={{ height: "100px", width: "100px" }}
					src="https://img.icons8.com/external-flat-icons-maxicons/85/000000/external-asian-japan-flat-flat-icons-maxicons-2.png"
				/>
			</h1>
			{/* video */}
			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/y65pCoUSqDQ"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
			{/* video */}

			<div className="row gy-3 m-4">
				{/* <div className="col"> */}
				{characters.map((ch, index) => {
					return (
						<div className="col">
							<Card
								key={ch.name}
								style={{ width: "24rem" }}
								className="shadow-lg p-3 mb-5 bg-white rounded h-100"
							>
								<Card.Img
									className="card-image img-fluid"
									variant="top"
									src={ch.image}
								/>
								<Card.Body>
									<Card.Title>{ch.name}</Card.Title>
									<Card.Text>{ch.description}</Card.Text>
									<h3>speaciality: {ch.speaciality}</h3>
									{/* s */}
									{/* <Button variant="primary">Go somewhere</Button> */}
								</Card.Body>
							</Card>
						</div>
					);
				})}
			</div>
		</div>
		// </div>
	);
};

export default Characters;
