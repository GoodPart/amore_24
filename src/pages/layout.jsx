import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function Layout() {
    return <div className="wrap">
        <div className="wrap__container">
            <div className="wrap__item">
                <h1 className="title">header</h1>
                <div className="description">
                    최상단 영역으로, scrollY값이 .module-header__inner의 높이(56px)보다 크다면<br />
                    .module-header-layer에 .is-hide클래스 제거한다.
                </div>
                <div className="example-area">
                    
                </div>
            </div>

            <div className="wrap__item">
                <h1 className="title">swiper</h1>
                <div className="description">
                    `asdasd`
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
                                    <img src="https://images-kr.amoremall.com/o2o/AS0000000163?resize=670:670" class="swiper-lazy swiper-lazy-loaded" alt="" ap-click-area="스토어_매장홈" ap-click-name="스토어_매장홈_메인배너" ap-click-data="1" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="imgBox">
                                    <img src="https://images-kr.amoremall.com/o2o/AS0000000163?resize=670:670" class="swiper-lazy swiper-lazy-loaded" alt="" ap-click-area="스토어_매장홈" ap-click-name="스토어_매장홈_메인배너" ap-click-data="1" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="imgBox">
                                    <img src="https://images-kr.amoremall.com/o2o/AS0000000163?resize=670:670" class="swiper-lazy swiper-lazy-loaded" alt="" ap-click-area="스토어_매장홈" ap-click-name="스토어_매장홈_메인배너" ap-click-data="1" />
                                </div>
                            </SwiperSlide>
                            <div className="swiper-next"><i class="atom-icon ic_angle_flicking_right_s35">다음</i></div>
                            <div className="swiper-prev"><i class="atom-icon ic_angle_flicking_left_s35">이전</i></div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
}