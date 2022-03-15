import React, {useContext} from 'react'
import {ContextLang} from '../../context/langContext'
import './Content.css'
import data from '../../assets/data'

export default function Content() {

  const {lang} = useContext(ContextLang)

  return (
    <div className='content'>
        <h1 className="title">{data[lang].title}</h1>
        <p className="content txt">{data[lang].txt}</p>
    </div>
  )
}
