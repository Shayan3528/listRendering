import { useState } from "react";
import { post } from "../data/damiPostData";

export default function Quote() {
  const [quote, setQuote] = useState(post);
  const [count, setCount] = useState(0);
  const [clickDisplay, setClick] = useState(null);

  function handleClick() {
    setCount((c) => c + 1);
  }

  function handleClickDelete(id) {
    const remaining = quote.filter((item) => item.id !== id);
    setQuote(remaining);
    //  const selectedPost = quote.find((q) => q.id === id);
    // console.log(selectedPost);
  }

  const handleClickReset = () => {
    console.log(post);
    setQuote(post);
    setClick(null);
  };

  const handleClickDetails = (x) => {
    setClick(x);
  };

  const handleClickAdd = () => {
    setQuote((previousQuotes) => [
      ...previousQuotes,
      { id: previousQuotes.length + 1, title: "merul Badda" },
    ]);
  };

  //   const handleClickUpdate = (id) => {
  //     setQuote((prevQuotes) => {
  //       const index = prevQuotes.findIndex((item) => item.id === id);
  //       if (index === -1) return prevQuotes;

  //       const updatedQuotes = [...prevQuotes]; // Copy array
  //       updatedQuotes[index] = { ...updatedQuotes[index], title: "sasasas" }; // Update item

  //       return updatedQuotes;
  //     });
  //   };
  const handleClickUpdate = (id) => {
    setQuote((prevQuotes) =>
      prevQuotes.map((item) =>
        item.id === id ? { ...item, title: "sasasas" } : item
      )
    );
  };

  //   useEffect(() => {
  //     const fetchQuote = async () => {
  //       const res = await fetch(`http://api.quotable.io/random`);
  //       const data = await res.json();
  //        setQuote(data);
  //     };

  //     fetchQuote();
  //   }, []);

  //   console.log(quote);

  return (
    <>
      <div>
        {quote.map((a) => {
          return (
            <div key={a.id}>
              <p>
                {" "}
                {a.id} {a.title}
              </p>
              <button
                onClick={() => {
                  handleClickDelete(a.id);
                }}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  handleClickDetails(a.title);
                }}
              >
                Click
              </button>
              <button
                onClick={() => {
                  handleClickUpdate(a.id);
                }}
              >
                Update
              </button>
            </div>
          );
        })}
        <h1>Get quotes using Fetch API</h1>
        <div>{quote?.content}</div>
        <button onClick={handleClick}>New Quote</button>

        <button onClick={handleClickReset}>Reset</button>
        <button onClick={handleClickAdd}>Add</button>
        <div>
          <p>{clickDisplay}</p>
        </div>
      </div>
    </>
  );
}
