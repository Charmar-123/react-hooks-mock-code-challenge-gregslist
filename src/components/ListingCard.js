import {useState} from "react";

function ListingCard({image, description, location, id, handleDelete}) {
  const [favorite, setFavorite] = useState(false)
  const handleFavoriteClick = () => {
    setFavorite(!favorite)
  }


  const onDeleteClick = () => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(() => handleDelete(id))
  }


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {true ? (
          <button className={favorite ? "emoji-button favorite active" : "emoji-button favorite"} onClick={handleFavoriteClick}>★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={onDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
