import React from 'react'
import { Link } from 'react-router-dom'
import item from './../../assets/2.png'


export default function FuncCom() {
    return (
        <>
            <h1>Функциональные компоненты</h1>
            <h3>После презентации React Hooks стали крайне популярны и сейчас зачастую всё пишеться именно на функциональнных компонентах</h3>
            <img style={{ borderRadius: 10 }} src={item} alt="logo" />
            <p><strong>Функция</strong> — компонент, потому что она получает данные в одном объекте («пропсы») в качестве параметра и возвращает React-элемент.<br /> Мы будем называть такие компоненты «функциональными», так как они буквально являются функциями.</p>
            <h4><Link to='/hooks/'>Hooks</Link>-То из за чего многие перешли на Функциональные компоненты </h4>
        </>
    )
}
