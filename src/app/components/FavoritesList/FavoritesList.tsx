import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { PokemonInfo } from "components";
import "./styles.css";

class FavoritesList extends Component<FavoritesList.Props> {
  render() {
    const { favorites } = this.props;

    return (
      <div className="mt-4">
        <Row>
          <Col className="text-center">
            <h2>Favorites</h2>
          </Col>
        </Row>

        <Row className="mt-2">
          <Col className="text-center">
            {Object.values(favorites).map((data) => (
              <PokemonInfo data={data} key={data.id} />
            ))}

            {!!!Object.values(favorites).length && (
              <div className="text-muted">
                Search pokemons to add to your favorites
              </div>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (store: Redux.RootState) => ({
  favorites: store.pokemon.favorites,
});

export default connect(mapStateToProps)(FavoritesList);
