import { Card } from 'react-bootstrap';

const CardTarea = (props) => {
	const { card } = props;

	return (
		<Card>
			<Card.Header>{card.nombre}</Card.Header>
			<Card.Body>
				<p>{card.descripcion}</p>
			</Card.Body>
		</Card>
	);
};

export default CardTarea;
