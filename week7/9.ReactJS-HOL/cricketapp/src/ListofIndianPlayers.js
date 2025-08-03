const ListofIndianPlayers = ({ IndianPlayers }) => {
  return (
    <ul>
      {IndianPlayers.map((p, i) => (
        <li key={i}>{p}</li>
      ))}
    </ul>
  );
};

export default ListofIndianPlayers;
