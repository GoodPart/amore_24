export default function TabItem({data}) {
    return (
        <button
            className={`tab ${Boolean(data.state) ? 'on' : ''}`}
            data-tab={data.queryPath}
            ap-click-area={data.apClickArea}
            ap-click-name={data.apClickName}
            ap-click-data={data.apClickData}>
            <span className="inner">{data.title}</span>
        </button>
    )
}