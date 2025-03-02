import { useState } from "react";
let initialCounters = [0, 0, 0];

// export default function Quote() {
//   const [counters, setCounters] = useState(initialCounters);

//   function handleClick(index) {
//     const nextCounter = counters.map((c, i) => {
//       if (i === index) {
//         return c + 1;
//       } else{
//         return c;
//       }
//     });

//     setCounters(nextCounter);

//   }

//   return (
//     <>
//       {counters.map((counter, i) => (
//         <li key={i}>
//           {" "}
//           {counter}
//           <button
//             onClick={() => {
//               handleClick(i);
//             }}
//           >
//             +1
//           </button>
//         </li>
//       ))}
//     </>
//   );
// }

export default function Quote() {
  const [counters, setCounter] = useState([...initialCounters]);

  function handleClickButton(index) {
    const nextCounter = counters.map((c, i) => {
      if (i === index) {
        return c + 1;
      } else {
        return c;
      }
    });

    setCounter(nextCounter);
  }

  return (
    <>
      {counters.map((counter, i) => (
        <li key={i}>
          {" "}
          {counter}
          <button
            onClick={() => {
              handleClickButton(i);
            }}
          >
            +1
          </button>
        </li>
      ))}
    </>
  );
}
