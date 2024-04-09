import { Link } from "react-router-dom"
export default function Gnb() {
    return (
        <ul>
            <li>
                <Link to={'/'}>레이아웃</Link>
            </li>
            <li>
                <Link to={'/style'}>스타일</Link>
            </li>
            <li>
                <Link to={'/rull_name'}>네임규칙</Link>
            </li>
        </ul>
    )
}