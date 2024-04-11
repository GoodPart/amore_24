import { CodeBlock, a11yDark } from 'react-code-blocks'

const colorList = [
{
 name : "$o2oHeader",
 path : "#333545"
},
{
 name : "$white",
 path : "#fff"
},
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
 name : "$txtGr",
 path : "#888"
},
{
 name : "$txtLink",
 path : "#457cdb"
},
{
 name : "$footer",
 path : "#f5f5f5"
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
 name : "$linkthumbnailPoint",
 path : "#ff5a5a"
    },
{
 name : "$moduleHeaderDesc",
 path : "#d3d3d3"
    },
{
 name : "$tabs_1",
 path : "#f0f0f0"
},
]
export function StyleGuide() {

    return (
        <div>
            <h1 className='title'>스타일</h1>
            <div className="wrap__container">
                <div className="wrap__item">
                    <h2 className="title">컬러셋</h2>
                    <div className="description">사용한 컬러셋입니다.</div>
                    <div className="example-area" style={{display : "flex", flexDirection : "column", gap : 12}}>
                        {
                            Object.values(colorList).map((ele) => {
                                return <div style={{display : "flex", gap : '6px'}}><span style={{fontWeight : 700}}>{ele.name}</span> - <span style={{backgroundColor:`${ele.path}`, width: 20, height: 20, display : "inline-block"}}></span></div>
                                
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}