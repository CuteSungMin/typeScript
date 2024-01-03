import "./list.css"
import {useState, FormEvent} from "react"

function List() {
    const [update, setUpdate] = useState("")
    const [updates, setUpdates] = useState<string[]>([])

    // input 데이터 확인, e의 타입을 지정해줌
    const updateList = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUpdate(e.target.value)
    }
    // input 데이터 제출하기, e의 type을 지정해줌
    const dataSubmit = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        if(update === ""){ //공백 등록 x
            return
        }
        setUpdates((newArray)=>[update, ...newArray])
        setUpdate("")
    }

    return(
        <section>
            <div>
                <form onSubmit={dataSubmit}>
                    <input type="text" placeholder="메모를 해볼까?" onChange={updateList} />
                    <button>등록</button>
                </form>
            </div>
            <div>
                {updates.map((list, i)=>(
                <p key={i}>{list}</p>))}
            </div>
        </section>
    )
}

export default List ; 