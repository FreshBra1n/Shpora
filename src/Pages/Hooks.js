import React from 'react'

export default function About() {
    return (
        <>
            <h1>Hooks(Хуки)</h1>
            <h3>Хуки — это новое дополнение в React 16.8.<br /> Они позволяют вам использовать состояние и другие функции React без написания класса.<br /> Справочник:</h3>
            <ul >
                <li>
                    Основные хуки
                    <ul >
                        <li ><a href='https://ru.reactjs.org/docs/hooks-reference.html#usestate'>useState</a>-<strong>Возвращает значение с состоянием и функцию для его обновления.</strong></li><hr />
                        <li><a href='https://ru.reactjs.org/docs/hooks-reference.html#useeffect'>useEffect</a>-<strong>Принимает функцию, которая содержит императивный код, возможно, с эффектами.</strong></li><hr />
                        <li><a href='https://ru.reactjs.org/docs/hooks-reference.html#usecontext'>useContext</a>-<strong>Принимает объект контекста и возвращает текущее значение контекста для этого контекста.</strong></li><hr />
                    </ul>
                </li>
                <li>
                    <a href='https://ru.reactjs.org/docs/hooks-reference.html#additional-hooks'>Дополнительные хуки</a>
                    <ul >
                        <li>useReducer-<strong>Альтернатива для useState. Принимает редюсер типа (state, action) => newState и возвращает текущее состояние в паре с методом dispatch.</strong></li><hr />
                        <li>useCallback-<strong>Передайте встроенный колбэк и массив зависимостей. Хук useCallback вернёт мемоизированную версию колбэка, который изменяется только, если изменяются значения одной из зависимостей</strong></li><hr />
                        <li>useMemo-<strong>Передайте «создающую» функцию и массив зависимостей. useMemo будет повторно вычислять мемоизированное значение только тогда, когда значение какой-либо из зависимостей изменилось. Эта оптимизация помогает избежать дорогостоящих вычислений при каждом рендере.</strong></li><hr />
                        <li>useRef-<strong>useRef возвращает изменяемый ref-объект, свойство .current которого инициализируется переданным аргументом (initialValue). Возвращённый объект будет сохраняться в течение всего времени жизни компонента.</strong></li><hr />
                        <li>useImperativeHandle-<strong>useImperativeHandle настраивает значение экземпляра, которое предоставляется родительским компонентам при использовании ref. </strong></li><hr />
                        <li>useLayoutEffect-<strong>Сигнатура идентична useEffect, но этот хук запускается синхронно после всех изменений DOM. Используйте его для чтения макета из DOM и синхронного повторного рендеринга. Обновления, запланированные внутри useLayoutEffect, будут полностью применены синхронно перед тем, как браузер получит шанс осуществить отрисовку.</strong></li><hr />
                        <li>useDebugValue-<strong>useDebugValue может использоваться для отображения метки для пользовательских хуков в React DevTools.</strong></li>
                    </ul>
                </li>
            </ul>
        </>
    )
}
