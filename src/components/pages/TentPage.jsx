import React from 'react';
import {useParams} from "react-router-dom";

function TentPage(props) {
  const {id, name} = useParams;
  console.log(id+ ", " +name);
  return <div>텐트 상품 소개 페이지</div>
}

export default TentPage;

// useState useParams use