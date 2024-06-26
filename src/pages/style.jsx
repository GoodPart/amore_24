import { CodeBlock, a11yDark } from 'react-code-blocks'
import { useEffect } from 'react'
import { TitleComponent } from '../components/rull'
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
        document.title = `AMORESTORE 가이드 | ${title}`

    }, [])
    return (
        <div>
            <div className="wrap__container">
                <TitleComponent depth={1} title={"스타일"} />
                <div className="wrap__item">
                    <TitleComponent depth={2} title={"컬러셋"} hashOption={{ id: "colorset"}} />

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
                    <TitleComponent depth={2} title={"MediaQuery"} hashOption={{ id: "media_query" }} />

                    <div className="description">기본 MediaQuery 넓이는 '1023px'을 기준으로하며, 해당 가이드를 '모바일'디바이스로 변경하면 확인 가능</div>
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

/* PC Device */
@media screen and (max-width: 1023px) {
   ...
}
/* PC Device */

/* Mobile Device */
@media screen and (hover: none) and (pointer: coarse) {
    .wrap {
        width: 100%;

        >ul+div {
            margin: 24px auto 24px;
            width: 100%;
        }
    }
}
/* Mobile Device */
`} language='css' theme={a11yDark} />
                    </div>
                </div>
            </div>
        </div>
    )
}