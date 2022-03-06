import React from "react";
import Header from './Header'
import Footer from "./Footer";
import Name from './Name.js'






function App() {
    return <div>
        <Header />
        <Name personName='mubariz' personAge='22'/>
        <Name personName='imran' personAge='23'/>
        <Footer />
    </div>
}


export default App;