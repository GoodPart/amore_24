/* 테스트 데이터 */
export const tabListData = [
    {
        title: "홈",
        queryPath: "home",
        apClickArea: "스토어_매장 홈",
        apClickName: "스토어_매장 홈_탭 메뉴",
        apClickData: "홈 탭",
        articles: [
            {
                order: 0,
                head: "매장 정보",
                body: {
                    location: {
                        bl: "서울 성동구 아차산로11길 7",
                        gr: "서울 성동구 성수동2가 277-52"
                    },
                    number: "02-469-8600",
                    time: {
                        start: "10:30",
                        end: "20:30",
                        hollyDay: "매주 월요일 휴무, 명절 당일 휴무"
                    },
                    sns: "instagram",
                }
            },
            {
                order: 1,
                head: "매장 소개",
                body: {
                    desc: "내 안의 아름다움을 알아가는 곳, 아모레성수새롭고 빛나는 것은 젊고 아름답습니다.그러나 오랜 시간을 견디며 포개어진 시간 속에 피어나는 본연의 미는 그 자체로 대체할 수 없는 깊이와 새것이 줄 수 없는 귀함이 있습니다.콘크리트로 투박하게 마감된 벽, 정비를 위해 곳곳에 설치된 여러가지 장치들, 고르지 못한 높낮이의 바닥과 계단, 불쑥 나타나는 낮은 천장과 언제 그랬냐는 듯 다시 나타나는 높고 뾰족한 천장들.공장 지대였던 성수동의 로컬 분위기를 고스란히 담고 있는 이곳은, 오랜 시간 동안 고장 난 자동차가 제대로 작동하도록 보살피고 손질하는 공간 이었습니다. 우리는 거칠지만 세월을 견디며 고유의 멋으로 충만한 이곳에서, 모든 분들께 전해드리고 싶은 ‘본연의 아름다움’에 대한 이야기를 정성스럽게 준비했습니다. 이 계절 내 피부가 가장 좋아하는 감촉의 크림을 느껴보세요. 나에게 가장 잘 어울리는 립 컬러를 발견해보는 즐거움과 큰 창을 통해 깊이 들어오는 햇빛과 정원의 초록을 눈에 담으며 나에게 진정한 휴식을 선물해보세요.다채롭고 진솔한 경험을 통해 나 자신을 마주하는 곳, 우리 본연의 아름다움을 탐험하고 발견하며 자신의 ‘미’를 알아가는 공간, 아모레성수 입니다.",
                }
            },
            {
                order: 2,
                head: "서비스 예약",
                body: [
                    {
                        title: "원포인트 티칭 메이크업 서비스",
                        desc: "1:1 맞춤 메이크업 서비스를 받아보세요",
                        thumb: "https://images-kr.amoremall.com/o2o/SS0000000369?format=webp&resize=*:200&crop=200:200",
                        time: 45
                    },
                    {
                        title: "TONEWORK VEGAN 365+ LIQUID LIP",
                        desc: "Discover your perfect lip color to make you shine as you are",
                        thumb: "https://images-kr.amoremall.com/o2o/SS0000000367?resize=*:200&crop=200:200;*,*",
                        time: 60
                    },
                    {
                        title: "HERA SILKY STAY CUSTOM MATCH 맞춤파운데이션 서비스",
                        desc: "내 피부톤에 꼭 맞는 쉐이드, 헤라 실키 스테이 커스텀 매치",
                        thumb: "https://images-kr.amoremall.com/o2o/SS0000000368?format=webp&resize=*:200&crop=200:200;*,*",
                        time: 60
                    },

                ]

            }
        ]
    },
    {
        title: "소개",
        queryPath: "introduce",
    },
    {
        title: "예약",
        queryPath: "reserve",
    },
    {
        title: "소식",
        queryPath: "news",
    },
];

