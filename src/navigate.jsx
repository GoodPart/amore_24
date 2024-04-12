import React, { useState } from "react"
import { Link } from "react-router-dom"
export default function Gnb() {

    const [nav, setNav] = useState('/');

    function changeNav(_this) {
        setNav(_this)
    }
    return (
        <ul className="gnb">
            <li>
                <Link to={'/'} onClick={() => changeNav('/')} className={nav === '/' ? "on" : ""}>기본</Link>
            </li>
            <li>
                <Link to={'/rull_name'} onClick={() => changeNav('/rull_name')} className={nav === '/rull_name' ? "on" : ""}>네임규칙</Link>
            </li>
            <li>
                <Link to={'/style'} onClick={() => changeNav('/style')} className={nav === '/style' ? "on" : ""}>스타일</Link>
            </li>
            <li>
                <Link to={'/component'} onClick={() => changeNav('/component')} className={nav === '/component' ? "on" : ""}>컴포넌트</Link>
            </li>
        </ul>
    )
}