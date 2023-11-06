import React from "react"

function FAQ(){
    return(
        <div className='wrapper'>
            <div className='accordion'>

                {data.map((item, i) =>(
                    <div className="item">
                        <div className="title">
                            <h2>{item.question}</h2>
                        </div>
                        <div className="content">{item.answer}</div>
                    </div>
                ))}

            </div>
        </div>
    )
}

const data = [
    {

    },
    {

    },
    {
        question: 'Question 3',
        answer:
            'Lorem ipsum dolor sit amet, consectetur adip'
    }
]