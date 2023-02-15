import React, { useState } from "react";
import "./App.css";

function ItemRow({ item, removeItem, setCheckBox }) {
  // const [checkBoxs, setCheckBox] = useState(false)
  return (
    <li>
      <p>
        <input
          type="checkbox"
          onChange={(e) => {
            setCheckBox(item.no, item.done);
            console.log(item.no, item.done);
          }}
        />
        <input type="text" value={item.title} disabled className={` ${item.done ? 'check' : ''}`}/>
        
        
        <button
          onClick={(e) => {
            removeItem(item.no);
          }}
        >
          삭제
        </button>
      </p>
    </li>
  );
}

const onToggle = useCallback(       // toggle 기능 만들기
  id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } :todo,
        ),
    );
  },
  [todos],
);

function InputItem({ appendItem }) {
  // input의 value로 사용 할 경우 초기값 필수.
  const [newWork, setNewWork] = useState("");
  return (
    <div>
      할일 :
      <input
        type="text"
        value={newWork}
        onChange={(e) => {
          setNewWork(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          appendItem(newWork);
        }}
      >
        추가
      </button>
    </div>
  );
}

// Redux를 이용하면 해결된다.
function TodoList({ todoList, removeItem, setCheckBox }) {
  return (
    <div>
      <ul>
        {todoList.map((item, idx) => {
          return <ItemRow key={item.no} item={item} removeItem={removeItem} setCheckBox={setCheckBox} />;
        })}
      </ul>
    </div>
  );
}

function App(props) {
  //과제 1 : 취소선 기능 추가
  //과제 2 : todolist 데이터를 localstorage에 저장
  const [todoList, setTodoList] = useState([
    { no: 1, title: "밥먹기", done: false },
    { no: 2, title: "잠자기", done: false },
    { no: 3, title: "술마시기", done: false },
    { no: 4, title: "늘어지기", done: false },
  ]);
  const [noCount, setNoCount] = useState(5);

  function appendItem(newItem) {
    console.log(noCount);
    setTodoList([...todoList, { no: noCount, title: newItem, done: false }]);
    setNoCount(noCount + 1);
  }
  function removeItem(no) {
    var newList = todoList.filter((item, idx) => {
      return item.no != no;
    });
    setTodoList(newList);
  }

  function setCheckBox(no, done) {
    var newDone = !done;
    console.log(newDone);
    setTodoList(
      todoList.map((todoList) => {
        return todoList.no === no
        ?{ ...todoList, done: newDone }
        : todoList
      }));
  }

  return (
    <>
      <h1>Todo List</h1>
      <InputItem appendItem={appendItem} />
      <hr />
      <TodoList todoList={todoList} removeItem={removeItem} setCheckBox={setCheckBox} />
    </>
  );
}

export default App;