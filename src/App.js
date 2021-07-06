/** @format */

import { useState } from "react";
import "./App.css";
import { HiBackspace } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLastOperator,
  addToPreviousData,
  selectAddResult,
  addToLastOperator,
} from "./app/counterSlice";

function App() {
  const PreviousData = useSelector(selectAddResult);
  const PreviousOperator = useSelector(selectLastOperator);
  const dispatch = useDispatch();
  const [inputDigits, setInputDigits] = useState("");
  const button = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const handleOperator = (e) => {
    if (inputDigits.length > 0) {
      if (e === "%") {
        setInputDigits(inputDigits / 100);
      } else {
        dispatch(addToPreviousData(parseInt(inputDigits)));
        if (e === "+") {
          dispatch(addToLastOperator("+"));
        } else if (e === "-") {
          dispatch(addToLastOperator("-"));
        } else if (e === "*") {
          dispatch(addToLastOperator("*"));
        } else if (e === "/") {
          dispatch(addToLastOperator("/"));
        }
        setInputDigits("");
      }
    }
  };
  const showResult = () => {
    if (inputDigits.length > 0) {
      var b;
      if (PreviousOperator === "+") {
        b = parseInt(inputDigits) + PreviousData;
      } else if (PreviousOperator === "-") {
        b = PreviousData - parseInt(inputDigits);
      } else if (PreviousOperator === "/") {
        b = PreviousData / parseInt(inputDigits);
      } else if (PreviousOperator === "*") {
        b = parseInt(inputDigits) * PreviousData;
      }
      setInputDigits(String(b));
    }
  };

  return (
    <div className="App">
      <center>
        <input
          placeholder="0"
          type="number"
          className="inputNumbers"
          value={inputDigits}
          onChange={(e) => setInputDigits(e.target.value)}
        />
      </center>
      <div className="buttons">
        <div className="numberButtons">
          {button.map((b) => {
            return (
              <div key={button.indexOf(b)} className="buttonNumberRow">
                {b.map((c) => {
                  return (
                    <button
                      className="button"
                      id={c}
                      key={c}
                      onClick={() => {
                        setInputDigits(inputDigits + c);
                      }}>
                      {c}
                    </button>
                  );
                })}
              </div>
            );
          })}
          <div className="finalRow">
            <button
              onClick={() => {
                setInputDigits(inputDigits + "0");
              }}
              id="0"
              key="0"
              className="button">
              0
            </button>
            <button
              onClick={() => {
                if (inputDigits.includes(".")) {
                  alert("One decimal already there");
                } else {
                  setInputDigits(inputDigits + ".");
                }
              }}
              id="."
              key="."
              className="button">
              .
            </button>
            <HiBackspace
              onClick={() => {
                setInputDigits(inputDigits.slice(0, -1));
              }}
              className="button"
            />
          </div>
        </div>
        <div className="extraButtons">
          <button
            key="+"
            onClick={() => {
              handleOperator("+");
            }}
            className="button">
            +
          </button>
          <button
            key="-"
            onClick={() => {
              handleOperator("-");
            }}
            className="button">
            -
          </button>
          <button
            key="/"
            onClick={() => {
              handleOperator("/");
            }}
            className="button">
            /
          </button>
          <button
            key="*"
            onClick={() => {
              handleOperator("*");
            }}
            className="button">
            *
          </button>
        </div>
        <div className="extraButtons">
          <button
            onClick={() => {
              handleOperator("%");
            }}
            key="%"
            className="button">
            %
          </button>
          <button
            key="C"
            onClick={() => {
              setInputDigits("");
            }}
            className="button">
            C
          </button>
          <button key="=" onClick={showResult} className="button">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
