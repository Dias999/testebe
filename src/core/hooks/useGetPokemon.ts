import { useState } from "react";

const useGetPokemon = () => {
  const [loading, setLoading] = useState(false);
  const [resStatus, setResStatus] = useState<any>(null);
  const [error, setError] = useState<string>("");
  const [pokemon, setPokemon] = useState<Pokemon.Pokemon | null>(null);

  const clearAll = () => {
    setPokemon(null);
    setResStatus(null);
    setError("");
  };

  const getPokemon = async (name: string) => {
    clearAll();
    setLoading(true);

    fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`, {
      method: "GET",
    })
      .then((res) => {
        setLoading(false);
        setResStatus(res.status);

        if (res.status === 200) {
          res.json().then((data) => {
            setPokemon({
              name: data.name,
              id: data.id,
              sprites: data.sprites,
              stats: data.stats,
              types: data.types,
            });
          });
        }
      })
      .catch((error) => {
        setError(
          "An error occurred trying to catch your pokemon. Please try again."
        );
        setLoading(false);
      });
  };

  return { getPokemon, clearAll, loading, resStatus, pokemon, error };
};

export default useGetPokemon;
