
//states handled by perent

import { useState, useRef, useEffect } from 'react';

export default function Traffic() {  
  const [activeIndex, setActiveIndex] = useState(0);
  const [isGreen, setIsGreen] = useState(true);
  let ref = useRef(0);
  let points = useRef(0);
  
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);


  return (
    <>
      <section
        className="board">        
        <h2>Swich Traffic light on time!</h2>
        <p>Seconds passed: {count}</p>
      <Panel
        title="red"
        className={"dot red"}
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(2)}
      >find yellow <i className='fas fa-arrow-alt-circle-down text-worning'></i>
      </Panel>
      <Panel
        title="yellow"
        className={"dot yellow"}
        isActive={activeIndex === 1}
          onShow={() => {ref.current = ref.current + 1;
            alert('You clicked ' + ref.current + ' times!');
            setActiveIndex(1);
            setIsGreen(!isGreen);
          }}
        ><p>{(isGreen ?
          <i className='fas fa-arrow-alt-circle-down text-sucsess'> find green</i>
            :
          <i className='fas fa-arrow-alt-circle-up text-danger'> find red</i>)}
        </p>       
      </Panel>     
      <Panel
        title="green"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
        className={"dot green"}
        >find yellow <i className='fas fa-arrow-alt-circle-up text-worning'></i>
        </Panel>

        <p>{points.current}</p>

        <p>Next dodo. Find, if its wrong color, execute 1 points bonus from click,
          other add bonus 1 points</p>
        <p>Give await timedelay to show what was correct answer. And say you losed if its == 0 point or win if its == 10 points</p>
        <p>Give end time and say end of job day.</p>
        <p>Give some cases, too late with swich, cars jam!</p>
        </section>
    </>
  );
}

function Panel({
  title,
  children,
  isActive,
  onShow,
  className
}) {
  return (
    <section className="panel">
      
      {isActive ? (<>
      <span className={className}></span>
      <p>{children}</p>
      </>

      ) : (
        <>
        <h3>{title}</h3>
        <button onClick={onShow}>Swich</button>
        </>
      )}
    </section>
  );
}

//---------------------------------------------------------------------------------


// function Profile({ disainer, imageSize = 180 }) {
  
//   const imageSrc = getImageUrl(disainer,)
//   const imageSrc2 = getImageUrl2(disainer)
//   const imageSrc3 = getImageUrl3(disainer)

//   return (
//     <section className="profile">
      
//       <Card
//         title={disainer.name}
//         otherProps={disainer.undercaption}
//       >
//       <img
//         className="gallery"
//         src={imageSrc}
//         alt={disainer.name}
//         width={imageSize}
//         height={imageSize}
//       />
//       <img
//         className="gallery"
//         src={imageSrc2}
//         alt={disainer.name}
//         width={imageSize}
//         height={imageSize}
//       />
//       <img
//         className="gallery"
//         src={imageSrc3}
//         alt={disainer.name}
//         width={imageSize}
//         height={imageSize}
//         />
//       <Card title="About"> 
//       <ul>
//         <li>
//           <b>Description:</b> {disainer.description}
//           </li>
//           </ul>
//       </Card>
//       </Card>
//       <ul>
//         <li>
//           <b>Categories: {disainer.categories.length} </b>
//           ({disainer.categories.join(', ')})
//         </li>
//         <li>
//           <b>Design area: </b>
//           {disainer.designarea}
//         </li>
//       </ul>
//     </section>
//   )
// }

// export default function Gallery() {
//   return (
//     <div>
//       <h1>DAYBED, STOOL, CHAIR</h1>
//       <Profile
//         imageSize={260}
//         disainer={{
//         imageId: 'www.yankodesign.com/images/design_news/2021/03/auto-draft/01_dag_ga%CC%88rsna%CC%88s_daybed',
//         imageId2: 'www.yankodesign.com/images/design_news/2021/03/auto-draft/03_dag_ga%CC%88rsna%CC%88s_daybed',
//         imageId3: 'www.yankodesign.com/images/design_news/2021/03/auto-draft/02_dag_ga%CC%88rsna%CC%88s_daybed',
//         name: 'Teresa Lundmark & Gustav Winsth',
//         undercaption: 'its about comfort',
//         description: 'Dag’s detachable cushions naturally adhere to Gärsnäs’s furniture design reusability standards – minimizing the design’s environmental impact and expanding its life cycle.',
//         designarea: 'scandinavian design',
//         categories: [
//           'Furniture', 
//           'Homes', 
//           'Interiors', 
//           'Lifestyle', 
//           'Product Design', 
//           'Sustainable Design'
//         ],
//       }} />
//       <Profile
//         imageSize={120}
//         disainer={{
//         imageId: 'joyride.design/wp-content/uploads/2020/02/dining-table-one-chool-out-min',
//         imageId2: 'joyride.design/wp-content/uploads/2020/02/close-up-jessica-no-head-min',
//         imageId3: 'joyride.design/wp-content/uploads/2020/10/8hubfront',
//         name: 'JØYRIDE',
//         undercaption: 'its about comfort',
//         description: 'Its compact and minimal design allows Chools to fit neatly under Dox tables to create an unbroken skyline enhancing the sense of space in the environment.',
//         designarea: 'minimal design',
//         categories: [
//           'Furniture', 
//           'Hybrid', 
//           'Interiors', 
//           'Lifestyle', 
//           'Product Design', 
//           'Functional Design'
//         ],
//       }} />
      
