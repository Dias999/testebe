import React, { Component } from "react";
import { Card, Row, Col, Button } from "reactstrap";
import dispatch, { PokeActions } from "actions";
import { connect } from "react-redux";
import "./styles.css";

class PokemonInfo extends Component<PokemonInfo.Props & FavoritesList.Props> {
  render() {
    const { favorites, data } = this.props;
    const isFav = !!favorites[data.id];

    return (
      <Card className="pokemon-card mx-auto">
        <Row className="mb-2">
          <Col className="text-center mx-auto">
            <p className="m-0">nº{data.id}</p>
            <h4 className="m-0">{data.name.toUpperCase()}</h4>

            <img
              src={data.sprites.front_default}
              className="pokemon-img"
              alt={data.name}
            />

            <Button
              onClick={() => {
                dispatch(
                  isFav ? PokeActions.removeFavorite : PokeActions.addFavorite,
                  data
                );
              }}
              color={isFav ? "danger" : "primary"}
              size="small"
              outline
            >
              {isFav ? "remove from favorites" : "add to favorites"}
            </Button>
          </Col>
        </Row>
      </Card>
    );
  }
}

const mapStateToProps = (store: Redux.RootState) => ({
  favorites: store.pokemon.favorites,
});

export default connect(mapStateToProps)(PokemonInfo);
