import useGameTrailer from "../hooks/useGameTrailer";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useGameTrailer(gameId);
  console.log(gameId);
  console.log(data?.results);

  if (isLoading) {
    return null;
  }

  if (error) {
    throw error;
  }

  const first = data?.results[0];
  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : null;
};

export default GameTrailer;
