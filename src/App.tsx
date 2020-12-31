import React from 'react';
import './App.css';
import Accordion from './Components/Accordion/Accordion';
import Rating from './Components/Rating/Rating';


const App = () => {
    return (
        <div>
            <input type="text"/>
            <input type="date"/>            
            <PageTitle title = {"This is APP component"}/>
            <Rating value = {3}/>
            <Accordion/>
            Article 2
            <Rating value = {4}/>
        </div>
    )
}

const PageTitle = (props: any) => {
    return (
        <h1>{props.title}</h1>
    )
}


export default App;
