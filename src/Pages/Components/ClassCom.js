import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'





export default class ClassCom extends Component {
    render() {
        return (
            <>
                <div>
                    <h4>
                        <NavLink className="nav-link" to='/components/class/methods/'>
                            Более подробно про методы жизненного цикла здесь
                        </NavLink >

                    </h4>
                    <hr />
                    <h3>Классовые компоненты содержат в себе **Lifecycle methods**</h3>
                    <hr />
                    <h4>Жизненный цикл компонента :</h4>
                    <h5>Монтирование </h5>
                    <h6>При создании экземпляра компонента и его вставке в DOM, следующие методы вызываются в установленном порядке:</h6>
                    <ul style={{ fontStyle: 'italic', fontWeight: 'bold', textDecorationLine: 'underline' }} >
                        <li>constructor()</li>
                        <li>static getDerivedStateFromProps()</li>
                        <li>render()</li>
                        <li>componentDidMount()</li>
                    </ul>
                    <h5>Обновление </h5>
                    <h6>Обновление происходит при изменении пропсов или состояния. Следующие методы вызываются в установленном порядке при повторном рендере компонента:</h6>
                    <ul style={{ fontStyle: 'italic', fontWeight: 'bold', textDecorationLine: 'underline' }} >
                        <li>static getDerivedStateFromProps()</li>
                        <li>shouldComponentUpdate()</li>
                        <li>render()</li>
                        <li>getSnapshotBeforeUpdate()</li>
                        <li>componentDidUpdate()</li>
                    </ul>
                    <h5>Размонтирование </h5>
                    <h6>Этот метод вызывается при удалении компонента из DOM:</h6>
                    <ul style={{ fontStyle: 'italic', fontWeight: 'bold', textDecorationLine: 'underline' }}>
                        <li>componentWillUnmount()</li>
                    </ul>
                    <h5>Обработка ошибок </h5>
                    <h6>Этот методы вызываются, если произошла ошибка в процессе рендеринга, методе жизненного цикла или конструкторе любого дочернего компонента:</h6>
                    <ul style={{ fontStyle: 'italic', fontWeight: 'bold', textDecorationLine: 'underline' }}>
                        <li>static getDerivedStateFromError()</li>
                        <li>componentDidCatch() </li>
                    </ul>

                </div >

            </>

        )
    }
}
