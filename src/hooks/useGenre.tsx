import React from "react";
import UseGenres from "./UseGenres";

const useGenre = (id?: number) => {
  const { data: genres } = UseGenres();
  return genres?.results.find((g) => g.id === id);
};

export default useGenre;
