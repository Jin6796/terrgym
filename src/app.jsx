import React from 'react';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const name = "이순신";
  return (
    <React.Fragment> {/* 생략 가능 */}
      <h1>Hello! {name}</h1>
      <h1>Hello! {name}</h1>
      {
        // 자바스크립트 코드를 작성할 수 있다.
        name && <h1>Hi!!! {name}</h1>
      }
      {
        ['🥝','🍓','🍑'].map(item=>(
          <h1>{item}</h1>
        ))
      }
    </React.Fragment>
  );
}

export default App;
