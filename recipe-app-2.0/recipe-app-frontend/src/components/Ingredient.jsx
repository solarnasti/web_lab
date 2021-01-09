import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Ingredient extends React.Component {
    render() {
        const {id, name, enName} = this.props.ingredient;
        const {onSelect, onRemove} = this.props;

        return (
            <Card
                onClick={() => onSelect(id)}
            >
                <Card.Img
                    src={`/img/${enName}.jpg`}
                    alt={name}
                    title={name}
                />
                <Card.Body>
                    <Card.Text>{name}</Card.Text>
                </Card.Body>
                {onRemove && (
                    <Button
                        className="removable-button"
                        variant="danger"
                        onClick={() => onRemove(id)}
                    >
                        x
                    </Button>
                )}
            </Card>
        );
    }
}

export default Ingredient;
