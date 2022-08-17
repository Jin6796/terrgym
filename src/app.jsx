import React from 'react';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const name = "이순신";
  return (
    /* 리액트에서는 태그를 선언하여 사용함 - 멀티라인을 작성하려면 최외곽에 반드시 Fragment 태그를 사용 */
    /* jsp => java + html
       리액트 UI안에는 html태그와 javascript를 혼용하여 쓸 수 있음. */

    <React.Fragment> {/* 생략 가능 '<>' 이렇게만도 쓸 수 있음 */}
      <h1>Hello! {name}</h1>
      <h1>Hello! {name}</h1>
      {
        // 자바스크립트 코드를 작성할 수 있다.
        name && <h1>Hi!!! {name}</h1>
      }
      {
        ['🥝','🍓','🍑'].map(
          (item, index) => (console.log(index), (<h1>{item}</h1>))
        )}
    </React.Fragment>
  );
}

export default App;
