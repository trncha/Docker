import './FormComponent.css'
const FormComponet = () => {
    const inputTitle = (event) => {
        console.log("title", event.target.value)
    }

    const inputAmount = (event) => {
        console.log("amount", event.target.value)
    }

    const saveItem = (event) => {
        event.preventDefault()
        console.log("Save Item")
    }
    return (
        <div>
            <form>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle}/>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="(+ รายรับ, - รายจ่าย)" onChange={inputAmount}/>
                </div>
                <div>
                    <button type="submit" className="btn" onClick={saveItem}>เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponet