import { Card } from 'react-bootstrap';

const CardTarea = (props) => {
	const { card } = props;

	return (
		<Card style={{ margin: '5px' }}>
			<Card.Header>{card.nombre}</Card.Header>
			<Card.Body>
				<p>{card.descripcion}</p>
			</Card.Body>
		</Card>
	);
};

export default CardTarea;
