import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../Store/bagSlice";
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const HomeItem = ({ item }) => {
  const bagItems = useSelector((state) => state.bag);
  const dispatch = useDispatch();
  const elementInBag = bagItems.indexOf(item.id) >= 0;

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const handleRemoveFromBag = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {elementInBag ? (
          <button
            type="button"
            className="btn btn-danger btn-add-bag"
            onClick={handleRemoveFromBag}
          >
            <MdDelete />
            Remove
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-success btn-add-bag"
            onClick={handleAddToBag}
          >
            <IoIosAddCircle />
            Add to Bag
          </button>
        )}
      </div>
    </>
  );
};

export default HomeItem;
