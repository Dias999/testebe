import React from "react";
import { PokemonInfo, FavoritesList, Form } from "components";
import { useGetPokemon } from "hooks";
import { Row, Col, Spinner } from "reactstrap";
import { logo } from "assets";
import "./styles.css";

const Home: React.FC = () => {
  const {
    getPokemon,
    clearAll,
    loading,
    resStatus,
    pokemon,
    error,
  } = useGetPokemon();

  return (
    <Row className="mt-5">
      <Col md={6} className="text-center">
        <img src={logo} className="img-fuid my-4" alt="logo" />

        <Form getPokemon={getPokemon} loading={loading} clearAll={clearAll} />

        <div className="mt-4 pokemon-display">
          {loading ? (
            <Spinner className="mx-auto" />
          ) : (
            <Col>
              {pokemon && <PokemonInfo data={pokemon} />}
              {resStatus === 404 && (
                <div className="text-muted">Nenhum Pokemon encontrado</div>
              )}
              {!!error && <div className="text-danger">{error}</div>}
            </Col>
          )}
        </div>
      </Col>

      <Col md={6}>
        <FavoritesList />
      </Col>
    </Row>
  );
};

export default Home;
