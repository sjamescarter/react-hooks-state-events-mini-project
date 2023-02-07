import React from "react";

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  
  const displayCategories = categories.map((category) => {
    if(category === selectedCategory){
      return <button key={category} className="selected" onClick={handleFilter}>{category}</button>
    } else {
      return <button key={category} onClick={handleFilter}>{category}</button>
    }
  })

  function handleFilter(e) {
    setSelectedCategory(e.target.textContent)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {displayCategories}
    </div>
  );
}

export default CategoryFilter;
