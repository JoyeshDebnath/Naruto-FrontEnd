import React from "react";
import { Card, Button } from "react-bootstrap";
import { gallery } from "../DATA/gallery";
import axios from "axios";
import { saveAs } from "file-saver";
const Gallery = () => {
	const saveFile = (url, name) => {
		console.log("clicked");
		saveAs(url, name);
	};

	return (
		<div className="container">
			<h1 className="display-2 m-3">Gallery{"      "}</h1>
			<div className="row gy-3 m-4">
				{gallery.map((item, index) => {
					var URI = item.url.toString();
					console.log(URI);
					return (
						<div className="col">
							<Card
								key={item.name}
								style={{ width: "24rem" }}
								className="shadow-lg p-3 mb-5 bg-white rounded h-100"
							>
								<Card.Img
									className="card-image img-fluid"
									variant="top"
									src={item.url}
								/>
								<Card.Body>
									<Card.Title>{item.name}</Card.Title>
									<Button onClick={saveFile(URI, item.name)} className="btn">
										Download
									</Button>
								</Card.Body>
							</Card>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Gallery;
