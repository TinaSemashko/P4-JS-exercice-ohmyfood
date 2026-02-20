
import LikeButton from "@/components/LikeButton/LikeButton";

export default function RestaurantHeader({ name, id }) {

  return (
    <div className="restaurantHeader">
      <h2 className="restaurantName">{name}</h2>
       <div>
            <LikeButton rest_id = {id}/>
       </div>
    </div>
  );
} 