export const mapInfo = {
    title: "아모레성수",
    desc: "내 안의 아름다움을 마주하는 공간, 아모레성수에서 만나요!"
}
export const linkList = [
    {
        active: false,
        title: "아모레 몰",
        apClickArea: "스토어_공통",
        apClickName: "스토어_공통_Header_[팝업] 몰 이동 레이어",
        apClickData: "아모레 몰 버튼",
        icon: "ic_gnb_logo_amore_96"
    },
    {
        active: true,
        title: "아모레 스토어",
        apClickArea: "스토어_공통",
        apClickName: "스토어_공통_Header_[팝업] 몰 이동 레이어",
        apClickData: "아모레 스토어 버튼",
        icon: "ic_gnb_logo_amore_store_64"
    },
]

/* 테스트 데이터 */

/* 예시 코드 */
export const code = `
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

<Swiper
    className='swiper-container'
    navigation={{
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    }}
    pagination={{
        type: 'progressbar',
    }}
    autoplay={{
        delay: 2500, // 움직임 간격
        disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않습니다.
    }}
    modules={[Navigation, Autoplay, Pagination]} // 스와이프에 모듈을 추가합니다.
>
{...} // SwiperSlide 영역
<div className="swiper-next"><i className="atom-icon ic_angle_flicking_right_s35">다음</i></div>
<div className="swiper-prev"><i className="atom-icon ic_angle_flicking_left_s35">이전</i></div>
</Swiper>
`
export const codeSwiperSlide = `<SwiperSlide>
    <div className="imgBox">
        <img
            src="https://images-kr.amoremall.com/o2o/AS0000000163?resize=670:670"
            className="swiper-lazy swiper-lazy-loaded"
            alt=""
            ap-click-area="스토어_매장홈"
            ap-click-name="스토어_매장홈_메인배너"
            ap-click-data="1"
        />
    </div>
</SwiperSlide>
`
export const codeModaPopupShare = `<button
    className="btnCategory"
    ap-click-area="스토어_매장 홈"
    ap-click-name="스토어_매장홈_퀵아이콘"
    ap-click-data="공유버튼"
>
    <span className="ico">
        <img src="https://apm-web.amoremall.com/public/resource/mall/svg/ic/ic_share_s51_3a416f.svg" />
    </span><span className="text">공유</span>
</button>
`

export const codeModalPopup = `
<section className={\`modalPopupWrap \${Boolean(modal) ? 'open' : ''}\`}>
    // .popupBg 딤 영역 및 클릭시 모달창 닫기를 추가해주세요.
    <div className="popupBg" ap-click-area="스토어_매장 홈" ap-click-name="스토어_매장 홈_[팝업]매장 공유_닫기 버튼"></div>
    <div className="popupWrap anchorBottom">
        <div className="popupcontainerBox">
            <div className="popupInner">
                //.btnIr.btnLayerHandler 레이어 끌기 기능을 추가해주세요.
                <button className="btnIr btnLayerHandler">레이어 끌기 버튼</button>
                <div className="popupHead"><h2 className="tit">공유</h2></div>
                <div className="popupContents">
                    <ul className="shareSelect">
                        <li>
                            <button className="btnIr facebook"
                            ap-click-area="스토어_매장 홈"
                            ap-click-name="스토어_매장 홈_[팝업]매장 공유_페이스북 버튼">페이스북</button><p className="txt">페이스북</p>
                        </li>
                        <li>
                            <button className="btnIr url"
                            ap-click-area="스토어_매장 홈"
                            ap-click-name="스토어_매장 홈_[팝업]매장 공유_URL 복사 버튼">url복사</button><p className="txt">URL 복사</p>
                        </li>
                    </ul>
                </div>
                <button
                    className="btnIr popupClose btnCloseLayer"
                    onClick={()=> onToggleModal(false)}
                    ap-click-area="스토어_매장 홈"
                    ap-click-name="스토어_매장 홈_[팝업]매장 공유_닫기 버튼"
                >
                    레이어 닫기
                </button>
            </div>
        </div>
    </div>
</section>
`
export const linkListCode = `[
    {
        active: false,
        title: "아모레 몰",
        apClickArea: "스토어_공통",
        apClickName: "스토어_공통_Header_[팝업] 몰 이동 레이어",
        apClickData: "아모레 몰 버튼",
        icon: "ic_gnb_logo_amore_96"
    },
    {
        active: true,
        title: "아모레 스토어",
        apClickArea: "스토어_공통",
        apClickName: "스토어_공통_Header_[팝업] 몰 이동 레이어",
        apClickData: "아모레 스토어 버튼",
        icon: "ic_gnb_logo_amore_store_64"
    },
]`

