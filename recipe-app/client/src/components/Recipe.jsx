import React from 'react';
import Card from 'react-bootstrap/Card';

const Recipe = ({recipe: {name, enName, ingredients}}) => (
    <Card className="recipe-card mb-3">
        <Card.Img
            className="recipe-img"
            src={`/img/${enName}.png`}
            alt={name}
            title={name}
        />
        <Card.Body className="recipe-card-body">
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                {ingredients.map(({ingredient: {_id, name}, amount}) => (
                    <div key={_id}>
                        {name} - {amount}
                    </div>
                ))}
            </Card.Text>
        </Card.Body>
    </Card>
);

export default Recipe;
