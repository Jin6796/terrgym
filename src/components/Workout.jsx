import React, { useState } from "react";

function Workout(props) {
  console.log(props.workout.name + props.workout.count);
  // 태그안에 {}써서 자바스크립트 코드 작성 가능
  // {}안에 이벤트 함수나 자료구조를 넘길 수 있다.
  // 이벤트 소스는 Workout.jsx에서 감지됨 그러나 처리는 상위 요소로 전달하여 처리함.
  // 왜지?? (캡쳐링 - 상위에서 하위로, 버블링 - 하위에서 상위로)
  // 데이터 소스가 어디에 있는지? -- workoutApp.jsx에!
  // 그리고 그 안에 count가 있다. - count 수정해야함.
  // 이러한 이유로 리액트 코딩에서는 상위노드에서 이벤트를 처리한다.
  
  const handleincrement = (e) => {
    // 이벤트 발생 소스는 여기(Workout.jsx)에 있지만 이벤트 처리는 workoutApp.jsx에서 함
    // 함수의 파라미터로 값을 넘길 때 props뒤에 오는 이름은 상위노드에서 속성 이름을 작성한다.
    props.onIncrement(props.workout);
  };
  // 바닐라스크립트에서 함수는 객체이다.
  const handleDecrement = (e) => {
    props.onDecrement(props.workout);
  };
  const handleDelete = () => {
    props.onDelete(props.workout);
  };
  return (
    <>
      <li className="workout">
        <span className="workout-name">{props.workout.name}</span>
        <span className="workout-count">{props.workout.count}</span>
        <button
          className="wo-button workout-increase"
          onClick={handleincrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="wo-button workout-decrease"
          // onClick={() => setCount(count - 1)} 이걸 아래코드로
          onClick={handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="wo-button workout-delete" onClick={handleDelete}>
          <i className="fas fa-trash"></i>
        </button>
      </li>
    </>
  );
}

export default Workout;


// 캡슐화된 컴포넌트