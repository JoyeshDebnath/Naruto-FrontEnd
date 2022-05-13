import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
const nav = () => {
	return (
		<div>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="/">
						<img
							className="nav-image"
							src="https://img.icons8.com/clouds/100/000000/naruto-sign.png"
						/>
					</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="/kage">
							<img
								className="nav-image"
								src="https://img.icons8.com/color/48/000000/tsunade.png"
							/>
						</Nav.Link>
						<Nav.Link href="/Akatski">
							<img
								className="nav-image"
								src="https://img.icons8.com/color/48/000000/itachi-uchiha.png"
							/>
						</Nav.Link>
						<Nav.Link href="/terms">
							<img
								className="nav-image"
								src="https://img.icons8.com/color/48/000000/sharingan.png"
							/>
						</Nav.Link>
						<Nav.Link href="/characters">
							<img
								className="nav-image"
								src="https://img.icons8.com/color/48/000000/boruto-uzumaki.png"
							/>
						</Nav.Link>
						<Nav.Link href="/gallery">
							<img className="nav-image" src="" />
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};

export default nav;
