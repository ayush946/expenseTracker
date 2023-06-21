import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const [selectCategory, setSelectCategory] = useState("");
  const [expense, setExpense] = useState([
    { id: 1, description: "", amount: 0, category: "" },
  ]);
  useEffect(() => {
    setExpense(expense.filter((item) => item.id !== 1));
  }, []);
  const onSelectCategory = (event: string) => {
    setSelectCategory(event);
  };
  const displayExpense = selectCategory
    ? expense.filter((item) => item.category === selectCategory)
    : expense;

  const onDelete = (num: number) => {
    setExpense(expense.filter((item) => item.id !== num));
  };
  return (
    <>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(item) =>
            setExpense([...expense, { ...item, id: expense.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={(event) => onSelectCategory(event)} />
      </div>
      <div className="mb-3">
        {" "}
        <ExpenseList onDelete={onDelete} expenses={displayExpense} />
      </div>
    </>
  );
}

export default App;
