import TabItem from "./tabItem"

export function TabWrap({ data }) {
    const result = Object.values(data);
    return (
        <div className="tabWrap">
            <div className="tabs">
            {
                result.map((ele, index) => {
                    return <TabItem key={index} data={ele} />
                })
            }
            </div>
            <TabPanel tabData={data} />
        </div>
    )
}

export function TabPanel({ tabData }) {

    const result = Object.values(tabData);

    return (
        <section className="tabPanel">
            {
                
            }

            <h3 className="blind">{ tabData.queryPath}</h3>
            <Detail />
            
        </section>
    )
}

export function Detail({ }) {
    return (
        <div className="prdDetail">

        </div>
    )
}