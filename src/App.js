import React, {useState} from "react";
import Costs from "./components/Costs/Costs";
import NewCost from './components/NewCost/NewCost';

const INITIAL_COSTS = [
  {
     id: 'c1',
     date: new Date(2023,6,20),
     description: "Hotpoint Aristone",
     amount: 120.99,
  },
   {
     id:'c2',
     date: new Date(2023,7,5),
     description: "MacBook",
     amount: 1254.99,
   },
   {
     id:'c3',
     date: new Date(2023,4,24),
     description: "Television",
     amount: 89.99,
    },
];
const  App = () => {

    const [costs, setCosts] = useState(INITIAL_COSTS);

    const addCostHandler = (cost) => {
      setCosts(prevCosts => {
        return [cost, ...prevCosts]
      });
    };
  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <Costs  costs={costs}/>
    </div>
  );
}

export default App;
