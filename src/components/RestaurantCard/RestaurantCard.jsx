
import styles from "../../app/page.module.css";
import LikeButton from "@/components/LikeButton/LikeButton";
import Link from "next/link";

export default function RestaurantCard({ data_rest }) {

  return (
      <div className={styles.restaurantCard} >
        <div className={styles.imgCardContainer}>
          <Link href={`/restaurant/${data_rest.slug}`}>
            <img src={data_rest.image} width='100%' height='100%' className={styles.imgCard}/>
          </Link>
        </div >  
          <div className={styles.flexCard} >  
            <div className={styles.textCard} >
              <h5>{data_rest.name}</h5>
              {data_rest.location}
            </div>
            <div className={styles.iconCard}>
                  <LikeButton rest_id = {data_rest.id}/>
            </div>
        </div>
      </div>
  );
} 