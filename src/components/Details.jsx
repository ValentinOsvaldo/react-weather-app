import { Units, Forecast, Hightlights, Footer } from './';

export const Details = () => {
  return (
    <section className="details-container">
      <article className="wrapper">
        <Units />
        <Forecast />
        <Hightlights />
        <Footer />
      </article>
    </section>
  );
};
