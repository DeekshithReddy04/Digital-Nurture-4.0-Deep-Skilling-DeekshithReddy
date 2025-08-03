const OddPlayers = ({ data }) => {
  const odd = data.filter((_, index) => index % 2 === 0);
  return (
    <ul>
      {odd.map((player, i) => (
        <li key={i}>{player}</li>
      ))}
    </ul>
  );
};

export default OddPlayers;
