import "./list.css"
import { useSelector } from 'react-redux';

export interface UpdateItemList {
    title: string;
    description: string;
    image: File | null;
  }

function List() {
  const updates = useSelector((state: any) => state.updates);

  return (
    <section className="w1200">
      <article className="listWrap">
        {updates.map((item: UpdateItemList, i: number) => (
          <div key={i}>
            {item.image && (
              <img className='listImg' src={URL.createObjectURL(item.image)} alt={`Preview of ${item.title}`}/>
            )}
            <p>이름 {item.title}</p>
            <p>설명 {item.description}</p>
          </div>
        ))}
      </article>
    </section>
  );
}

export default List;