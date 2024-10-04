import { useState } from 'react';
import './App.css'
import Button from './components/Button';
import Input from './components/Input';

function App() {
  const [todos, setTodos] = useState([
  ]);
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState(false);
  const [editText, setEditText] = useState('');

  // 1. 추가하기
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addTodo = () => {
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), task: text },
    ]);
    setText('');
  };

  // 2. 삭제하기
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  // 3. 수정하기
  const startEditing = (id, task) => {
    setEditingId(id);
    setEditText(task);
  };

  const saveEdit = (id) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, task: editText } : todo))
    );
    setEditingId(null);
    setEditText('');
  };

  return (
    <>
      <div className='container'>
        <h3>🧸 채채의 Todo List 🧸</h3>
        <br/>갓생을 살자 😼
        <form className='form' onSubmit={handleSubmit}>
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="할 일을 작성하세요"
            className="input"
          />
          <Button onClick={addTodo} type="submit" className="submit">
            할 일 등록
          </Button>
        </form>

        <div>
          {todos.map((todo) => (
            <div key={todo.id}>
              {editingId === todo.id ? (
                <div className='task'>
                  <p>🎀</p>
                  <Input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)} className="save-input"
                  />
                  <Button onClick={() => saveEdit(todo.id)} className="save">저쟝</Button>
                </div>
              ) : (
                <div className='task'>
                  <p>🎀</p>
                  <p className='task-text'>{todo.task}</p>
                  <div>
                    <Button onClick={() => deleteTodo(todo.id)} className="d-f">X</Button>
                    <Button onClick={() => startEditing(todo.id, todo.task)} className="d-f">
                      수졍
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