export const importCode = `
import { Header } from '../components/header';
import { TabWrap } from '../components/tabWrap/tabWrap';
import ArticleWrap, { ButtonLink } from '../components/tabWrap/article';
import Footer from '../components/footer';

import "./assets/style/common.scss" // 위치에 따라 깊이 수정

<section className="wrap o2o-skin">
    <Header /> // 헤더 컴포넌트
    <section className="container">
        <div className="contents">
            <div className="contents-top">
                {...} //스와이퍼 영역
            </div>
            <TabWrap data={tabListData} tab={tab} onChange={onChangeTab} /> // 탭 컴포넌트
        </div>
    </section>
</section>
`

export const articleData1 = `
articles: [{
    order : 0,
    head: "매장 정보",
    body: {
        location: {
            bl: "서울 성동구 아차산로11길 7",
            gr: "서울 성동구 성수동2가 277-52"
        },
        number: "02-469-8600",
        time: {
            start: "10:30",
            end: "20:30",
            hollyDay: "매주 월요일 휴무, 명절 당일 휴무"
        },
        sns: "instagram",
    }
}],
`

export const articleData2 = `
articles: [{
    order : 1,
    head: "매장 소개",
    body: {
        desc: "내 안의 아름다움을 알아가는 곳, 아모레성수새롭고 빛나는 것은 젊고 아름답습니다.그러나 오랜 시간을 견디며 포개어진 시간 속에 피어나는 본연의 미는 그 자체로 대체할 수 없는 깊이와 새것이 줄 수 없는 귀함이 있습니다.콘크리트로 투박하게 마감된 벽, 정비를 위해 곳곳에 설치된 여러가지 장치들, 고르지 못한 높낮이의 바닥과 계단, 불쑥 나타나는 낮은 천장과 언제 그랬냐는 듯 다시 나타나는 높고 뾰족한 천장들.공장 지대였던 성수동의 로컬 분위기를 고스란히 담고 있는 이곳은, 오랜 시간 동안 고장 난 자동차가 제대로 작동하도록 보살피고 손질하는 공간 이었습니다. 우리는 거칠지만 세월을 견디며 고유의 멋으로 충만한 이곳에서, 모든 분들께 전해드리고 싶은 ‘본연의 아름다움’에 대한 이야기를 정성스럽게 준비했습니다. 이 계절 내 피부가 가장 좋아하는 감촉의 크림을 느껴보세요. 나에게 가장 잘 어울리는 립 컬러를 발견해보는 즐거움과 큰 창을 통해 깊이 들어오는 햇빛과 정원의 초록을 눈에 담으며 나에게 진정한 휴식을 선물해보세요.다채롭고 진솔한 경험을 통해 나 자신을 마주하는 곳, 우리 본연의 아름다움을 탐험하고 발견하며 자신의 ‘미’를 알아가는 공간, 아모레성수 입니다.",
    }
}],
`

export const articleData3 = `
articles: [{
    order : 2,
    head: "서비스 예약",
    body: [
        {
            title: "원포인트 티칭 메이크업 서비스",
            desc: "1:1 맞춤 메이크업 서비스를 받아보세요",
            thumb : "https://images-kr.amoremall.com/o2o/SS0000000369?format=webp&resize=*:200&crop=200:200",
            time : 45
        },
        {
            title: "TONEWORK VEGAN 365+ LIQUID LIP",
            desc: "Discover your perfect lip color to make you shine as you are",
            thumb : "https://images-kr.amoremall.com/o2o/SS0000000367?resize=*:200&crop=200:200;*,*",
            time : 60
        },
        {
            title: "HERA SILKY STAY CUSTOM MATCH 맞춤파운데이션 서비스",
            desc: "내 피부톤에 꼭 맞는 쉐이드, 헤라 실키 스테이 커스텀 매치",
            thumb : "https://images-kr.amoremall.com/o2o/SS0000000368?format=webp&resize=*:200&crop=200:200;*,*",
            time : 60
        },
    ]
}]
`

/* 예시 코드 */
