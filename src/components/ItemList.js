import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

    const dispatch = useDispatch();

    const handleAddItems = (item) => {
        //Dispatch an action
        dispatch(addItem(item));
    }

    return (
        <div>
            {items.map((item) => (
                <div
                    data-testid = "foodItems"
                    key={item.card.info.id}
                    className="p-2 m-2 border-gray-300 border-b-2 text-left flex flex-wrap justify-between">

                    <div className="w-9/12">
                        <div className="py-2">
                            <p>{item.card.info.name}</p>
                            <p>
                                - ₹
                                {item.card.info.price
                                    ? item.card.info.price / 100
                                    : item.card.info.defaultPrice / 100}
                            </p>
                        </div>
                        <p className="text-xs mr-1">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute my-14">
                            <button className="p-2 mx-[36px] bg-violet-300 bg-opacity-90 shadow-lg rounded-lg" onClick={() => handleAddItems(item)}>
                            Add +
                            </button>
                        </div>
                        <img src={CDN_URL + item.card.info.imageId} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
