import React, { useState, useEffect } from "react"
import { Link, useLocation, } from "react-router-dom"
import { HashLink } from "react-router-hash-link";

const headerList = [
    {
        title: "기본",
        link : "/",
    },
    {
        title: "기본규칙",
        link : "/rull_name",
    },
    {
        title: "스타일",
        link : "/style",
    },
    {
        title: "컴포넌트",
        link: "/component",
        children: [
            {
                title: "준비",
                link: "/component/#ready",
            },
            {
                title: "Header",
                link: "/component/#Header",
            },
            {
                title: "Header 몰 이동",
                link: "/component/#Header_true",
            },
            {
                title: "Header 상단 고정",
                link: "/component/#Header_fixed",
            },
            {
                title: "Swiper",
                link: "/component/#swiper",
            },
            {
                title: "Swiper slide",
                link: "/component/#swiper_slide",
            },
            {
                title: "Button 공유",
                link: "/component/#button_share",
            },
            {
                title: "Button 자세히 보기",
                link: "/component/#button_detail",
            },
            {
                title: "모달 팝업",
                link: "/component/#modal_popup",
            },
            {
                title: "Tab",
                link: "/component/#Tab",
            },
            {
                title: "Article 정보",
                link: "/component/#Article_info",
            },
            {
                title: "Article 소개",
                link: "/component/#Article_introduce",
            },
            {
                title: "Article 예약",
                link: "/component/#Article_reserve",
            },
            {
                title: "Footer",
                link: "/component/#footer",
            },
        ]
    },
]

export default function Gnb() {

    const [nav, setNav] = useState({
        dpt_1: '/',
        dpt_2 : ''
    });

    function changeNav(_this) {
        setNav(_this)
        
        
    }

    function hashMoveScrollOffsetChange() {
        
    }

    const location = useLocation();
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({top : window.scrollY - 80})
        }, 10)
    }, [location])

    return (
        <ul className="gnb">
            {
                Object.values(headerList).map((ele, index) => {
                    return (
                        <li key={index}>
                            <Link to={ele.link} onClick={() => changeNav({dpt_1 : ele.link, dpt_2 : ''})} className={nav.dpt_1 === ele.link ? "on" : ""}>{ele.title}</Link>
                            {
                                ele.children ? (
                                    <ul>
                                        {
                                            Object.values(ele.children).map((child, index2) => {
                                                return <li key={index2} className={nav.dpt_2 === child.link ? "on" : ""}><HashLink to={child.link} onClick={() => { changeNav({ dpt_1: ele.link, dpt_2: child.link });  hashMoveScrollOffsetChange()}}>{child.title}</HashLink></li>
                                            })
                                        }
                                    </ul>
                                ) : ""
                            }
                            
                        </li>
                        
                    )
                })
            }
        </ul>
    )
}