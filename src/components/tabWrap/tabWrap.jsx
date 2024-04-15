import TabItem from "./tabItem"
import ArticleWrap from "./article";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export function TabWrap({ data, tab, onChange }) {
    const result = Object.values(data);
    return (
        <div className="tabWrap">
            <div className="tabs">
            {
                result.map((ele, index) => {
                    return <TabItem key={index} data={ele} checked={tab.tabData} onChange={onChange} />
                })
            }
            </div>
            <TabPanel data={result} tab={tab.tabData} />
            
        </div>
    )
}

export function TabPanel({ data, tab }) {
    const filterData = data.filter(ele => ele.queryPath === tab)[0];
    const dataOfsortByOrder = filterData.articles ? filterData.articles.sort((a, b) => a.order - b.order) : undefined;
    return (
        <section className="tabPanel">
            <h3 className="blind">{filterData.queryPath}</h3>
            {
                dataOfsortByOrder != undefined ? 
                    <Detail articleData={dataOfsortByOrder} />
                    :
                    <div style={{height : 500}}>not data</div>
            }
        </section>
    )
}

export function Detail({ articleData }) {
    const result = Object.values(articleData);
    return (
        <div className="prdDetail">
            <ArticleSwiperHome />
            {
                result.map((ele, index) => {
                    return <ArticleWrap key={index} data={ele} />
                    
                })
            }
        </div>
    )
}

export function ArticleSwiperHome() {
    return (
        <div className="article recommendArea listHome">
            <div className="contents-wrap">
                <h4 className="blind">매장 소식</h4>
                <Swiper
                    className="swiper-container apSwiper--news-list"
                    spaceBetween={16}
                    slidesPerView={'auto'}
                    pagination={{
                        type: 'progressbar',
                    }}
                    navigation={{
                        nextEl: ".swiper-next",
                        prevEl: ".swiper-prev",
                    }}
                    modules={[Navigation]}
                >
                    <SwiperSlide>
                        <div className="list-item">
                            <a href="#">
                                <p class="tit">커스텀미 맞춤 스킨케어 서비스 오픈 및 이벤트 안내</p>
                                <p class="desc"></p>
                                <span class="date">2024.03.25</span>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="list-item">
                            <a href="#">
                                <p class="tit">커스텀미 맞춤 스킨케어 서비스 오픈 및 이벤트 안내</p>
                                <p class="desc"></p>
                                <span class="date">2024.03.25</span>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="list-item">
                            <a href="#">
                                <p class="tit">커스텀미 맞춤 스킨케어 서비스 오픈 및 이벤트 안내</p>
                                <p class="desc"></p>
                                <span class="date">2024.03.25</span>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="more">
                        <div className="list-item">
                            <a href="#">
                                <i className="btnIr moreRound"></i>
                                <span class="text">더 보기</span>
                            </a>
                        </div>
                    </SwiperSlide>
                    <div className="swiper-next"><i className="atom-icon ic_angle_flicking_right_s35">다음</i></div>
                    <div className="swiper-prev"><i className="atom-icon ic_angle_flicking_left_s35">이전</i></div>
                </Swiper>
            </div>
        </div>
    )
}