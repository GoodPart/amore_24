import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { CopyBlock, nord, a11yDark } from 'react-code-blocks';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import { Header, headerCode } from '../components/header';

const code = `<Swiper
    className='swiper-container'
    spaceBetween={0} // 슬라이드 사이 간격을 조절할 수 있습니다. type : double
    slidesPerView={1} // swiper영역에 n개의 슬라이드를 노출 시킵니다. type : double
    centeredSlides={true} // 슬라이드 아이템의 정렬을 가운대로 변경합니다. type : bool
    // 스와이프의 좌우 이동 버튼을 추가합니다.
    navigation={{
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    }}
    pagination={{
        type: 'progressbar', // 페이지네이션 타입을 프로그레스바로 변경. type : string
    }}
    autoplay={{
        delay: 2500, // 자동으로 스와이프를 이동시키며, 간격은 2500ms입니다. type : double || int
        disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않습니다. type : bool
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


export default function Layout() {
    const [hide, setHide] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll',  handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
    const handleScroll = () => {
        console.log('scrolled', window.scrollY);
        if (window.scrollY >= 550) {
            setHide(false)
            console.log('hide false')
        } else {
            setHide(true)
        }
    };
    return <div className="wrap">
        <div className="wrap__container">
            <div className="wrap__item">
                <h1 className="title">header - 몰 이동 열기 버튼 false</h1>
                <div className="description">
                    <Header state={false} hide={true} />
                </div>
                <div className="example-area">

                </div>
            </div>
            <div className="wrap__item">
                <h1 className="title">header - 몰 이동 열기 버튼 true</h1>
                <div className="description">
                    {/* <CopyBlock text={headerCode} language='js' theme={a11yDark} /> */}
                    <Header state={true} hide={true}/>
                </div>
                <div className="example-area">
                    
                </div>
            </div>

            <div className="wrap__item">
                <h1 className="title">header - 헤더 하방 스크롤</h1>
                <div className="description">
                    <Header state={false} hide={hide} />
                </div>
                <div className="example-area">

                </div>
            </div>

            <div className="wrap__item">
                <h1 className="title">swiper</h1>
                <div className="description">
                    <CopyBlock text={code} language='js' theme={a11yDark} />

                    <h2>SwiperSlide</h2>
                    <CopyBlock text={codeSwiperSlide} language='js' theme={a11yDark} />
                </div>
                <div className="example-area">
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
            </div>
        </div>
        
    </div>
}