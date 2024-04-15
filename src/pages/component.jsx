import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {
    tabListData,
    code,
    codeSwiperSlide,
    codeModaPopupShare,
    codeModalPopup,
    linkListCode,
    importCode,
    articleData1,
    articleData2,
    articleData3,
    homeNewsData
} from '../data/data';

import { TitleComponent } from '../components/rull';

import { CopyBlock, a11yDark, CodeBlock } from 'react-code-blocks';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import { Header } from '../components/header';
import { TabWrap, ArticleSwiperHome } from '../components/tabWrap/tabWrap';
import ArticleWrap, { ButtonLink } from '../components/tabWrap/article';
import Footer from '../components/footer';



export default function Component({title}) {
    const [hide, setHide] = useState(true); /* 헤더 몰 이동 상태 값 */
    const [tab, setTab] = useState({
        tabData: 'home',
    }); /* tabs 상태 값 */
    const [modal, setModal] = useState(false); /* 모달 팝업 상태 값 */
    const [stickyV, setStickyV] = useState(0); /* 헤더 sticky 영역 top 값 */

    const onChangeTab = ({tab}) => {
        setTab({
            tabData : tab
        })
    }
    const onToggleModal = (state) => {
        setModal(state)
    }

    function getRef (value)  {
        setStickyV(value)
    }

    useEffect(() => {
        document.title = `AMORESTORE 가이드 | ${title}`
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [stickyV])
    const handleScroll = () => {

        // 필요시 쓰로틀 추가
        if (window.scrollY >= stickyV) {
            setHide(false)
        } else {
            setHide(true)
        }
    };
    return <div className="wrap o2o-skin">
        <div className="wrap__container">
            <TitleComponent depth={1} title="컴포넌트" />
            <div className="wrap__item">
                <TitleComponent depth={2} title="준비" hashOption={{id : "ready"}}/>
                <div className="description">
                    각 컴포넌트를 선언합니다.
                </div>
                <div className="code-area">
                    <h3 className='title'>코드</h3>
                    <CopyBlock text={importCode} language='jsx' theme={a11yDark} />
                </div>
            
            </div>
            <div className="wrap__item">
                <TitleComponent depth={2} title="Header" hashOption={{ id: "Header" }} />
                <div className="description">
                    페이지 최상단 헤더 영역입니다.
                </div>
                <div className="example-area">
                    <h3 className='title'>데모</h3>

                    <Header state={false} hide={true} />
                </div>
                <div className="code-area">
                    <h3 className='title'>코드</h3>
                    <CopyBlock text="<Header state={false} hide={true} />" language='jsx' theme={a11yDark} />
                </div>
                <div className="type-area">
                    <h3 className='title'>타입</h3>

                    <table className='table--mid'>
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
                <TitleComponent depth={2} title="Header - 몰 이동 열기" hashOption={{ id: "Header_true" }} />
                <div className="description">
                    로고 우측 화살표 버튼을 클릭하면 다른 몰로 이동할 수 있는 드롭다운 메뉴가 등장합니다.<br />
                    클릭시 아이콘(화살표)는 180도 회전하며, 드롭다운 메뉴가 노출됩니다.
                </div>
                <div className="example-area">
                    <h3 className='title'>데모</h3>

                    <Header state={true} hide={true} />
                </div>
                <div className="code-area" style={{ margin: "60px 0 0" }}>
                    <h3 className='title'>코드</h3>
                    <CopyBlock text='<ModuleLinkPopup data={linkListCode} />' language='jsx' theme={a11yDark} />
                </div>
                <div className="type-area">
                    <h3 className='title'>타입</h3>
                    <table className='table--xLage'>
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
                                    <CopyBlock text={linkListCode} language='jsx' theme={a11yDark} />
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="wrap__item">
                <TitleComponent depth={2} title="Header - 상단 고정" hashOption={{ id: "Header_fixed" }} />

                <div className="description">
                    일정 스크롤이상 이동시, 'fixed' 형태의 헤더가 노출되며 고정됩니다.<br />
                    해당 영역은 아래 'tabs'영역과 합쳐집니다.
                </div>
                <div className="example-area">
                    <h3 className='title'>데모</h3>
                        <Header state={false} hide={hide} gRef={getRef} />
                </div>
                <div className="code-area">
                    <h3 className='title'>코드</h3>
                    <CopyBlock text={`일정 스크롤이상(useRef) = ${stickyV};`} language='jsx' theme={a11yDark} />
                </div>
            </div>

            <div className="wrap__item">
                <TitleComponent depth={2} title="Swiper" hashOption={{ id: "swiper" }} />

                <div className="description">
                    스와이퍼 영역입니다. 이미지 클릭시, '상세' 모달 팝업으로 이동 (과제 가이드에 따라 미구현)
                </div>
                <div className="example-area example-area--min">
                    <h3 className='title'>데모</h3>
                    
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
                    <h3 className='title'>코드</h3>
                    <CopyBlock text={code} language='jsx' theme={a11yDark} />
                  
                </div>
                <div className="type-area">
                    <h3 className='title'>타입</h3>
                    <table className='table--xLage'>
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
                <TitleComponent depth={2} title="SwiperSlide" hashOption={{ id: "swiper_slide" }} />

                <div className="description">
                    스와이퍼 슬라이드 영역입니다. 
                </div>
                
                <div className="code-area">
                    <h3 className='title'>코드</h3>
                    <CopyBlock text={codeSwiperSlide} language='jsx' theme={a11yDark} />
                </div>
             
                
            </div>

            <div className="wrap__item">
                <TitleComponent depth={2} title="공유 버튼" hashOption={{ id: "button_share" }} />

                <div className="description">
                    '공유' 버튼 클릭시, 'modal'팝업이 노출됩니다.<br />
                    'x'버튼과 'dim'영역 클릭시 비노출 상태로 변경되며, 해당 팝업은 '끌어내리기' 기능이 필요합니다.
                </div>
                <div className="example-area">
                    <h3 className='title'>데모</h3>
                    
                    <div style={{display:"flex", padding : 8}}>
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
                </div>

                <div className="code-area">
                    <h3 className='title'>코드</h3>

                    <CopyBlock text={codeModaPopupShare} language='jsx' theme={a11yDark} />
                </div>
            </div>

            <div className="wrap__item">
                <TitleComponent depth={2} title="모달 팝업 - (공유)" hashOption={{ id: "modal_popup" }} />

                <div className="description">
                    'modalPopupWrap'에 'open' 클래스를 사용해 노출 시킬 수 있다.
                </div>

                <div className="code-area">
                    <h3 className='title'>코드</h3>

                    <CopyBlock text={codeModalPopup} language='jsx' theme={a11yDark} />
                </div>
            </div>


            <div className="wrap__item">
                <TitleComponent depth={2} title="tabWrap = Tabs" hashOption={{ id: "Tab" }} />

                <div className="description">
                    각 내용으로 이동할 수 있는 탭, 'sticky'영역으로 상단에 고정된 'Header' 아래 위치한다.<br />
                    버튼 클릭시 스크롤 이동(탭 버튼의 offsetTop)<span style={{ color: "#ff5a5a", fontWeight : "bold"}}>*</span>
                </div>
                <div className="example-area example-area--min">
                    <h3 className='title'>데모</h3>

                    <TabWrap data={tabListData} tab={tab} onChange={onChangeTab} />
                </div>
                <div className="code-area">
                    <h3 className='title'>코드</h3>

                    <CopyBlock text="<TabWrap data={tabListData} tab={tab} onChange={onChangeTab} />" language='jsx' theme={a11yDark} />
                </div>
                <div className="type-area">
                    <h3 className='title'>타입</h3>

                    <table className='table--xLage'>
                        <colgroup>
                            <col width="20%" />
                            <col width="10%" />
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

            <div className='wrap__item'>
                <TitleComponent depth={2} title="Article - 매장 소식" hashOption={{ id: "Article_news" }} />

                <div className="description">
                    '매장 소식' 영역
                </div>
                <div className="example-area example-area--min">
                    <h3 className='title'>데모</h3>

                    <ArticleSwiperHome data={homeNewsData} />
                </div>
                <div className="code-area">
                    <h3 className='title'>코드</h3>

                    <CopyBlock text="<ArticleSwiperHome data={homeNewsData} />" language='jsx' theme={a11yDark} />
                </div>

                <div className="type-area">
                    <h3 className='title'>타입</h3>
                    <table className='table--xLage'>
                        <caption>상태 값</caption>
                        <colgroup>
                            <col width="10%" />
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
                                <td className="align-l">data</td>
                                <td className="align-l">Object</td>
                                <td className="align-l">
                                    <CodeBlock text={`{
    title : "커스텀미 맞춤 스킨케어 서비스 오픈 및 이벤트 안내",
    desc : "",
    date : "2024.03.25" // 예시용 값
}`} language='jsx' theme={a11yDark} />
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        
            <div className='wrap__item'>
                <TitleComponent depth={2} title="Article - 정보" hashOption={{ id: "Article_info" }} />

                <div className="description">
                    '매장 정보' 영역
                </div>
                <div className="example-area example-area--min">
                    <h3 className='title'>데모</h3>

                    <ArticleWrap data={tabListData[0].articles[0]} />
                </div>
                <div className="code-area">
                    <h3 className='title'>코드</h3>

                    <CopyBlock text="<ArticleWrap data={tabListData[0].articles[0]} />" language='jsx' theme={a11yDark} />
                </div>

                <div className="type-area">
                    <h3 className='title'>타입</h3>
                    <table className='table--xLage'>
                        <caption>상태 값</caption>
                        <colgroup>
                            <col width="10%" />
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
                                <td className="align-l">data</td>
                                <td className="align-l">Object</td>
                                <td className="align-l">
                                    <CodeBlock text={articleData1} language='jsx' theme={a11yDark} />
                                </td>
                            </tr>
                           
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='wrap__item'>
                <TitleComponent depth={2} title="Article - 소개" hashOption={{ id: "Article_introduce" }} />

                <div className="description">
                '매장 소개' 영역으로, '설명' 및 '자세히 보기' 버튼 클릭시 탭 이동

                </div>
                <div className="example-area example-area--min">
                    <h3 className='title'>데모</h3>

                    <ArticleWrap data={tabListData[0].articles[1]} />
                </div>

                <div className="code-area">
                    <h3 className='title'>코드</h3>

                    <CopyBlock text="<ArticleWrap data={tabListData[0].articles[1]} />" language='jsx' theme={a11yDark} />
                </div>

                <div className="type-area">
                    <h3 className='title'>타입</h3>
                    <table className='table--xLage'>
                        <caption>상태 값</caption>
                        <colgroup>
                            <col width="10%" />
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
                                <td className="align-l">data</td>
                                <td className="align-l">Object</td>
                                <td className="align-l">
                                    <CodeBlock text={articleData2} language='jsx' theme={a11yDark} />
                                </td>
                            </tr>
                           
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='wrap__item'>
                <TitleComponent depth={2} title="Article - 예약" hashOption={{ id: "Article_reserve" }} />

                <div className="description">
                    '서비스 예약' 영역으로, 각 리스트 아이템 클릭시 '상세' 및 '자세히 보기' 버튼 클릭시 탭 이동

                </div>
                <div className="example-area example-area--min">
                    <h3 className='title'>데모</h3>

                    <ArticleWrap data={tabListData[0].articles[2]} />
                </div>

                <div className="code-area">
                    <h3 className='title'>코드</h3>

                    <CopyBlock text="<ArticleWrap data={tabListData[0].articles[2]} />" language='jsx' theme={a11yDark} />
                </div>

                <div className="type-area">
                    <h3 className='title'>타입</h3>
                    <table>
                        <caption>상태 값</caption>
                        <colgroup>
                            <col width="10%" />
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
                                <td className="align-l">data</td>
                                <td className="align-l">Object</td>
                                <td className="align-l">
                                    <CodeBlock text={articleData3} language='jsx' theme={a11yDark} />
                                </td>
                            </tr>
                           
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='wrap__item'>
                <TitleComponent depth={2} title="Article - Button" hashOption={{ id: "button_detail" }} />

                <div className="description">
                    'Article'영역에서 사용된 공통 버튼<br />
                    클릭시 'tabs'에 각 페이지(홈, 소개, 예약, 소식)로 이동된다.
                </div>

                <div className="example-area example-area--min">
                    <h3 className='title'>데모</h3>

                    <div className="article o2oContents">
                        <ButtonLink txt={'아모레성수'}/>
                    </div>
                </div>

                <div className="code-area">
                    <h3 className='title'>코드</h3>

                    <CopyBlock text="<ButtonLink txt={'아모레성수'}/> // 부모에 .o2oContents가 필요" language='jsx' theme={a11yDark} />
                </div>

            </div>
            

            <div className="wrap__item">
                <TitleComponent depth={2} title="Footer" hashOption={{ id: "footer" }} />

                <div className="description">
                    페이지 하단 푸터<br />
                    '이용약관' 및 '개인정보처리방침'은 새창링크로 이동된다.
                </div>
                <div className="example-area example-area--min">
                    <Footer />
                </div>
                <div className="code-area">
                    <h3 className='title'>코드</h3>

                    <CopyBlock text="<Footer />" language='jsx' theme={a11yDark} />
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

