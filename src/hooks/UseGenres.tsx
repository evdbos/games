import useData from "./UseData";

export interface Genre {
  id: number;
  name: string;
}
const UseGenres = () => useData<Genre>("/genres");

export default UseGenres;
