const Footer: React.FC = () => {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 17;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit us or order</p>
          <button className="btn"> Order Now</button>
        </div>
      ) : (
        <p>
          We're happy to welcome you betwween the {openHour}:00 and {closeHour}
          :00
        </p>
      )}
    </footer>
  );
};
export default Footer;
