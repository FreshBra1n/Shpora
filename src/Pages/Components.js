import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Components() {
    return (
        <>
            < >
                <h1>Components Page</h1>
                <div className="container pt-4">
                    <h3>Компоненты делятся на: </h3>
                    <ul style={{ listStyleType: "none" }}>
                        <li> <NavLink className="nav-link" to='/components/class/'>Class Components</NavLink></li>
                        <li> <NavLink className="nav-link" to='/components/func/'>Function Components</NavLink></li>
                    </ul>
                    <div>
                        <h3>Так же есть Pure Component</h3>
                        <p>React.PureComponent похож на React.Component.<br /> <b>Отличие</b> заключается в том, что React.Component <b>не реализует shouldComponentUpdate()</b>,<br /> а React.PureComponent реализует его поверхностным сравнением пропсов и состояния.</p>
                        <p>Если метод render() вашего React-компонента всегда рендерит одинаковый результат<br /> при одних и тех же пропсах и состояниях, для повышения производительности<br /> в некоторых случаях вы можете использовать React.PureComponent.</p>

                    </div>
                </div>
            </>
        </>
    )
}
