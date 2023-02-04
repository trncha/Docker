/* [original not use redux] import Head from 'next/head'
import { useState } from 'react'
import Navbar from '../components/Navbar'

export default function Home() {

  const [counter, setCounter] = useState(0)
  return (
    <div>

      <Head>
        <title>Create Next App</title>
      </Head>

      <Navbar counter={counter} />

      <div style={{textAlign: 'center'}}>
        <h1>Counter: {counter}</h1>
        <button onClick={()=>setCounter(counter+1)}>+ Count up</button>&nbsp;
        <button onClick={()=>setCounter(counter-1)}>- Count down</button>
      </div>

    </div>
  )
}
*/

import Head from 'next/head'
import Navbar from '../components/Navbar'
import { connect } from 'react-redux'
// connect คือตัวที่ผูกไปยัง store อยากจะให้ component ไหนดึง store ออกไปได้
import { incrementCounter, decrementCounter } from '../redux/actions/counterActions'

const Home = (props) => {

  return (
    <div>

      <Head>
        <title>Create Next App</title>
      </Head>

      <Navbar />

      <div style={{textAlign: 'center'}}>
        <h1>Counter: {props.counter}</h1>
        <button onClick={props.incrementCounter}>+ Count up</button>&nbsp;
        <button onClick={props.decrementCounter}>- Count down</button>
      </div>

    </div>
  )
}

// mapStateToProps
// รับฟังก์ชันจาก store มาใช้งาน
// mapStateToProps คือการอ่านค่าจาก store มาใช่งาน
const mapStateToProps = state => ({
  counter: state.counter.value
  // map state มา แล้วทำการเรียกไปที่ counter แล้วก็เรียก value มาใช่งานได้
})


// mapDispatchToProps
// ส่งค่าไปยัง store เป็น object
const mapDispatchToProps = {
  incrementCounter: incrementCounter,
  decrementCounter: decrementCounter
  // function incrementCounter, decrementCounter จาก counterActions
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
// export default connect(state=>state.counter)(Home) // state.counter มาจาก rootReducer
// เวลา connect จะให้ state มา เวลา connectได้ มันจะวิ่งไปหา counterReducer
