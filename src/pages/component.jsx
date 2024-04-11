import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { CopyBlock, nord, a11yDark, CodeBlock } from 'react-code-blocks';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import { Header, headerCode } from '../components/header';
import { TabWrap, TabPanel } from '../components/tabWrap/tabWrap';

const code = `
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
</Swiper>
`
const codeSwiperSlide = `<SwiperSlide>
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
const codeModaPopupShare = `<button
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

const codeModalPopup = `
<section className={\`modalPopupWrap \${Boolean(modal) ? 'open' : ''}\`}>
    <div className="popupBg" ap-click-area="스토어_매장 홈" ap-click-name="스토어_매장 홈_[팝업]매장 공유_닫기 버튼"></div>
    <div className="popupWrap anchorBottom">
        <div className="popupcontainerBox">
            <div className="popupInner">
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

/*  root data */
const storeInfo = {
    title: "아모레성수",
    subTitle: "내 안의 아름다움을 마주하는 공간, 아모레성수에서 만나요!",
    bannerImage: {
        path: "https://images-kr.amoremall.com/o2o/AS0000000323?resize=670:670",
        apClickArea: "스토어_매장홈",
        apClickName: "스토어_매장홈_메인배너",
        callNumber: "02-222-3333",
    },
    share: [
        {
            title: "페이스북",
            path : "https://..."
        },
        {
            title: "URL 복사",
            path : "https://..."
        }
    ]
}

const tabListData = [
    {
        title: "홈",
        queryPath: "home",
        apClickArea: "스토어_매장 홈",
        apClickName: "스토어_매장 홈_탭 메뉴",
        apClickData: "홈 탭",
        articles: [
            {
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
            },
            {
                order : 1,
                head: "매장 소개",
                body: {
                    desc: "내 안의 아름다움을 알아가는 곳, 아모레성수새롭고 빛나는 것은 젊고 아름답습니다.그러나 오랜 시간을 견디며 포개어진 시간 속에 피어나는 본연의 미는 그 자체로 대체할 수 없는 깊이와 새것이 줄 수 없는 귀함이 있습니다.콘크리트로 투박하게 마감된 벽, 정비를 위해 곳곳에 설치된 여러가지 장치들, 고르지 못한 높낮이의 바닥과 계단, 불쑥 나타나는 낮은 천장과 언제 그랬냐는 듯 다시 나타나는 높고 뾰족한 천장들.공장 지대였던 성수동의 로컬 분위기를 고스란히 담고 있는 이곳은, 오랜 시간 동안 고장 난 자동차가 제대로 작동하도록 보살피고 손질하는 공간 이었습니다. 우리는 거칠지만 세월을 견디며 고유의 멋으로 충만한 이곳에서, 모든 분들께 전해드리고 싶은 ‘본연의 아름다움’에 대한 이야기를 정성스럽게 준비했습니다. 이 계절 내 피부가 가장 좋아하는 감촉의 크림을 느껴보세요. 나에게 가장 잘 어울리는 립 컬러를 발견해보는 즐거움과 큰 창을 통해 깊이 들어오는 햇빛과 정원의 초록을 눈에 담으며 나에게 진정한 휴식을 선물해보세요.다채롭고 진솔한 경험을 통해 나 자신을 마주하는 곳, 우리 본연의 아름다움을 탐험하고 발견하며 자신의 ‘미’를 알아가는 공간, 아모레성수 입니다.",
                }
            },
            {
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
const tabHomeDataStoreInfo = {
    head: "매장 정보",
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
};

const tabHomeDataStoreIntroduce = {

    head: "매장 소개",
    desc: "내 안의 아름다움을 알아가는 곳, 아모레성수새롭고 빛나는 것은 젊고 아름답습니다.그러나 오랜 시간을 견디며 포개어진 시간 속에 피어나는 본연의 미는 그 자체로 대체할 수 없는 깊이와 새것이 줄 수 없는 귀함이 있습니다.콘크리트로 투박하게 마감된 벽, 정비를 위해 곳곳에 설치된 여러가지 장치들, 고르지 못한 높낮이의 바닥과 계단, 불쑥 나타나는 낮은 천장과 언제 그랬냐는 듯 다시 나타나는 높고 뾰족한 천장들.공장 지대였던 성수동의 로컬 분위기를 고스란히 담고 있는 이곳은, 오랜 시간 동안 고장 난 자동차가 제대로 작동하도록 보살피고 손질하는 공간 이었습니다. 우리는 거칠지만 세월을 견디며 고유의 멋으로 충만한 이곳에서, 모든 분들께 전해드리고 싶은 ‘본연의 아름다움’에 대한 이야기를 정성스럽게 준비했습니다. 이 계절 내 피부가 가장 좋아하는 감촉의 크림을 느껴보세요. 나에게 가장 잘 어울리는 립 컬러를 발견해보는 즐거움과 큰 창을 통해 깊이 들어오는 햇빛과 정원의 초록을 눈에 담으며 나에게 진정한 휴식을 선물해보세요.다채롭고 진솔한 경험을 통해 나 자신을 마주하는 곳, 우리 본연의 아름다움을 탐험하고 발견하며 자신의 ‘미’를 알아가는 공간, 아모레성수 입니다.",
    
}
const linkList = `[
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

export default function Component() {
    const [hide, setHide] = useState(true);
    const [tab, setTab] = useState({
        tabData: 'home',
    });
    const [modal, setModal] = useState(false);
    const targetHeader = 1702;

    const onChangeTab = ({tab}) => {
        setTab({
            tabData : tab
        })
    }
    const onToggleModal = (state) => {
        setModal(state)
    }

    useEffect(() => {
        window.addEventListener('scroll',  handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
    const handleScroll = () => {
        
        if (window.scrollY >= targetHeader) {
            setHide(false)
        } else {
            setHide(true)
        }
    };
    return <div className="wrap o2o-skin">
        <div className="wrap__container">
            <h1 className="title"><span>컴포넌트</span></h1>
            <div className="wrap__item">
                <h2 className="title"><span>Header</span></h2>
                <div className="description">
                    페이지 최상단 헤더 영역입니다.
                </div>
                <div className="example-area">
                    <Header state={false} hide={true} />
                </div>
                <div className="code-area" style={{margin : "24px 0 0"}}>
                    <CopyBlock text="<Header state={false} hide={true} />" language='jsx' theme={a11yDark} />
                </div>
                <div className="type-area">
                    <table>
                        <caption>상태 값</caption>
                        <thead>
                            <tr>
                                <th>종류</th>
                                <th>타입</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="align-l">state</td>
                                <td className="align-l">Boolean</td>
                            </tr>
                            <tr>
                                <td className="align-l">hide</td>
                                <td className="align-l">Boolean</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="wrap__item">
                <h2 className="title"><span>Header</span> - 몰 이동 열기 버튼</h2>
                <div className="description">
                    로고 우측 화살표 버튼을 클릭하면 다른 몰로 이동할 수 있는 드롭다운 메뉴가 등장합니다.<br />
                    클릭시 아이콘(화살표)는 180도 회전하며, 드롭다운 메뉴가 노출됩니다.
                </div>
                <div className="example-area">
                    <Header state={true} hide={true}/>
                </div>
                <div className="code-area" style={{ margin: "60px 0 0" }}>
                    <CopyBlock text='<ModuleLinkPopup data={linkList} />' language='jsx' theme={a11yDark} />
                </div>
                <div className="type-area">
                    <table>
                        <caption>상태 값</caption>
                        <colgroup>
                            <col width="20%"  />
                            <col width="20%"  />
                            <col />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>종류</th>
                                <th>타입</th>
                                <th>비고</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="align-l">data</td>
                                <td className="align-l">Object</td>
                                <td className="align-l">
                                    <CopyBlock text={linkList} language='jsx' theme={a11yDark} />
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="wrap__item">
                <h2 className="title"><span>Header</span> - 상단 고정</h2>
                <div className="description">
                    일정 스크롤이상 이동시, 'fixed' 형태의 헤더가 노출되며 고정됩니다.<br />
                    해당 영역은 아래 'tabs'영역과 합쳐집니다.
                </div>
                <div className="example-area">
                    <Header state={false} hide={hide} />

                </div>
            </div>

            <div className="wrap__item">
                <h2 className="title">swiper</h2>
                <div className="description">
                    스와이퍼 영역입니다.
                </div>
                <div className="example-area example-area--min">
                    <div className="bannerDiscount">
                        <Swiper
                            className='swiper-container'
                            spaceBetween={0}
                            slidesPerView={1}
                            centeredSlides={true}
                            navigation={{
                                nextEl: ".swiper-next",
                                prevEl: ".swiper-prev",
                            }}
                            pagination={{
                                type: 'progressbar',
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Navigation, Autoplay, Pagination]}
                        >
                            <SwiperSlide>
                                <div className="imgBox">
                                    <img src="https://images-kr.amoremall.com/o2o/AS0000000163?resize=670:670" className="swiper-lazy swiper-lazy-loaded" alt="" ap-click-area="스토어_매장홈" ap-click-name="스토어_매장홈_메인배너" ap-click-data="1" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="imgBox">
                                    <img src="https://images-kr.amoremall.com/o2o/AS0000000163?resize=670:670" className="swiper-lazy swiper-lazy-loaded" alt="" ap-click-area="스토어_매장홈" ap-click-name="스토어_매장홈_메인배너" ap-click-data="1" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="imgBox">
                                    <img src="https://images-kr.amoremall.com/o2o/AS0000000163?resize=670:670" className="swiper-lazy swiper-lazy-loaded" alt="" ap-click-area="스토어_매장홈" ap-click-name="스토어_매장홈_메인배너" ap-click-data="1" />
                                </div>
                            </SwiperSlide>
                            <div className="swiper-next"><i className="atom-icon ic_angle_flicking_right_s35">다음</i></div>
                            <div className="swiper-prev"><i className="atom-icon ic_angle_flicking_left_s35">이전</i></div>
                        </Swiper>
                    </div>
                </div>
                
                <div className="code-area">
                    <CopyBlock text={code} language='jsx' theme={a11yDark} />
                  
                </div>
                <div className="type-area">
                    <table>
                        <caption>상태 값</caption>
                        <colgroup>
                            <col width="20%" />
                            <col width="20%" />
                            <col />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>옵션</th>
                                <th>타입</th>
                                <th>비고</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="align-l">className</td>
                                <td className="align-l">String</td>
                                <td className="align-l">
                                </td>
                            </tr>
                            <tr>
                                <td className="align-l">spaceBetween</td>
                                <td className="align-l">double</td>
                                <td className="align-l">슬라이드 사이 간격을 조절할 수 있습니다. </td>
                            </tr>
                            <tr>
                                <td className="align-l">slidesPerView</td>
                                <td className="align-l">double</td>
                                <td className="align-l">swiper영역에 n개의 슬라이드를 노출 시킵니다.</td>
                            </tr>
                            <tr>
                                <td className="align-l">centeredSlides</td>
                                <td className="align-l">Boolean</td>
                                <td className="align-l">슬라이드 아이템의 정렬을 가운대로 변경합니다.</td>
                            </tr>
                            <tr>
                                <td className="align-l">navigation</td>
                                <td className="align-l">Object</td>
                                <td className="align-l">스와이프의 좌우 이동 버튼을 추가합니다.</td>
                            </tr>
                            <tr>
                                <td className="align-l">pagination</td>
                                <td className="align-l">Object</td>
                                <td className="align-l">페이지네이션 타입을 프로그레스바로 변경.</td>
                            </tr>
                            <tr>
                                <td className="align-l">autoplay</td>
                                <td className="align-l">Object</td>
                                <td className="align-l">스와이프를 일정 시간마다 자동으로 움직이게 함</td>
                            </tr>
                            <tr>
                                <td className="align-l">modules</td>
                                <td className="align-l">Object</td>
                                <td className="align-l">추가한 모듈을 사용하기위함</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </div>

            <div className="wrap__item">
                <h2 className="title">SwiperSlide</h2>
                <div className="description">
                    스와이퍼 슬라이드 영역입니다.
                </div>
                
                <div className="code-area">
                    <CopyBlock text={codeSwiperSlide} language='jsx' theme={a11yDark} />
                </div>
             
                
            </div>

            <div className="wrap__item">
                <h2 className="title">공유 버튼</h2>
                <div className="description">
                    '공유' 버튼 클릭시, 'modal'팝업이 노출됩니다.<br />
                    'x'버튼과 'dim'영역 클릭시 비노출 상태로 변경되며, 해당 팝업은 '끌어내리기' 기능이 필요합니다.
                </div>
                <div className="example-area example-area--row">
                    <button
                        className="btnCategory"
                        ap-click-area="스토어_매장 홈"
                        ap-click-name="스토어_매장홈_퀵아이콘"
                        ap-click-data="공유버튼"
                        onClick={()=> alert("전화")}
                    >
                        <span className="ico">
                            <img src="https://apm-web.amoremall.com/public/resource/mall/svg/ic/ic_phone_s51_3a416f.svg" />
                        </span><span className="text">전화</span>
                    </button>
                    <button
                        className="btnCategory"
                        ap-click-area="스토어_매장 홈"
                        ap-click-name="스토어_매장홈_퀵아이콘"
                        ap-click-data="공유버튼"
                        onClick={()=> alert("예약")}
                    >
                        <span className="ico">
                        <img src="https://apm-web.amoremall.com/public/resource/mall/svg/ic/ic_calendar_s51_3a416f.svg" />
                        </span><span className="text">예약</span>
                    </button>
                    <button
                        className="btnCategory"
                        ap-click-area="스토어_매장 홈"
                        ap-click-name="스토어_매장홈_퀵아이콘"
                        ap-click-data="공유버튼"
                        onClick={()=> onToggleModal(true)}
                    >
                        <span className="ico">
                            <img src="https://apm-web.amoremall.com/public/resource/mall/svg/ic/ic_share_s51_3a416f.svg" />
                        </span><span className="text">공유</span>
                    </button>
                </div>

                <div className="code-area" style={{ margin: "24px 0 0" }}>
                    <CopyBlock text={codeModaPopupShare} language='jsx' theme={a11yDark} />
                </div>
            </div>

            <div className="wrap__item">
                <h2 className="title">모달 팝업 - (공유)</h2>
                <div className="description">
                    'modalPopupWrap'에 'open' 클래스를 사용해 노출 시킬 수 있다.
                </div>

                <div className="code-area" style={{ margin: "24px 0 0" }}>
                    <CopyBlock text={codeModalPopup} language='jsx' theme={a11yDark} />
                </div>
            </div>


            <div className="wrap__item">
                <h2 className="title">tabWrap - tabs(sticky)</h2>
                <div className="description">
                    각 내용으로 이동할 수 있는 탭, 'sticky'영역으로 상다네 고정된 'Header'바로 아래 위치한다.<br />
                    각 탭 내부 정보들은 하단 'tabWrap'을 확인.
                </div>
                <div className="example-area example-area--min">
                    <TabWrap data={tabListData} tab={tab} onChange={onChangeTab} />
                </div>
                <div className="code-area" style={{ margin: "24px 0 0" }}>
                    <CopyBlock text="<TabWrap data={tabListData} tab={tab} onChange={onChangeTab} />" language='jsx' theme={a11yDark} />
                </div>
                <div className="type-area">
                    <table>
                        <colgroup>
                            <col width="20%" />
                            <col width="20%" />
                            <col />
                        </colgroup>
                        <caption>상태 값</caption>
                        <thead>
                            <tr>
                                <th>종류</th>
                                <th>타입</th>
                                <th>비고</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="align-l">data</td>
                                <td className="align-l">Object</td>
                                <td className="align-l">
                                    <CodeBlock text='{
    title: "홈",
    queryPath: "home", articles : [{...}]},
{
    title: "소개",
    queryPath: "introduce"},
{
    title: "예약",
    queryPath: "reserve"},
{
    title: "소식",
    queryPath: "news"},
                                    ' language='jsx' theme={a11yDark} />
                                </td>

                            </tr>
                            <tr>
                                <td className="align-l">tab</td>
                                <td className="align-l">Object</td>
                                <td className="align-l">
                                    <CodeBlock text="
                                    {tabData: 'home' || 'introduce' || ...}
                                    " language='jsx' theme={a11yDark} />
                                  </td>
                            </tr>
                            <tr>
                                <td className="align-l">onChange</td>
                                <td className="align-l">function</td>
                                <td className="align-l">
                                    <CodeBlock text='
                                    const onChangeTab = ({tab}) => {
        setTab({
            tabData : tab
        })
    }
    ' language='jsx' theme={a11yDark} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div className="wrap__item">
                <h2 className="title">tabWrap - tabPanel</h2>
                <div className="description">
                    '홈' 버튼을 클릭하면 노출되는 영역입니다.<br />
                    (아래 'not data'가 보인다면 'tabWrap - tabs(sticky)'에서 '홈'을 눌러주세요)<br />
                </div>
                <div className="example-area example-area--min">
                    <TabPanel data={tabListData} tab={tab}/>
                </div>
            </div>

            <div className="wrap__item">
                <h2 className="title">footer</h2>
                <div className="description">
                    
                </div>
                <div className="example-area example-area--min">
                    <footer className='module-footer'>
                        <section className="module-footer__inner">
                            <ul className="module-footer__links--large">
                                <li><a href="#none" ap-click-area="스토어_공통" ap-click-name="스토어_공통_Footer" ap-click-data="로그인 버튼">로그인</a></li>
                                <li><a href="https://www.amoremall.com/kr/ko/beautypoint/app/footer/agreement.do" target="_blank" rel="opener noreferrer" ap-click-area="스토어_공통" ap-click-name="스토어_공통_Footer" ap-click-data="이용약관 버튼">이용약관</a></li><li><a href="https://www.amoremall.com/kr/ko/beautypoint/app/footer/privacy.do" target="_blank" rel="opener noreferrer" ap-click-area="스토어_공통" ap-click-name="스토어_공통_Footer" ap-click-data="개인정보처리방침 버튼">개인정보처리방침</a></li>
                            </ul>
                            <div className="module-footer__copyright">
                                <div className="module-footer__copyright-txt">© AMOREPACIFIC CORPORATION. ALL RIGHTS RESERVED</div>
                            </div>
                        </section>
                    </footer>
                </div>
            </div>

            {/* open */}
            <section className={`modalPopupWrap ${Boolean(modal) ? 'open' : ''}`}>
                <div className="popupBg" ap-click-area="스토어_매장 홈" ap-click-name="스토어_매장 홈_[팝업]매장 공유_닫기 버튼"></div>
                <div className="popupWrap anchorBottom">
                    <div className="popupcontainerBox">
                        <div className="popupInner">
                            <button className="btnIr btnLayerHandler">레이어 끌기 버튼</button>
                            <div className="popupHead"><h2 className="tit">공유</h2></div>
                            <div className="popupContents">
                                <ul className="shareSelect">
                                    <li>
                                        <button className="btnIr facebook" ap-click-area="스토어_매장 홈" ap-click-name="스토어_매장 홈_[팝업]매장 공유_페이스북 버튼">페이스북</button><p className="txt">페이스북</p>
                                    </li>
                                    <li>
                                        <button className="btnIr url" ap-click-area="스토어_매장 홈" ap-click-name="스토어_매장 홈_[팝업]매장 공유_URL 복사 버튼">url복사</button><p className="txt">URL 복사</p>
                                    </li>
                                </ul>
                            </div>
                            <button className="btnIr popupClose btnCloseLayer" onClick={()=> onToggleModal(false)} ap-click-area="스토어_매장 홈" ap-click-name="스토어_매장 홈_[팝업]매장 공유_닫기 버튼">레이어 닫기</button>
                        </div>
                    </div>
                </div>
            </section>

           
            
        </div>
        
    </div>
}