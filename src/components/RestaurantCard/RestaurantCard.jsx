
import styles from "../../app/page.module.css";
import LikeButton from "@/components/LikeButton/LikeButton";

export default function RestaurantCard({ data_rest }) {

  return (
    <div className={styles.restaurantCard} >
      <img src={data_rest.image} width='100%' height='100%' className={styles.imgCard}/>
        <div className={styles.flexCard} >  
          <div className={styles.textCard} >
            <h5>{data_rest.name}</h5>
            {data_rest.location}
          </div>
          <div className={styles.iconCard}>
                <LikeButton />
          </div>
      </div>
    </div>
  );
} 