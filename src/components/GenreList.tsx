import React from "react";

import UseGenres, { Genre } from "../hooks/UseGenres";

const GenreList = () => {
  const { data } = UseGenres();
  return (
    <ul>{data && data.map((genre) => <li key={genre.id}>{genre.name}</li>)}</ul>
  );
};

export default GenreList;
