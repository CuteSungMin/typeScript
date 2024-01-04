import "./write.css"
import { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom"
import { addUpdate } from "../actions";
import Logo from "../img/solid_bold_LOGO.png";

export interface UpdateItemList {
  title: string;
  description: string;
  image: File | null;
}

function Write() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const updateTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const updateList = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const updateImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const dataSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title === "" || description === "" || !image) {
      return;
    }

    const newItem: UpdateItemList = { title, description, image };
    dispatch(addUpdate(newItem));
    setTitle("");
    setDescription("");
    setImage(null);
  };

  return (
    <section className="w1200">
      <div className="headerWrap">
        <img className="Logo" src={Logo} alt="로고" />
        <Link to="/*">
          <p>HOME</p>
        </Link>
      </div>
      <div>
        <form className="inputWrap" onSubmit={dataSubmit}>
          <input className="imgInput" type="file" onChange={updateImage}/>
          <input className="textInput" type="text" placeholder="술 이름이 무엇인가요?." value={title} onChange={updateTitle}/>
          <input className="textInput" type="text" placeholder="간단한 설명을 적어주세요." value={description} onChange={updateList}/>
          <button className="submitBtn" type="submit">등록</button>
        </form>
      </div>
    </section>
  );
}

export default Write;