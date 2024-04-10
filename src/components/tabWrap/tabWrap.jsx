import TabItem from "./tabItem"
import ArticleWrap from "./article";

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
            <span>{tab.tabData}영역</span>
            <span>탭에 따라 하단 tabPanel이 변경됩니다.</span>
            {/* <TabPanel data={filterData} tab={tab.tabData} /> */}
            
        </div>
    )
}

export function TabPanel({ data, tab }) {
    const filterData = Object.values(data).filter(ele => ele.queryPath === tab.tabData)[0];
    const dataOfsortByOrder = filterData.articles ? filterData.articles.sort((a, b) => a.order - b.order) : undefined;
    return (
        <section className="tabPanel">
            <h3 className="blind">{filterData.queryPath}</h3>
            {
                dataOfsortByOrder != undefined ? 
                    <Detail articleData={dataOfsortByOrder} />
                    :
                    <div>not data</div>
            }
        </section>
    )
}

export function Detail({ articleData }) {
    const result = Object.values(articleData);
    return (
        <div className="prdDetail">
            <div className={`article recommendArea`}>스와이퍼</div>
            {
                result.map((ele, index) => {
                    return <ArticleWrap key={index} data={ele} />
                    
                })
            }
        </div>
    )
}