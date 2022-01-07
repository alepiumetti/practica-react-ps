import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { useState } from 'react';

const CardFormulario = (props) => {
	const { setCard, card } = props;

	const [valoresCards, setValoresCards] = useState({});

	const handlerInputText = (event) => {
		let value = event.target.value;

		setValoresCards({ ...valoresCards, [event.target.name]: value });
	};

	const handlerButtonSubmit = (event) => {
		event.preventDefault();

		console.log(valoresCards.nombre);

		if (!valoresCards.nombre) {
			return alert('Debes ingresar un valor');
		}

		if (!valoresCards.descripcion) {
			return alert('Debes ingresar una descripcion');
		}

		setCard([...card, valoresCards]);
	};

	//Aca deberia ir el boton eliminar?
	
	

    //No se si la parte de boton esta bien, creo que esta correcta la parte de la funcion delete task

const deleteTask = (id) => {
    const filteredTasks =  tasks.filter(task => task.id !== id)
    setTasks(filteredTasks)
}
	
	
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
