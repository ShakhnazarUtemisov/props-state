import React from "react";

class Quotes extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            id: 0
        }

        this.handleChangeQuote = this.handleChangeQuote.bind(this);
        
    }

    handleChangeQuote(){
        this.setState({
            id: Math.floor(Math.random()*4)
        })
    }

    render(){

    const quotes = [
            'Чем умнее человек, тем легче он признает себя дураком',
            'Что разум человека может постигнуть и во что он может поверить, того он способен достичь',
            'Стремитесь не к успеху, а к ценностям, которые он дает',
            'Сложнее всего начать действовать, все остальное зависит только от упорства.'
        ]
    
    const colors = [
        'yellow',
        'green',
        'orange',
        'pink'
    ]

        return(
            <div className="quotes-wrapper">
                <div style={{background: colors[this.state.id]}}>
                    <q>{quotes[this.state.id]}</q>
                </div>
                <button onClick={this.handleChangeQuote}>Next</button>
            </div>
        )
    }
}

export default Quotes;