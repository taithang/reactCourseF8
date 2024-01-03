import { useMemo, useReducer, useRef, useState } from "react";
import Content from "./Content";

// const gifts = ["CPU i9", "RAM 32GB RGB", "RGB Keyboard"];

// const courses = [
//   { id: 1, name: "HTML,CSS" },
//   { id: 2, name: "Javascript" },
//   { id: 3, name: "ReactJS" },
// ];

//useReducer example
const initState = 0;
const UP_ACTION = "Up";
const DOWN_ACTION = "Down";
const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("Invalid action");
  }
};
function App() {
  // const [counter, setCounter] = useState(1);
  // function handleIncrease() {
  //   setCounter(counter + 1);
  // }
  // return (
  //   <div className="App">
  //     <h1>{counter}</h1>
  //     <button onClick={handleIncrease}>Increase</button>
  //   </div>
  // );
  // const [randomIndex, setRandomIndex] = useState(null);
  // function handleClick() {
  //   setRandomIndex(() => Math.floor(Math.random() * gifts.length));
  // }
  // return (
  //   <div style={{ padding: 32 }}>
  //     <h1>{gifts[randomIndex] || "Chưa lấy phần thưởng"}</h1>
  //     <button onClick={handleClick}>Lấy thưởng</button>
  //   </div>
  // );
  //Two-way binding radio form
  // const [checked, setChecked] = useState();
  // function handleSubmit() {}
  // return (
  //   <div style={{ padding: 32 }}>
  //     {courses.map((course) => (
  //       <div key={course.id}>
  //         <input
  //           type="radio"
  //           checked={checked === course.id}
  //           onChange={() => setChecked(course.id)}
  //         />
  //         {course.name}
  //       </div>
  //     ))}
  //     <button onClick={handleSubmit}>Register</button>
  //   </div>
  // );
  //Two-way binding checkbox form
  //   const [checked, setChecked] = useState([]);
  //   function handleCheck(id) {
  //     setChecked((prev) => {
  //       const isChecked = checked.includes(id);
  //       if (isChecked) {
  //         return checked.filter((item) => item !== id);
  //       } else {
  //         return [...prev, id];
  //       }
  //     });
  //   }
  //   function handleSubmit() {
  //     console.log({ ids: checked });
  //   }
  //   return (
  //     <div style={{ padding: 32 }}>
  //       {courses.map((course) => (
  //         <div key={course.id}>
  //           <input
  //             type="checkbox"
  //             checked={checked.includes(course.id)}
  //             onChange={() => handleCheck(course.id)}
  //           />
  //           {course.name}
  //         </div>
  //       ))}
  //       <button onClick={handleSubmit}>Register</button>
  //     </div>
  //   );
  //TodoList
  // const [job, setJob] = useState("");
  // const [jobs, setJobs] = useState(() => {
  //   const storageJobs = JSON.parse(localStorage.getItem("jobs"));
  //   return storageJobs;
  // });
  // function handleSubmit() {
  //   setJobs((prev) => {
  //     const newJobs = [...prev, job];
  //     //save to localStorage
  //     const jsonJobs = JSON.stringify(newJobs);
  //     localStorage.setItem("jobs", jsonJobs);
  //     return newJobs;
  //   });
  //   setJob("");
  // }
  // return (
  //   <div style={{ padding: 32 }}>
  //     <input value={job} onChange={(e) => setJob(e.target.value)} />
  //     <button onClick={handleSubmit}>Add</button>
  //     <ul>
  //       {jobs.map((job, index) => (
  //         <li key={index}>{job}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );
  //Mounted/Unmounted
  // const [show, setShow] = useState(false);
  // return (
  //   <div style={{ padding: 32 }}>
  //     <button onClick={() => setShow(!show)}>Toggle</button>
  //     {show && <Content />}
  //   </div>
  // );
  //useMemo example
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState("");
  // const [products, setProducts] = useState([]);
  // const nameRef = useRef();
  // function handleSubmit() {
  //   setProducts([...products, { name, price: +price }]);
  //   setName("");
  //   setPrice("");
  //   nameRef.current.focus();
  // }
  // const total = useMemo(() => {
  //   const result = products.reduce((result, prod) => {
  //     return result + prod.price;
  //   }, 0);
  //   return result;
  // }, [products]);
  // return (
  //   <div style={{ padding: "18px 32px" }}>
  //     <input
  //       ref={nameRef}
  //       value={name}
  //       placeholder="Enter name..."
  //       onChange={(e) => setName(e.target.value)}
  //     />
  //     <br />
  //     <input
  //       value={price}
  //       placeholder="Enter price..."
  //       onChange={(e) => setPrice(e.target.value)}
  //     />
  //     <br />
  //     <button onClick={handleSubmit}>Add</button>
  //     <br />
  //     Total: {total}
  //     <ul>
  //       {products.map((product, index) => (
  //         <li key={index}>
  //           {product.name} - {product.price}
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
  //useReducer example

  const [count, dispatch] = useReducer(reducer, initState);
  return (
    <div style={{ padding: "0 20px" }}>
      <h1>{count}</h1>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
    </div>
  );
}

export default App;
