import { CodeBlock, a11yDark } from 'react-code-blocks'
import { useEffect } from 'react'
const colorList = [
    {
        name : "$black",
        path : "#000"
    },
    {
        name : "$black_222",
        path : "#222"
    },
    {
        name : "$black_333",
        path : "#333"
    },
    {
        name : "$o2oHeader",
        path : "#333545"
    },
    {
        name : "$txtGr",
        path : "#888"
    },
    {
        name : "$moduleHeaderDesc",
        path : "#d3d3d3"
    },
    {
        name : "$modulePopup",
        path : "rgba(0, 0, 0, .16)"
    },
    {
        name : "$linkThumbnail",
        path : "#ddd"
    },
    {
        name : "$footer",
        path : "#f5f5f5"
    },
    {
        name : "$tabs_1",
        path : "#f0f0f0"
    },
    {
        name : "$white",
        path : "#fff"
    },
    {
        name : "$txtLink",
        path : "#457cdb"
    },
    {
        name : "$linkthumbnailPoint",
        path : "#ff5a5a"
    },
]
export function StyleGuide({title}) {
    useEffect(() => {
        document.title = `AMORESTORE | ${title}`

    }, [])
    return (
        <div>
            <div className="wrap__container">
            <h1 className='title'>스타일</h1>
                <div className="wrap__item">
                    <h2 className="title">컬러셋</h2>
                    <div className="description">사용 컬러셋입니다.</div>
                    <div className="example-area" style={{display : "flex", flexDirection : "column", gap : 20}}>
                        {
                            Object.values(colorList).map((ele, index) => {
                                return <div key={index} style={{ display: "flex", gap: '6px', alignItems : "center" }}><span style={{ backgroundColor: `${ele.path}`, border: "1px solid #dedede", width: 24, height: 24, display: "inline-block" }}></span> <span style={{fontWeight : 700, fontSize : 20}}>{ele.name}</span></div>
                                
                            })
                        }
                    </div>
                </div>

                <div className="wrap__item">
                    <h2 className="title">MediaQuery</h2>
                    <div className="description">break point 영역</div>
                    <div className="code-area">
                        <h3 className="title">코드</h3>

                        <CodeBlock text={`
/* PC 환경 */
.o2o-skin {
    max-width : 640px
}                    
.wrap {
    width : 1024px
}

/* Mobile 환경 */
@media screen and (max-width: 1023px) {
    .wrap {
        width : 100%
    }
}
`} language='css' theme={a11yDark} />
                    </div>
                </div>
            </div>
        </div>
    )
}