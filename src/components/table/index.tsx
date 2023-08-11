import { HiCheck, HiChevronLeft, HiChevronRight, HiX } from "react-icons/hi";

function Table() {
  const expenses = [
    {
      Name: "Test Expense",
      ExpenseCategory: "Groceries",
      Resident: "Luis",
      Date: "2023-09-08",
      Total: 50.43,
      Recurrent: true,
    },
    {
      Name: "Test Expense",
      ExpenseCategory: "Groceries",
      Resident: "Luis",
      Date: "2023-09-08",
      Total: 50.43,
      Recurrent: false,
    },
    {
      Name: "Test Expense",
      ExpenseCategory: "Groceries",
      Resident: "Luis",
      Date: "2023-09-08",
      Total: 50.43,
      Recurrent: true,
    },
    {
      Name: "Test Expense",
      ExpenseCategory: "Groceries",
      Resident: "Luis",
      Date: "2023-09-08",
      Total: 50.43,
      Recurrent: true,
    },
    {
      Name: "Test Expense",
      ExpenseCategory: "Groceries",
      Resident: "Luis",
      Date: "2023-09-08",
      Total: 50.43,
      Recurrent: false,
    },
    {
      Name: "Test Expense",
      ExpenseCategory: "Groceries",
      Resident: "Luis",
      Date: "2023-09-08",
      Total: 50.43,
      Recurrent: false,
    },
    {
      Name: "Test Expense",
      ExpenseCategory: "Groceries",
      Resident: "Luis",
      Date: "2023-09-08",
      Total: 50.43,
      Recurrent: true,
    }
  ]

  const expensesData = {
    expenses,
    page: 1,
    totalPages: 10,
    totalEntries: 70
  }
    return (
      <>
        <section className="w-8/12 h-5/6 flex flex-col text-white">
          <div className="h-[10%] rounded-md rounded-b-none flex justify-around items-center px-4 bg-[#304242]">
              <span className="w-[20%]">
                Name
              </span>
              <span className="w-[17%]">
                Category
              </span>
              <span className="w-[17%]">
                Resident
              </span>
              <span className="w-[13%]">
                Date
              </span>
              <span className="w-[13%]">
                Total
              </span>
              <span className="w-[11%] text-center">
                Recurrent
              </span>
          </div>
          <div className="grow h-[80%] max-h-[80%]">
            {
              expensesData.expenses.map(expense => (
                <div className="w-full h-14 flex justify-around border border-t-0 border-[#304242] hover:bg-[#304242] hover:cursor-pointer pt-4 px-4">
                  <span className="w-[20%]">
                    {expense.Name}
                  </span>
                  <span className="w-[17%]">
                    {expense.ExpenseCategory}
                  </span>
                  <span className="w-[17%]">
                    {expense.Resident}
                  </span>
                  <span className="w-[13%]">
                    {expense.Date}
                  </span>
                  <span className="w-[13%]">
                    {expense.Total}&nbsp;€
                  </span>
                  <span className="w-[11%] flex justify-center">
                    {
                      expense.Recurrent ?
                        <HiCheck /> :
                        <HiX />
                    }
                  </span>
                </div>
              ))
            }
          </div>
          <div className="h-[10%] flex flex-row-reverse items-center">
              <span className="flex">
                <HiChevronLeft />
                {expensesData.page}/{expensesData.totalPages}
                <HiChevronRight />
              </span>
              <span className="flex">
                Total Entries: {expensesData.totalEntries}
              </span>
          </div>
        </section>
      </>
    )
}

export default Table;
  