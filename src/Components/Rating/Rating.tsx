import React from "react";

type RatingPropsType = {
    value: number
}

type StarPropsType = {
    selected: boolean
}

const Rating = (props: RatingPropsType) => {
if (props.value === 1) {
    return (
        <div className='mainDiv'>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    )
}
if (props.value ===2) {
    return (
        <div className='mainDiv'>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    )
}
if (props.value ===3) {
    return (
        <div className='mainDiv'>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    )
}
if (props.value ===4) {
    return (
        <div className='mainDiv'>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
        </div>
    )
}
if (props.value ===5) {
    return (
        <div className='mainDiv'>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
        </div>
    )
}

    return (
        <div className='mainDiv'>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    )
}
const Star = (props: StarPropsType) => {

    if (props.selected === true) {
        return <span> <b>star </b></span>
    }
    return (
        <span> star </span>
    )
}

export default Rating;