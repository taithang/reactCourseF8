import React, { useRef } from "react";
import { useEffect, useState, useLayoutEffect, memo } from "react";

// const tabs = ["posts", "comments", "albums"];
export default function Content() {
  // const [title, setTitle] = useState("");
  // const [posts, setPosts] = useState([]);
  // const [type, setType] = useState("posts");
  // const [showGoToTop, setShowGoToTop] = useState(false);
  // useEffect(
  //   function changeTitle() {
  //     fetch(`https://jsonplaceholder.typicode.com/${type}`)
  //       .then((res) => res.json())
  //       .then((posts) => {
  //         setPosts(posts);
  //       });
  //   },
  //   [type]
  // );
  // useEffect(() => {
  //   function handleScroll() {
  //     if (window.scrollY >= 300) {
  //       setShowGoToTop(true);
  //     } else {
  //       setShowGoToTop(false);
  //     }
  //   }
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  // return (
  //   <div>
  //     {tabs.map((tab) => (
  //       <button
  //         key={tab}
  //         style={type === tab ? { color: "#fff", backgroundColor: "#333" } : {}}
  //         onClick={() => setType(tab)}
  //       >
  //         {tab}
  //       </button>
  //     ))}
  //     <input value={title} onChange={(e) => setTitle(e.target.value)} />
  //     {posts.map((post) => (
  //       <li key={post.id}>{post.title || post.name}</li>
  //     ))}
  //     {showGoToTop ?? (
  //       <button style={{ position: "fixed", right: 20, bottom: 20 }}>
  //         Go to top
  //       </button>
  //     )}
  //   </div>
  // );
  //UseEffectLayout example
  // const [count, setCount] = useState(0);
  // useLayoutEffect(() => {
  //   if (count > 3) {
  //     setCount(0);
  //   }
  // }, [count]);
  // const handleRun = () => {
  //   setCount(count + 1);
  // };
  // return (
  //   <div>
  //     <h1>{count}</h1>
  //     <button onClick={handleRun}>Run</button>
  //   </div>
  // );
  //useRef example
  // const [count, setCount] = useState(60);
  // const timerId = useRef();
  // const prevCount = useRef();
  // const h1Ref = useRef();
  // useEffect(() => {
  //   prevCount.current = count;
  // }, [count]);
  // useEffect(() => {
  //   console.log(h1Ref.current);
  // }, []);
  // function handleStart() {
  //   timerId.current = setInterval(
  //     () => setCount((prevCount) => prevCount - 1),
  //     1000
  //   );
  // }
  // function handleEnd() {
  //   clearInterval(timerId.current);
  // }
  // return (
  //   <div style={{ padding: 20 }}>
  //     <h1 ref={h1Ref}>{count}</h1>
  //     <button onClick={handleStart}>Start</button>
  //     <button onClick={handleEnd}>Stop</button>
  //   </div>
  // );
  //memo example
  // const [count, setCount] = useState(0);
  // function increase() {
  //   setCount(count + 1);
  // }
  // return (
  //   <div style={{ padding: 20 }}>
  //     <h1>{count}</h1>
  //     <button onClick={increase}>Click me!</button>
  //   </div>
  // );
}
