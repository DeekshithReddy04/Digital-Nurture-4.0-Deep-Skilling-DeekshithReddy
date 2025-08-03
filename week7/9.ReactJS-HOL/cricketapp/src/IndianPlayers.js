const IndianPlayers = () => {
  const T20players = ["Virat", "Rohit", "Gill"];
  const RanjiPlayers = ["Pujara", "Rahane", "Karun"];

  const allPlayers = [...T20players, ...RanjiPlayers];

  const oddPlayers = allPlayers.filter((_, index) => index % 2 !== 0);
  const evenPlayers = allPlayers.filter((_, index) => index % 2 === 0);

  return (
    <div>
      <h2>Odd Team Players:</h2>
      <ul>{oddPlayers.map(p => <li key={p}>{p}</li>)}</ul>

      <h2>Even Team Players:</h2>
      <ul>{evenPlayers.map(p => <li key={p}>{p}</li>)}</ul>
    </div>
  );
};

export default IndianPlayers;
