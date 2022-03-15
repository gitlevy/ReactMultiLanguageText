import React, {useContext} from 'react'
import FrenchFlag from '../../assets/france.svg'
import SpanishFlag from '../../assets/spain.svg'
import EnglishFlag from '../../assets/united-kingdom.svg'
import './ToggleLangs.css'
import {ContextLang} from '../../context/langContext'

export default function ToggleLangs() {

  const {toggleLang} = useContext(ContextLang)

  return (
    <div className='container-langs'>
        <img onClick={() => toggleLang('FR')} src={FrenchFlag} alt="French" />
        <img onClick={() => toggleLang('EN')} src={EnglishFlag} alt="English" />
        <img onClick={() => toggleLang('ES')} src={SpanishFlag} alt="Spanish" />
    </div>
  )
}
