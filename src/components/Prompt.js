import React from 'react'
import { Link } from 'react-router-dom'

function Prompt(props) {
    console.log("myu props", props)
    return (
        <div className="card">
            <h2>The Scene: {props.question.prompt.scene}</h2>
            <h3>The Question: {props.question.prompt.question}</h3>
            <p>{props.question.choices[0].answer}</p>
            <p>{props.question.choices[0].subtext}</p>
            <p>{props.question.choices[1].answer}</p>
            <p>{props.question.choices[1].subtext}</p>
            <p>{props.question.choices[2].answer}</p>
            <p>{props.question.choices[2].subtext}</p>
            <input
                type="text"
                placeholder="Your answer"
            />
            <Link>
                <button className="admin-button">Submit Answer</button>
            </Link>
        </div>
    )
}

export default Prompt;
