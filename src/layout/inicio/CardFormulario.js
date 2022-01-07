import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { useState } from 'react';

const CardFormulario = (props) => {
	const { setCard, card } = props;

	const [valoresCards, setValoresCards] = useState({}); //objeto

	const handlerInputText = (event) => {
		let value = event.target.value;

		if (event.target.name === 'nombre') {
			setValoresCards({ ...valoresCards, nombre: value });

			/*
				valoresCards = {
					nombre:"valor"
				}
			*/
		}

		if (event.target.name === 'descripcion') {
			setValoresCards({ ...valoresCards, descripcion: value });

			/*
				valoresCards = {
					descripcion:"valor"
				}
			*/
		}

		/**
		 * valoresCards={
		 * id:"1"
		 * nombre:"valor",
		 * descripcion:"valor"
		 * }
		 *
		 */

		// setValoresCards({ ...valoresCards, [event.target.name]: value });
	};

	const handlerButtonSubmit = (event) => {
		event.preventDefault();

		/**
		 * valoresCards={
		 * id:1,
		 * nombre:"valor",
		 * descripcion:"valor"
		 * }
		 *
		 */

		if (!valoresCards.nombre) {
			return alert('Debes ingresar un valor');
		}

		if (!valoresCards.descripcion) {
			return alert('Debes ingresar una descripcion');
		}

		setCard([...card, valoresCards]);

		/**
		 * card=[valoresCards,valoresCards,valoresCards,valoresCards,]
		 */
	};

	return (
		<Card>
			<Card.Header as='h5'>Crear tarea</Card.Header>
			<Card.Body>
				<Form>
					<Container>
						<Row>
							<Form.Group>
								<Form.Label>Tarea</Form.Label>
								<Form.Control
									onChange={handlerInputText}
									type='text'
									placeholder='Ingresa una tarea'
									name='nombre'
								/>
							</Form.Group>
						</Row>
						<br />
						<Row>
							<Form.Group>
								<Form.Label>Descripcion</Form.Label>
								<Form.Control
									as='textarea'
									row={4}
									name='descripcion'
									onChange={handlerInputText}
								/>
							</Form.Group>
						</Row>
						<br />
						<Row>
							<Button
								onClick={handlerButtonSubmit}
								variant='primary'
								type='submit'
							>
								Crear
							</Button>
						</Row>
					</Container>
				</Form>
			</Card.Body>
		</Card>
	);
};

export default CardFormulario;
