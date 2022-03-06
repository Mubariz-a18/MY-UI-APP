import React from "react";
import Header from './Header'
import Footer from "./Footer";
import Name from './Name.js'
import Counter from "./utils/Counter";





function App() {
    return <div>
        <Header />
        <Counter count={10}/>
        <Counter count={100}/>

        <Name personName='mubariz' personAge='22'/>
        <Name personName='imran' personAge='23'/>
        <img width="200" height="200" src="https://4.img-dpreview.com/files/p/E~TS1180x0~articles/3925134721/0266554465.jpeg" />
        <Footer />
    </div>
}


export default App;