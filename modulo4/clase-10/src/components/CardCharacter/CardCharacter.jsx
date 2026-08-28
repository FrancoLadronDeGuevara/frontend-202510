const CardCharacter = ({ character }) => {
  const { name, species, gender, status, image } = character;

  return (
    <div className="rounded flex justify-between border border-gray-200 min-w-150">
      <div className="py-4 text-center">
        <h4>{name}</h4>
        <p>{species}</p>
        <p>{gender}</p>
        <p>{status}</p>
      </div>
      <img src={image} alt="" />
    </div>
  );
};

export default CardCharacter;