//     </div>
//   );
// }








//---------------------------------------------------------------------------------
// // Pretend to send a message.
// function sendMessage(text) {
//   return new Promise(resolve => {
//     setTimeout(resolve, 2000);
//   });
// }
//___________________________________








// //useReducer kui on liiga palju steite hallata
// import { useReducer } from 'react';
// import AddTask from './AddTask.js';
// import TaskList from './TaskList.js';

// export default function TaskApp() {
//   const [tasks, dispatch] = useReducer(
//     tasksReducer,
//     initialTasks
//   );

//   function handleAddTask(text) {
//     dispatch({
//       type: 'added',
//       id: nextId++,
//       text: text,
//     });
//   }

//   function handleChangeTask(task) {
//     dispatch({
//       type: 'changed',
//       task: task
//     });
//   }

//   function handleDeleteTask(taskId) {
//     dispatch({
//       type: 'deleted',
//       id: taskId
//     });
//   }

//   return (
//     <>
//       <h1>Prague itinerary</h1>
//       <AddTask
//         onAddTask={handleAddTask}
//       />
//       <TaskList
//         tasks={tasks}
//         onChangeTask={handleChangeTask}
//         onDeleteTask={handleDeleteTask}
//       />
//     </>
//   );
// }

// function tasksReducer(tasks, action) {
//   switch (action.type) {
//     case 'added': {
//       return [...tasks, {
//         id: action.id,
//         text: action.text,
//         done: false
//       }];
//     }
//     case 'changed': {
//       return tasks.map(t => {
//         if (t.id === action.task.id) {
//           return action.task;
//         } else {
//           return t;
//         }
//       });
//     }
//     case 'deleted': {
//       return tasks.filter(t => t.id !== action.id);
//     }
//     default: {
//       throw Error('Unknown action: ' + action.type);
//     }
//   }
// }

// let nextId = 3;
// const initialTasks = [
//   { id: 0, text: 'Visit Kafka Museum', done: true },
//   { id: 1, text: 'Watch a puppet show', done: false },
//   { id: 2, text: 'Lennon Wall pic', done: false }
// ];








// // reverse ja sort  muteeringu vältimiseks te enii
// import { useState } from 'react';

// let nextId = 3;
// const initialList = [
//   { id: 0, title: 'Big Bellies' },
//   { id: 1, title: 'Lunar Landscape' },
//   { id: 2, title: 'Terracotta Army' },
// ];

// export default function List() {
//   const [list, setList] = useState(initialList);

//   function handleClick() {
//     const nextList = [...list];
//     nextList.reverse();
//     setList(nextList);
//   }

//   return (
//     <>
//       <button onClick={handleClick}>
//         Reverse
//       </button>
//       <ul>
//         {list.map(artwork => (
//           <li key={artwork.id}>{artwork.title}</li>
//         ))}
//       </ul>
//     </>
//   );
// }






// // time of the click
// import { useState } from 'react';

// export default function RequestTracker() {
//   const [pending, setPending] = useState(0);
//   const [completed, setCompleted] = useState(0);

//   async function handleClick() {
//     setPending(p => p + 1);
//     await delay(3000);
//     setPending(p => p - 1);
//     setCompleted(c => c + 1);
//   }

//   return (
//     <>
//       <h3>
//         Pending: {pending}
//       </h3>
//       <h3>
//         Completed: {completed}
//       </h3>
//       <button onClick={handleClick}>
//         Buy     
//       </button>
//     </>
//   );
// }

// function delay(ms) {
//   return new Promise(resolve => {
//     setTimeout(resolve, ms);
//   });
// }






//OBJECT solution mõlemad on samad

// const days = {
//   "Monday - Wendsday": {
//     part: 'dance training',
//     timescedule: '15–35 turns/h',
//     result:'9 points',
//   },
//   'Monday - Thursday': {
//     part:'couding',
//     timescedule: '1–5 h',
//     result: '25 points',
//   },
//   'Sunday': {
//     part:'reading',
//     timescedule: '5–15 pages/h',
//     result:'5 points',
//   }
// };


