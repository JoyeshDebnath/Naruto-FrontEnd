import React from "react";
import { Kages } from "../DATA/Kage";
import { Card, Button } from "react-bootstrap";

// imports

const KagePage = () => {
	console.log(Kages);
	return (
		<div className="container">
			<h1 className="display-2 m-3">
				5 Kages{"      "}
				<img
					style={{ height: "100px", width: "100px" }}
					src="https://img.icons8.com/external-flat-icons-maxicons/85/000000/external-asian-japan-flat-flat-icons-maxicons-2.png"
				/>
			</h1>

			{/* video */}

			{/* <video
				src="https://www.youtube.com/embed/dpi6pIUjpRA"
				width="600"
				height="300"
				controls="controls"
				autoPlay
				loop
			/> */}
			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/dpi6pIUjpRA"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
			{/* video */}

			<div className="row gy-3 m-4">
				{/* <div className="col"> */}
				{Kages.map((kage, index) => {
					return (
						<div className="col">
							<Card
								key={kage.name}
								style={{ width: "24rem" }}
								className="shadow-lg p-3 mb-5 bg-white rounded h-100"
							>
								<Card.Img
									className="card-image img-fluid"
									variant="top"
									src={kage.image}
								/>
								<Card.Body>
									<Card.Title>{kage.name}</Card.Title>
									<Card.Text>{kage.description}</Card.Text>
									<h3>Founder: {kage.first}</h3>
									<h4>Notable:{kage.fifth}</h4>
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

export default KagePage;
