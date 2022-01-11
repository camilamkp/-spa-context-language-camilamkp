import React, { useContext } from 'react';
import LanguageContext from '../LanguageContext';

const LanguageChooser = () => 
{
    const { language, setLanguage } = useContext(LanguageContext);

    const handleChange = (e) =>
    {
        setLanguage(e.target.value)
    }

    return (
        <div>
            <select 
            value={ language }
            onChange={ (e) => handleChange(e) }
            >
                <option value="Hallo Welt!">Deutsch</option>
                <option value="Hello World!">English</option>
                <option value="Olá Mundo!">Portuguese</option>
            </select>
        </div>
    )
}

export default LanguageChooser
