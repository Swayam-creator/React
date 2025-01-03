import { useState } from 'react';

const Expense = () => {
  const [expenses, setExpenses] = useState([]);
  const [currentExpenses, setCurrentExpenses] = useState({
    expVal: "",
    amount: "",
  });
  const [editing, setEditing] = useState(null); // State to track the expense being edited

  // Handle change in the input fields
  const handleChange = (field, val) => {
    setCurrentExpenses((prevExpense) => ({
      ...prevExpense,
      [field]: val,
    }));
  };

  const addOrUpdateExpense = () => {
    if (currentExpenses.expVal && currentExpenses.amount) {
      if (editing) {
        
        setExpenses((prevExpenses) =>
          prevExpenses.map((expense) =>
            expense.id === editing.id
              ? { ...expense, ...currentExpenses }
              : expense
          )
        );
        setEditing(null); 
      } else {
        
        setExpenses((prevExpenses) => [
          ...prevExpenses,
          { ...currentExpenses, id: Date.now() },
        ]);
      }
      setCurrentExpenses({ expVal: "", amount: "" });
    } else {
      alert("Fill all the fields");
    }
  };

  
  const deleteExpense = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  };

  const startEditing = (expense) => {
    setCurrentExpenses({ expVal: expense.expVal, amount: expense.amount });
    setEditing(expense); 
  };

  
  const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <>
      <h1>Expense Tracker</h1>
      
      
      <div className="form-container">
        <input
          type="text"
          value={currentExpenses.expVal}
          placeholder="Expense"
          onChange={(e) => handleChange("expVal", e.target.value)}
        />
        <br />
        <input
          type="number"
          value={currentExpenses.amount}
          placeholder="Amount"
          onChange={(e) => handleChange("amount", Number(e.target.value))}
        />
        <br />
        <button onClick={addOrUpdateExpense}>
          {editing ? "Update Expense" : "Add Expense"}
        </button>
      </div>

      
      <div className="disp">
        {expenses.length === 0 ? (
          <p>No expenses added yet.</p>
        ) : (
          expenses.map((expense) => (
            <div key={expense.id} className="card">
              <div className="expense-name">{expense.expVal}</div>
              <div className="expense-amount">${expense.amount}</div>

             
              <div>
                <button className="edit-btn" onClick={() => startEditing(expense)}>
                  Edit
                </button>
                <button onClick={() => deleteExpense(expense.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        )}

        <h1 className="total-expense">Total Expense: ${totalExpense}</h1>
      </div>
    </>
  );
};

export default Expense;
