import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardFormulario from './CardFormulario';
import CardTarea from './CardTarea';

const Inicio = () => {
	const [cards, setCards] = useState([]);

	return (
		<Container style={{ height: '100vh' }}>
			<Row style={{ height: '100vh' }}>
				<Col style={{ height: '100vh', padding: '10px' }}>
					<CardFormulario setCard={setCards} card={cards} />
				</Col>
				<Col style={{ height: '100vh' }}>
					{cards.map((card, index) => (
						<div key={index}>
							<CardTarea card={card} />
						</div>
					))}
				</Col>
			</Row>
		</Container>
	);
};

export default Inicio;
