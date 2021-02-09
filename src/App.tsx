import React from 'react';
import './App.css';
import Accordion from './Components/Accordion/Accordion';
import OnOff from './Components/OnOff/OnOff';
import Rating from './Components/Rating/Rating';


const App = () => {
    return (
        <div>
            <OnOff/>

            {/*<input type="text"/>
            <input type="date"/>            
            <PageTitle title = {"This is APP component"}/>
            <Rating value = {3}/>
            <Accordion titleValue = {'Menu'} collapsed = {true}/>
            Article 2
            <Rating value = {4}/>
            <Accordion titleValue = {'Users'} collapsed = {false}/>*/}
        </div>
    )
}

const PageTitle = (props: any) => {
    return (
        <h1>{props.title}</h1>
    )
}


export default App;
