type food = {
  name: string;
  quantity: number;
  minQuantity: number;
  type: string;
};

// Exercise 2: Add properties: reorderPoint (number), type (string) then display all in a table.
const foods: food[] = [
  { name: "Carrot", quantity: 1, minQuantity: 3, type: "Vegetable" },
  { name: "Potato", quantity: 2, minQuantity: 2, type: "Vegetable" },
];

export function App() {
  function renderFoods() {
    return;
  }
  //empty tag uses react.fragment - required for the parent element
  return (
    <>
      <h1>Pantry Manager</h1>
      <table>
        <thead>
          <th>Name</th>
          <th>Quantity</th>
          <th>Min Quantity</th>
          <th>Type</th>
        </thead>
        {/* Exercise1: Display quantity next to food with a dash in between*/}

        <tbody>
          {foods.map((food) => (
            <tr key={food.name}>
              <td>{food.name}</td>
              <td>{food.quantity}</td>
              <td>{food.minQuantity}</td>
              <td>{food.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
