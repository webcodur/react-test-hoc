import "./App.css";
import ImageBox from "./exam1/ImageBox";
import { useEffect, useState } from "react";
import axios from "axios";
import TodoList from "./exam2/TodoList";
import UserList from "./exam2/UserList";

function App() {
  const url = "https://dog.ceo/api/breeds/image/random";
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  useEffect(() => {
    axios.get(url).then((response) => {
      setTitle(response.data.message);
      setImage(response.data.message);
    });
  }, []);
  return (
    <div className="App">
      <h1>예시1</h1>
      <p>이미지에 마우스를 올리면 파일명을 표시하는 기능의 HOC</p>
      <ImageBox imageUrl={image} imageTitle={title} />

      <h1>예시2</h1>
      <p>
        데이터 목록에서 input값에 대한 필터링 기능을 넣어 검색 효과를 부여하는
        HOC
      </p>
      <UserList />
      <TodoList />
    </div>
  );
}

export default App;
