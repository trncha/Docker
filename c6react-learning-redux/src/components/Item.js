// (การเขียน css แบบ External)
// import "./Item.css"
import PropTypes from 'prop-types'; // เอาไว้ตรวจสอบค่าที่อยู่ใน Properties

const Item = (props) => {
    // const name = "ค่าเดินทาง "
    // const amount = 5000
    const { title, amount } = props
    return (
        // <li className="item">{name}<span>-{amount}</span></li>
        <li>{title}<span>{amount}</span></li>
    )
}

Item.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
}
/* Validation props
isRequired ต้องใส่ข้อมูลมาด้วย ไม่งั้นจะเกิดการผิดพลาด */

export default Item