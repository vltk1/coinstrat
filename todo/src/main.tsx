import React from 'react'
import ReactDOM from 'react-dom/client'
import { Button } from './components'
import Card from './components/Card/Card'
import "../styles/token.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
    <>
        <Button label='2024年2月19日(月)' />,
        <Card color="primary" size="sm" isClickable>
            Hello
        </Card>
    </>

)
