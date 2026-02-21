import RestaurantHeader from "@/components/RestaurantHeader/RestaurantHeader";
import MenuItem from "@/components/MenuItem/MenuItem";
import data from "@/data/restaurants.json";
import { notFound } from "next/navigation";

export default function RestaurantPage({ params }) {
  const restaurant = data.restaurants.find(r => r.slug === params.slug);

  if (!restaurant) {
    notFound();
  }
        
  return (
    <>

    <div className="heroImage">
        <img src={restaurant?.image} className="image" alt={restaurant.name} />
      </div>

      <div className="mainWrapper">
        <div className="contentWrapper">
          <RestaurantHeader name={restaurant.name} id={restaurant.id} />

          <div className="menu">
            <section>
              <h3 className="sectionTitle">Entrées</h3>
              {restaurant.menu.entrées.map((item, index) => (
                <MenuItem item={item} index={index} key={index} />
              ))}
            </section>
            <section>
              <h3 className="sectionTitle">Plats</h3>
              {restaurant.menu.plats.map((item, index) => (
                <MenuItem item={item} index={index} key={index} />
              ))}
            </section>
            <section>
              <h3 className="sectionTitle">Desserts</h3>
              {restaurant.menu.desserts.map((item, index) => (
                <MenuItem item={item} index={index} key={index} />
              ))}
            </section>
          </div>

          <button className="orderButton">Commander</button>
        </div>
      </div>

    </>
  )

}