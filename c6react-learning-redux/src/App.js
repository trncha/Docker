// // import React from "react";

// function App() {
//   return (
//     <div>
//     {/* <section> Example root element
//     <React.Fragment>
//     <>
//       <article> */}
//         <h1>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
//         <p>บันทึกข้อมูลบัญชีในแต่ละวัน</p>
//         <ul>
//           <li>ค่าเดินทาง <span>- 200</span></li>
//           <li>เงินเดือน <span>+ 20,000</span></li>
//           <li>ค่าอาหาร <span>- 500</span></li>
//         </ul>
//       {/* </article>
//     </>
//     </React.Fragment>
//     </section> */}
//     </div>
//   );
// }

// export default App;

import Transaction from "./components/Transaction";
import "./App.css"
import FormComponet from "./components/FormComponent";
// const Title = () => <h1>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
// const Desciption = () => <p>บันทึกข้อมูลบัญชีในแต่ละวัน</p>

function App() {
  // (การเขียน css แบบ Inline)
  const design = {color: "red", textAlign: "center", fontSize: "1.5rem"}
  return (
    <div className="container">
      {/* <Title/> */}
      {/* <Desciption/> */}
      <h1 style={design}>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
      <FormComponet/>
      <Transaction/>
    </div>
  );
}

export default App;

