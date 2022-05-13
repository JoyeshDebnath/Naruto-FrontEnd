import React from "react";
import { Accordion, Card } from "react-bootstrap";
import { Akatski } from "../DATA/Akataski";

//imports

const AkatskiPage = () => {
	return (
		<div className="container">
			<h1 className="display-2">Akatsuki</h1>
			<Accordion defaultActiveKey="0">
				<Accordion.Item eventKey="0">
					<Accordion.Header className="display-1">Akatsuki</Accordion.Header>
					<Accordion.Body>
						Akatsuki (暁, literally meaning: "Dawn" or "Daybreak") was a group
						of shinobi that existed outside the usual system of hidden villages.
						Over the course of several decades, Akatsuki took different forms
						and was led by different individuals. Though each iteration is
						viewed as either subversives or criminals, all seek to make the
						world a better place through their own means. Each Akatsuki tended
						to have multiple lairs across the world, inaccessible either due to
						their remoteness or the various security measures that protected
						them.
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
			{/* video */}
			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/Wl6fnHDWMI0"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
			{/* video */}
			<div className="row gy-3 m-4">
				{/* <div className="col"> */}
				{Akatski.map((aka, index) => {
					return (
						<div className="col">
							<Card
								key={aka.name}
								style={{ width: "24rem" }}
								className="shadow-lg p-3 mb-5 bg-white rounded h-100"
							>
								<Card.Img
									className="card-image img-fluid"
									variant="top"
									src={aka.image}
								/>
								<Card.Body>
									<Card.Title>{aka.name}</Card.Title>
									<Card.Text>{aka.description}</Card.Text>

									{/* <Button variant="primary">Go somewhere</Button> */}
								</Card.Body>
							</Card>
						</div>
					);
				})}
			</div>
			s
		</div>
	);
};

export default AkatskiPage;
