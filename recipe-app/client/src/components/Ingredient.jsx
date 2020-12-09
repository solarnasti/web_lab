import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Ingredient = ({
    ingredient: {_id: id, name, enName},
    onSelect,
    onRemove,
}) => (
    <Card
        onClick={() => onSelect && onSelect(id)}
        className={onRemove ? 'removable-card' : ''}
    >
        <Card.Img
            variant="top"
            src={`/${enName}.jpg`}
            alt={name}
            title={name}
        />
        <Card.Body className="pt-0 pb-3">
            <Card.Text>{name}</Card.Text>
        </Card.Body>
        {onRemove && (
            <Button
                className="remove-button"
                variant="danger"
                onClick={() => onRemove && onRemove(id)}
            >
                X
            </Button>
        )}
    </Card>
);

export default Ingredient;
