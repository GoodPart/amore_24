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
                    <div>not data</div>
            }
        </section>
    )
}

export function Detail({ articleData }) {
    const result = Object.values(articleData);
    return (
        <div className="prdDetail">
            {
                result.map((ele, index) => {
                    return <ArticleWrap key={index} data={ele} />
                    
                })
            }
        </div>
    )
}