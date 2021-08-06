import React from 'react'



export default function State_Props() {
    const [time, setTime] = React.useState(0)




    return (
        <>
            <div>
                <button >click</button>
                <div>{time}</div>
            </div>
        </>
    )
}
