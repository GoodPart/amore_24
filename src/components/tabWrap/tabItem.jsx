export default function TabItem({ data, checked, onChange }) {
    return (
        <button
            className={`tab ${data.queryPath === checked ? 'on' : ''}`}
            data-tab={data.queryPath}
            ap-click-area={data.apClickArea}
            ap-click-name={data.apClickName}
            ap-click-data={data.apClickData}
            onClick={()=> onChange({tab : data.queryPath})}
        >
            <span className="inner">{data.title}</span>
        </button>
    )
}