// function Week({ name }) {
//   const planning = days[name];
//   return (
//     <section>
//       <h1>{name}</h1>
//       <dl>
//         <dt>Scedule for the :</dt>
//         <dd>{planning.part}</dd>
//         <dt>Duration:</dt>
//         <dd>{planning.timescedule}</dd>
//         <dt>Result:</dt>
//         <dd>{planning.result}</dd>
//       </dl>
//     </section>
//   );
// }

// export default function Weekist() {
//   return (
//     <div>
//       <Week name="Monday - Wendsday" />
//       <Week name="Monday - Thursday" />
//       <Week name="Sunday" />
//     </div>
//   );
// }

//IF solution
// function Week({ name }) {
//   let part, timescedule, result;
//   if (name === 'Monday - Wendsday') {
//     part = 'dance training';
//     timescedule = '15–35 turns/h';
//     result = '9 points';
//   } else if (name === 'Monday - Thursday') {
//     part = 'couding';
//     timescedule = '1–5 h';
//     result = '25 points';
//   } else if (name === 'Sunday') {
//     part = 'reading';
//     timescedule = '5–15 pages/h';
//     result = '5 points';
//   }
//   return (
//     <section>
//       <h1>{name}</h1>
//       <dl>
//         <dt>Scedule for the :</dt>
//         <dd>{part}</dd>
//         <dt>Duration:</dt>
//         <dd>{timescedule}</dd>
//         <dt>Result:</dt>
//         <dd>{result}</dd>
//       </dl>
//     </section>
//   );
// }

// export default function Weekist() {
//   return (
//     <div>
//       <Week name="Monday - Wendsday" />
//       <Week name="Monday - Thursday" />
//       <Week name="Sunday" />
//     </div>
//   );
// }






// //props from perent to hild
// import { getImageUrl, getImageUrl2, getImageUrl3 } from './utils.js';  //named import


// function Card({ children, title, otherProps }) {
//   return (
//     <div className="card">
//       <div className="card-content">
//         <h1>{title}</h1>
//         <h4>{otherProps}</h4>
//         {children}
//       </div>
//     </div>
//   );
// }






// import { useState } from "react";

// function Square({value, onSquareClick }) {

//   return (
//     <button className="square" onClick={onSquareClick}>
//       {value}
//     </button>
//   );
// }

// export default function Board() {
//   const [xIsNext, setXIsNext] = useState(true);
//   const [squares, setSquares] = useState(Array(9).fill(null));

 

    
//   function handleClick(i) {
//     if (squares[i] || calculateWinner(squares)) {
//       return;
//     }
//     const nextSquares = squares.slice();
//     if (xIsNext) {
//       nextSquares[i] = "X";
//     } else {
//       nextSquares[i] = "O";
//     }
//     setSquares(nextSquares);
//     setXIsNext(!xIsNext);
//   }

//   const winner = calculateWinner(squares);
//   let status;
//   if (winner) {
//     status = 'Winner: ' + winner;
//   } else {
//     status = 'Next color: ' + (xIsNext ? 'X' : 'O');
//   };
  
//   // render() {
    
//   //   const [nextColor, setnextColor] = useState([]);
//   //   const colors = ["blue", "red", "green"];
    
//   //   function colorChoose() {
//   //     const setnextColor = colors.map((color, index) => {
//   //       const choose = colors[Math.floor(Math.random() * colors.length)];
//   //     })
      
//       function colorChoose() {
//         const squareColor = document.querySelector(".squaremy");
//         const colors = ["blue", "red", "green"];

//         squareColor.addEventListener("click", function () {
//           const chooser = colors[Math.floor(Math.random() * colors.length)];
//           document.getElementById("color").style.backgroundColor = chooser;
//         })
//       }


//       return (
//         <>
//           <div className="section">

//             <div className="status">{status}</div>
//             <div className="board-row">
//               <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
//               <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
//               <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
//             </div>
//             <div className="board-row">
//               <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
//               <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
//               <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
//             </div>
//             <div className="board-row">
//               <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
//               <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
//               <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
//             </div>
//             <div className="squaremy" id="color" onClick={colorChoose}></div>
//             {/* <div className="squaremy" key={index} onClick={setnextColor} style={{ background: { nextColor } }}></div> */}
//           </div>
//         </>
//       );
//     }


//     function calculateWinner(squares) {
//       const lines = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6]
//       ];
//       for (let i = 0; i < lines.length; i++) {
//         const [a, b, c] = lines[i];
//         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//           return squares[a];
//         }
//       }
//       return null;
//     }
  
