import "./Categories.css";

function Categories() {
  const categories = [
    "Books",
    "Laptops",
    "Notes",
    "Study Tables",
    "Bags",
    "Calculators",
  ];

  return (
    <section className="categories">
      <h2>Popular Categories</h2>

      <div className="category-grid">
        {categories.map((item, index) => (
          <div className="category-card" key={index}>
            <h3>{item}</h3>
            <p>Explore items</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;