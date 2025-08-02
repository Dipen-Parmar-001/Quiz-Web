* {
  margin: 0;
  padding: 0;
  font-family: Times New Roman;
}

.heading-line {
  height: 3rem;
  width: 100%;
  background-color: green;
  color: white;
  text-align: center;
  /*padding-top: 0.5rem;*/
  margin-top: 1rem;
  font-size: 20px;
}

.Timer-box {
  height: 2rem;
  width: 8rem;
  background-color: transparent;
  color: black;
  border: 2px solid black;
  margin-top: 2rem;
  border-radius: 0.5rem;
  margin-left: -1rem;
  padding-left: 3rem;
  font-size: 24px;
  padding-top: 0.1rem;
}

.quiz-count {
  height: 2rem;
  width: 8rem;
  background-color: transparent;
  color: black;
  border: 2px solid black;
  margin-top: 2rem;
  border-radius: 0.5rem;
  margin-right: -1rem;
  padding-left: 3rem;
  font-size: 24px;
  padding-top: 0.1rem;
}

.flex-container {
  display: flex;
  justify-content: space-between;
}

.question {
  font-size: 24px;
  color: black;
  margin-left: 0.5rem;
  font-size: 24px;
  margin-top: 2rem;
}

.options {
  height: 3rem;
  width: 98%;
  background-color: #f9f9f9; /* light background for visibility */
  border: 2px solid black;
  border-radius: 1rem;
  box-shadow: inset 4px 4px 6px #ccc, inset -4px -4px 6px #fff;
  margin-top: 1rem;
  padding: 0 1rem;
  line-height: 3rem;
  cursor: pointer;
  font-size: 1rem;
  font-size: 24px;
}

.options:hover {
  background-color: #fcf403;
  box-shadow: inset 4px 4px 6px #fca503, inset -4px -4px 6px #fca503;
}

.button {
  display: flex;
  justify-content: space-between;
}

.previous {
  height: 2rem;
  width: 7rem;
  background-color: red;
  border: none;
  border-radius: 0.5rem;
  color: white;
  font-size: 20px;
  margin-top: 1rem;
  margin-left: 0.5rem;
}

.next {
  height: 2rem;
  width: 5rem;
  background-color: green;
  color: white;
  border-radius: 0.5rem;
  border: none;
  font-size: 20px;
  margin-right: 1rem;
  margin-top: 1rem;
}

.previous:hover {
  height: 2.5rem;
  width: 8rem;
  background-color: red;
  font-size: 24px;
  cursor: pointer;
}

.next:hover {
  height: 2.5rem;
  width: 6rem;
  font-size: 24px;
  cursor: pointer;
}

.play {
  margin: 2rem auto;
  height: 3rem;
  width: 8rem;
  font-size: 36px;
  color: white;
  background-color: #020b59;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  box-shadow: 5px 5px #87878a;
}

.play:hover {
  height: 4rem;
  width: 10rem;
  font-size: 44px;
  box-shadow: 8px 8px #87878a;
}

.end-screen {
  text-align: center;
  font-size: 60px;
  display: none;
    }
