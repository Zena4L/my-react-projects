import pizzaData from "../data";
import Pizza from "./Pizza";

const Menu: React.FC = () => {
  const numPizza = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizza > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaData={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu. Please come back later</p>
      )}
    </main>
  );
};
export default Menu;
