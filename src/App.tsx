

type Food = {
    name: string;
    quantity: number;
};

const foods: Food[] = [
    {name: "Carrot", quantity: 1},
    {name: "Potato", quantity: 2}
];

export function App(){


    function renderFoods(){
        return foods.map((food) => <li>{food.name}</li>)
    }
    //empty tag uses react.fragment - required for the parent element
    return (
    
    <>
        <h1>Pantry Manager</h1>
        <ul>
            { renderFoods()}
        </ul>
        
    </>
    );
}
