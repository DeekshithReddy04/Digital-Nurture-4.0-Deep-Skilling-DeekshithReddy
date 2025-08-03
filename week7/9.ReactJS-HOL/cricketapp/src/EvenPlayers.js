const EvenPlayers = ({ data }) => {
  const even = data.filter((_, index) => index % 2 !== 0);
  return (
    <ul>
      {even.map((player, i) => (
        <li key={i}>{player}</li>
      ))}
    </ul>
  );
};

export default EvenPlayers;
