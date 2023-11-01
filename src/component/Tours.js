import Title from "./Title";
import { tours } from "../data";
import TourCard from "./TourCard";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title text="featured" span="tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          return <TourCard key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};
export default Tours;
