
export default function ArticleWrap({ data }) {
    return <div className={`article o2oContents`}>
        <div className="head">
            <h4 className="tit">{data.head}</h4>
        </div>
        <div className="body">
            <SwitchPage data={data} />
        </div>
    </div>
}

export function SwitchPage({data}) {
    switch (data.head) {
        case "매장 정보":
            return <StoreInfo data={data} />
        case "매장 소개": 
            return <IntroduceInfo data={data}/>
        case "서비스 예약":
            return <ReserveService data={data} />
    }
}

export function ButtonLink({txt }) {
    return (
        <button
                className="btnRound"
                ap-click-area="스토어_매장 홈" // 필요 데이터 삽입 필요
                ap-click-name="스토어_매장 홈_매장 소개_자세히 보기 버튼" // 필요 데이터 삽입 필요
                ap-click-data="">
                <span className="text">
                    <em>{txt}</em> <span>자세히 보기</span>
                </span>
                <span className="icon ic_more_8x20"></span>
            </button>
    )
}

export function StoreInfo({ data }) {
    const getBody = data.body;

    return (
        <>
            <ul className="listArea storeInfo">
                <li>
                    <div className="item">
                        <div className="item-thumb">
                            <i className="icon ic_store_20"></i>
                        </div>
                        <div className="item-contents">
                            <p className="txt bl">{getBody.location.bl}</p>
                            <p className="txt gr">{getBody.location.gr}</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="item">
                        <div className="item-thumb">
                            <i className="icon icon_mobile_20"></i>
                        </div>
                        <div className="item-contents">
                            <a href={getBody.number} className="txt link numNormal" ap-click-area="스토어_매장 홈" ap-click-name="스토어_매장 홈_매장 정보_전화번호 버튼" ap-click-data="">{getBody.number}</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="item">
                        <div className="item-thumb">
                            <i className="icon ic_time_20"></i>
                        </div>
                        <div className="item-contents">
                            <p className="txt is-ellipsis bl">{getBody.time.start} ~ {getBody.time.end}</p>
                            <p className="txt is-ellipsis gr">{getBody.time.hollyDay}</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="item">
                        <div className="item-thumb">
                            <i className="icon ic_sns_20"></i>
                        </div>
                        <div className="item-contents">
                            <a href="https://www.instagram.com/amore_seongsu/" className="txt link" target="_blank" rel="noreferrer" ap-click-area="스토어_매장 홈" ap-click-name="스토어_매장 홈_매장 정보_SNS" ap-click-data="인스타그램">인스타그램</a>
                        </div>
                    </div>
                </li>

            </ul>
            <div style={{padding : 24}}>(카카오맵 영역)</div>
        </>
    )
}

export function IntroduceInfo({ data }) {
    const getBody = data.body;
    return (
        <>
            <p className="desc is-ellipsis5">
                <a
                    href="#"
                    ap-click-area="스토어_매장 홈"
                    ap-click-name="스토어_매장 홈_매장 소개"
                    ap-click-data=""
                >
                    {getBody.desc}
                </a>
            </p>
            <ButtonLink txt={'아모레성수'}/>
        </>
    )
}


export function ReserveService({ data }) {
    const getBody = data.body;
    return (
        <>
            <ul className="listArea serviceInfo">
                {
                    Object.values(getBody).map((ele, index) => {
                        return (
                            <li key={index}>
                                <a href="#">
                                    <div className="module-card">
                                        <div className="card-thumb">
                                            <picture>
                                                <img src={ele.thumb} className="loaded" />
                                            </picture>
                                        </div>
                                        <div className="card-contents">
                                            <p className="tit">{ele.title}</p>
                                            <p className="desc">{ele.desc}</p>
                                            <span className="time"><i className="icon ic_time_20"></i><p><span className="numBold">{ele.time}</span>분</p></span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        )
                    })
                }
                <li>
                    <ButtonLink txt={'서비스 예약'}/>
                </li>
                
            </ul>
        </>
    )
}