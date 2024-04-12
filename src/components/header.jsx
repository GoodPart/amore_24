import React, { useRef, useEffect } from "react";
import { mapInfo, linkList } from "../data/data";




/* 드롭다운 메뉴 영역 */
export function ModuleLinkPopup({data}) {

    const result = Object.values(data).map((ele, index) => {
        return (
            <li className={ Boolean(ele.active) ? "is-active" : ""} key={index}>
                <button ap-click-area={ele.apClickArea} ap-click-name={ele.apClickName} ap-click-data={ele.apClickData}>
                    <div className="linkThumb">
                        <i className={`icon ${ele.icon}`}></i>
                    </div>
                    <p className="linkText">{ ele.title}</p>
                </button>
            </li>
        )
    })
    return (
        <ul className="module-linkPopup">
            {result}
        </ul>
    )
}
/* 드롭다운 메뉴 영역 */

export function Header({ state, hide, gRef }) {
    const headerRef = useRef(null);
    
    useEffect(() => {

        if (gRef != undefined) {
            gRef(headerRef.current.offsetTop)
        }

    }, [])

    return (
        <header className="module-header is-scroll">
            <div className="module-header__inner">
                <div className="module-header__logo" style={{width : "166px"}}>
                    <a href="#" ap-click-area="스토어_공통" ap-click-name="스토어_공통_Header" ap-click-data="아모레 스토어 로고 버튼">
                        <span className="module-header__logo-img is-white" aria-hidden="true"><i className="atom-icon logo_amoreStore_s165x28_fff">채널</i></span>
                        <span className="module-header__logo-img is-black"><img src="https://images-kr.amoremall.com/logo/ic_logo_amoreMall_s158x28_000.svg" alt="AMORE MALL" /></span>
                    </a>
                </div>

                <div className={`module-header__logo-link ${Boolean(state) ? 'is-active' : ''}`} >
                    <button ap-click-area="스토어_공통" ap-click-name="스토어_공통_Header" ap-click-data="몰 이동 열기 버튼">
                        <i className="atom-icon ic_angle_down_circle_fill_s24">열기/닫기</i>
                    </button>
                    <ModuleLinkPopup data={linkList} />
                </div>
                <div className="module-header__util">
                    <a href="" className="module-header__btn module-header__btn--user" ap-click-area="공통" ap-click-name="스토어_공통_Header" ap-click-data="마이페이지 버튼">마이</a>
                </div>
            </div>
            <div id="headerSection" className="module-header--default" ref={headerRef}>
                <h2 className="module-header__logo--default">
                    <a href="#" ap-click-area="스토어_공통" ap-click-name="스토어_공통_Header" ap-click-data="매장명 버튼">{mapInfo.title}</a>
                </h2>
                <p className="module-header__desc--default">{mapInfo.desc}</p>
            </div>
            <div id="aniHeader" className={`module-header-layer module-header--ani is-clear ${Boolean(hide) ? 'is-hide' : ''}`}>
                <h1 className="module-header__title--ani">아모레성수</h1>
                <div className="module-header__util">
                    <a href="" className="module-header__btn module-header__btn--user" ap-click-area="공통" ap-click-name="스토어_공통_Header" ap-click-data="마이페이지 버튼">마이</a>
                </div>
            </div>
        </header>
    )
}