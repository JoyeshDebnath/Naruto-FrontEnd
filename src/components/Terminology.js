import React from "react";
import { Carousel } from "react-bootstrap";
import { terms } from "../DATA/terms";
import { useSpeechSynthesis } from "react-speech-kit";

//imports above
const Terminology = () => {
	const { speak } = useSpeechSynthesis();

	console.log(terms);
	return (
		<div className="container">
			<h1 className="display-3">Terminology Often used in Shinobi World</h1>

			{/* carousel  */}
			<div className="container-fluid">
				<Carousel
					style={{ width: "50%" }}
					className="shadow-lg p-3 mb-5 bg-white rounded h-100"
				>
					{terms.map((term, index) => {
						return (
							<Carousel.Item
								key={term.name}
								style={{ height: "400px" }}
								interval={1500}
							>
								<img
									// style={{ width: "500px", height: "400px !important" }}
									style={{ height: "400px", opacity: 0.8 }}
									className=" d-block w-100"
									src={term.image}
									alt="First slide"
								/>
								<Carousel.Caption>
									<h3 style={{ color: "#dc2f02" }}>{term.name}</h3>
									<p style={{ color: "#dc2f02", fontWeight: 600 }}>
										{term.description}
									</p>
									<button
										class="btn btn-sm btn-warning"
										onClick={() => speak({ text: term.description })}
									>
										<img
											style={{ height: "40px" }}
											src="https://img.icons8.com/ios-filled/50/000000/medium-volume--v2.png"
										/>
									</button>
								</Carousel.Caption>
							</Carousel.Item>
						);
					})}
				</Carousel>
				{/* carousel */}
			</div>
		</div>
	);
};

export default Terminology;
