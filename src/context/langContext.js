import React, {createContext, useState} from 'react'
export const ContextLang = createContext()

const supportedLangs = ['FR', 'EN', 'ES']
let browserLang = navigator.language.slice(3)
if (supportedLangs.indexOf(browserLang) === -1){
    browserLang = 'EN'
}

const ContextProvider = props => {

    const [lang, setLang] = useState('FR')
    
    const toggleLang = newLang => {
        setLang(newLang)
    }

    return (
        <ContextLang.Provider value={{lang, toggleLang}}>
            {props.children}
        </ContextLang.Provider>
    )
}

export default ContextProvider
