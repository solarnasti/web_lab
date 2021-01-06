import React from 'react';
import Card from 'react-bootstrap/Card';

class Recipe extends React.Component {
    render() {
        const {
            recipe: {name, enName, Ingredients},
        } = this.props;

        return (
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
                        {Ingredients.map(
                            ({name, RecipeIngredients: {amount}}) => (
                                <div>
                                    {name} - {amount}
                                </div>
                            )
                        )}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default Recipe;
