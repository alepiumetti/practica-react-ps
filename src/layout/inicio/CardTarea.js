import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
const CardTarea = (props) => {
  const { card, totalCards, setTotalCards } = props;

  const handlerButtonDelete = () => {
    let confirmar = window.confirm("Desea eliminar esta tarea?");
    console.log(totalCards);
    if (confirmar === true) {
      const filteredCard = totalCards.filter(
        (elemento) => elemento.id !== card.id
      );
      setTotalCards(filteredCard);
    }
  };
  return (
    <Card>
      <Card.Header>{card.nombre}</Card.Header>
      <Card.Body>
        <Card.Text>{card.descripcion}</Card.Text>
        <Button onClick={handlerButtonDelete} variant="danger">
          Eliminar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardTarea;
