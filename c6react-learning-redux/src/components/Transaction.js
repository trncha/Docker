import Item from "./Item";
import "./Transaction.css"
// import { v4 as uuidv4 } from 'uuid';

const Transaction = () => {
    const data = [
        { title: "ค่ารักษาพยาบาล", amount: 2000 },
        { title: "ค่าน้ำมัน", amount: 5000 },
        { title: "ค่าเช่าบ้าน", amount: 8000 },
    ]
    return (
        <ul className="item-list">
            {/* <Item title="ค่ารักษาพยาบาล" amount="2000"/> */}
            {data.map((element, index) => {
                return <Item key={index} title={element.title} amount={element.amount}/>
                /* return <Item key={uuidv4()} {...element}/> 
                Spread Operator ใช้ในกรณีที่ properties กับ key array เป็นชื่อเดียวกัน
                และใช้ lib uuid มาเป็น key แทนเพื่อไม่ให้ค่า key ซ้ำกัน */ 
            })}
        </ul>
    );
}

export default Transaction