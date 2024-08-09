import React, { useState } from 'react';
import './App.css';
import Input from './components/AddInput/Input';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Yogurt",
      type: "100 karopka",
      cost: "18 999",
      srok: "2025-01-10"
    },
    {
      id: 2,
      title: "Qatiq",
      type: "200 karopka",
      cost: "23 999",
      srok: "2024-11-10"
    },
    {
      id: 3,
      title: "Muzqaymoq",
      type: "220 karopka",
      cost: "10 999",
      srok: "2024-10-20"
    },
    {
      id: 4,
      title: "Sut",
      type: "50 karopka",
      cost: "15 999",
      srok: "2024-12-23"
    },
    {
      id: 5,
      title: "Pishloq",
      type: "30 karopk",
      cost: "100 999",
      srok: "2024-11-12"
    },
    {
      id: 6,
      title: "Go'sht",
      type: "11 tonna",
      cost: "86 999",
      srok: "2024-12-12"
    },
    {
      id: 7,
      title: "Qazi",
      type: "100 dona",
      cost: "36 999",
      srok: "2024-12-16"
    },
    {
      id: 8,
      title: "Tovuq go'sht",
      type: "500 kg",
      cost: "20 999",
      srok: "2024-12-9"
    },
  ]);

  const handleDelete = (todoId) => {
    console.log("Delete todo id ", todoId);
    const cloneTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(cloneTodos);
  };

  const [selectedTodo, setSelectedTodo] = useState(null);

  const handleEdit = (todo) => {
    setSelectedTodo(todo);
  };

  const handleSave = () => {
    if (selectedTodo) {
      const updatedTodos = todos.map(todo =>
        todo.id === selectedTodo.id ? selectedTodo : todo
      );
      setTodos(updatedTodos);
      setSelectedTodo(null);
    }
  };

  return (
    <div className="App">
      <div className='container'>
        <Navbar />
        <Input data={todos} setData={setTodos} />
        <div>
          <table className='w-[90%] my-[20px] mx-[auto] border-collapse'>
            <thead className='border-[2px]  border-[black] rounded-[10px]'>
              <tr className=''>
                <th className='border-x-[2px] border-[black] p-2 text-[18px] text-indigo-800 my-[auto] mx-0'>№</th>
                <th className='border-x-[2px] border-[black] p-2 text-[18px] text-indigo-800 my-[auto] mx-0'>Nomi</th>
                <th className='border-x-[2px] border-[black] p-2 text-[18px] text-indigo-800 my-[auto] mx-0'>Turi</th>
                <th className='border-x-[2px] border-[black] p-2 text-[18px] text-indigo-800 my-[auto] mx-0'>Narxi</th>
                <th className='border-x-[2px] border-[black] p-2 text-[18px] text-indigo-800 my-[auto] mx-0'>Muddati</th>
                <th className='border-x-[2px] border-[black] p-2 text-[18px] text-indigo-800 my-[auto] mx-0'>Taxrirlash</th>
              </tr>
            </thead>
            <tbody>
              {
                todos.map((todo, index) => (
                  <tr key={todo.id}>
                    <td className='border-x-[2px] border-[black] border-y-[2px] text-center p-2 text-[19px] font-[600] text-emerald-600'>{index + 1}</td>
                    <td className='border-x-[2px] border-[black] border-y-[2px] text-center p-2 text-[18px] font-[600] text-zinc-800'>{todo.title}</td>
                    <td className='border-x-[2px] border-[black] border-y-[2px] text-center p-2 text-[18px] font-[600] text-zinc-800'>{todo.type}</td>
                    <td className='border-x-[2px] border-[black] border-y-[2px] text-center p-2 text-[18px] font-[600] text-zinc-800'>{todo.cost}</td>
                    <td className='border-x-[2px] border-[black] border-y-[2px] text-center p-2 text-[18px]'>{todo.srok}</td>
                    <td className='border-x-[2px] border-[black] border-y-[2px] text-center p-2 text-[18px]'>
                      <button
                        className='px-3 mx-2 text-[white] border-none rounded-[8px] bg-[red] hover:text-[red] hover:bg-[white] font-[600]'
                        onClick={() => handleEdit(todo)}
                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                      >
                        Edit
                      </button>
                      <button className='px-3 mx-2 text-[white] border-none rounded-[8px] bg-[blue] hover:text-[blue] hover:bg-[white] font-[600]' onClick={() => handleDelete(todo.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>



      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Korzinko hasulotlari</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="modal-body">
                <form className='justify-between items-center my-3 px-3'>
                  <div className='w-[100%] mx-2'>
                    <input
                      className='p-2 w-[100%] m-2 rounded-[10px] border-[2px]'
                      placeholder='Mahsulot nomini kiriting...'
                      type="text"
                      value={selectedTodo ? selectedTodo.title : ''}
                      onChange={(e) => setSelectedTodo({ ...selectedTodo, title: e.target.value })}
                    />
                  </div>
                  <div className='w-[100%] mx-2'>
                    <input
                      className='p-2 w-[100%] m-2 rounded-[10px] border-[2px]'
                      placeholder='Mahsulot sonini kiriting [too kg]...'
                      type="text"
                      value={selectedTodo ? selectedTodo.type : ''}
                      onChange={(e) => setSelectedTodo({ ...selectedTodo, type: e.target.value })}
                    />
                  </div>
                  <div className='w-[100%] mx-2'>
                    <input
                      className='p-2 w-[100%] m-2 rounded-[10px] border-[2px]'
                      placeholder='Mahsulot narxini kiriting...'
                      type="text"
                      value={selectedTodo ? selectedTodo.cost : ''}
                      onChange={(e) => setSelectedTodo({ ...selectedTodo, cost: e.target.value })}
                    />
                  </div>
                  <div className='w-[100%] mx-2'>
                    <input
                      className='p-2 w-[100%] m-2 rounded-[10px] border-[2px]'
                      placeholder='Mahsulot mudatini kiriting...'
                      type="date"
                      value={selectedTodo ? selectedTodo.srok : ''}
                      onChange={(e) => setSelectedTodo({ ...selectedTodo, srok: e.target.value })}
                    />
                  </div>
                </form>
              </div>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Yopish</button>
              <button type="button" className="btn btn-primary" onClick={handleSave} data-bs-dismiss="modal">
                Saqlash
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
