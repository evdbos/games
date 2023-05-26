// import useData from "./UseData";
import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import ms from "ms";
import ApiClient, { FetchResponse } from "../services/api-client";

const apiClient = new ApiClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const UseGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });

export default UseGenres;
