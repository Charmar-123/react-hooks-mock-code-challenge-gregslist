import { useState, useEffect} from "react";
import ListingCard from "./ListingCard";
// import ListingCard from "./ListingCard";

function ListingsContainer({search}) {

  const [list, setList] = useState([])
  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(res => res.json())
      .then(list => setList(list))
  }, [])

  const handleDelete = (id) => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList)
  }


  const updatedList = list.filter(item => (
      item.description.toLowerCase().includes(search.toLowerCase())))


  const renderList = updatedList.map(({id , description, image, location}) =>(
 
    <ListingCard key={id} id={id} image={image} description={description} location={location} handleDelete={handleDelete}/>)
  )

  return (
    <main>
      <ul className="cards">
        {renderList}
      </ul>
    </main>
  );
}

export default ListingsContainer;
