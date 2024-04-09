export function Header() {
    return (
        <header className="module-header is-scroll">
            <div className="module-header__inner">
                <div className="module-header__logo" style={{width : "166px"}}>
                    <a href="#" ap-click-area="스토어_공통" ap-click-name="스토어_공통_Header" ap-click-data="아모레 스토어 로고 버튼">
                        <span className="module-header__logo-img is-white" aria-hidden="true"><i className="atom-icon logo_amoreStore_s165x28_fff">채널</i></span>
                        <span className="module-header__logo-img is-black"><img src="https://images-kr.amoremall.com/logo/ic_logo_amoreMall_s158x28_000.svg" alt="AMORE MALL" /></span>
                    </a>
                </div>
            </div>
            <div id="headerSection" className="module-header--default">
                <h2 className="module-header__logo--default">
                    <a href="#" ap-click-area="스토어_공통" ap-click-name="스토어_공통_Header" ap-click-data="매장명 버튼">아모레성수</a>
                </h2>
                <p className="module-header__desc--default">내 안의 아름다움을 마주하는 공간, 아모레성수에서 만나요!</p>
            </div>
            <div id="aniHeader" className="module-header-layer module-header--ani is-clear is-hide">
                <h1 className="module-header__title--ani">아모레성수</h1>
                <div className="module-header__util">
                    <a href="" className="module-header__btn module-header__btn--user" ap-click-area="공통" ap-click-name="스토어_공통_Header" ap-click-data="마이페이지 버튼">마이</a>
                </div>
            </div>
        </header>
    )
}

export const headerCode = `<header className="module-header">
    헤더 코드입니다.
</header>
`