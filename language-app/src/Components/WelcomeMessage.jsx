import React, { useContext } from 'react'
import LanguageContext from '../LanguageContext'

const WelcomeMessage = () => {
    
    const language = useContext(LanguageContext)
    return (
        <div>
            <p>{ language.language }</p>
        </div>
    )
}

export default WelcomeMessage
