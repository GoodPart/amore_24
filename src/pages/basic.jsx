import { useEffect } from 'react';
import { CopyBlock, nord, a11yDark } from 'react-code-blocks';
import { TitleComponent } from '../components/rull';


const htmlSpec = `
<html
    lang=""// 기본 언어
    data-browser-name="" // 브라우저명
    data-browser-version="" // 브라우저 버전
    data-os-name="" // OS 명
    data-os-version="" // OS 버전
    data-device-type="" // 디바이스 타입
    style="" // 모바일 vh 스크롤 이슈
>
</html>
`

const vhIssue = `
// 전역에 코드 삽입
// React 및 Next의 경우, App영역에 삽입
function vhSafety() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", $\{vh}px); 
};
useEffect(() => {
    setScreenSize();
});

// css 최상위 파일에 아래 코드 삽입. ex)common.css
:root {
    --vh : 100%;
}

//100vh 가 필요한 곳은 아래와 같이 사용 (Css)
height: calc(var(--vh, 1vh) * 100);
`

const metaTag = `
<meta charset="utf-8">
<title>AMORESTORE | 아모레성수</title>
<meta
    name="viewport"
    content="width=device-width,
    initial-scale=1.0,
    maximum-scale=1.0,
    minimum-scale=1.0,
    user-scalable=no,
    viewport-fit=cover,
    shrink-to-fit=no"
>
<meta name="title" content="AMORESTORE | 아모레성수">
<meta name="description" content="내 안의 아름다움을 마주하는 공간, 아모레성수에서 만나요!">

// og 관련
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.amoremall.com/kr/ko/store/display?storeCode=001">
<meta property="og:title" content="AMORESTORE | 아모레성수">
<meta property="og:description" content="내 안의 아름다움을 마주하는 공간, 아모레성수에서 만나요!">
<meta property="og:image" content="https://images-kr.amoremall.com/o2o/AS0000000163">
<meta property="og:site_name" content="아모레퍼시픽">
<meta property="og:locale" content="ko_KR">
`

export function Basic({title}) {

    useEffect(() => {
        document.title = `AMORESTORE 가이드 | ${title}`
    }, [])
    return (
        <div>
            <div className="wrap__container">
                {/* <h1 className='title'>기본환경</h1> */}
                <TitleComponent depth={1} title="기본환경" />
                <div className="wrap__item">
                    <TitleComponent depth={2} title="HTML 태그" hashOption={{id : "html_data"}} />
                    <div className="description">html 및 head영역에 대한 기본 사항입니다.</div>
                    <div className="example-area">
                        <CopyBlock text={htmlSpec} language='js' theme={a11yDark} />
                    </div>
                </div>
                <div className="wrap__item">
                    <TitleComponent depth={2} title="VH 이슈" hashOption={{ id: "vh_issue" }} />

                    <div className="description">해당 코드를 사용하여 뷰포트 이슈를 제거</div>
                    <div className="example-area">
                        <CopyBlock text={vhIssue} language='js' theme={a11yDark} />
                    </div>
                </div>

                <div className="wrap__item">
                    <TitleComponent depth={2} title="Head 태그" hashOption={{ id: "head_data" }} />

                    <div className="description">head의 Meta 태그</div>
                    <div className="example-area">
                        <CopyBlock text={metaTag} language='js' theme={a11yDark} />
                    </div>
                </div>
                <div className="wrap__item">
                    <TitleComponent depth={2} title="Package" hashOption={{ id: "package" }} />

                    <div className="description">사용한 패키지 및 버전</div>
                    <div className="example-area">
                        <CopyBlock text={`
"react": "^18.2.0",
"node-sass": "^7.0.3",
"react-router-dom": "^6.22.3",
"swiper": "^11.1.0",

`} language='js' theme={a11yDark} />
                    </div>
                </div>
            </div>

        </div>
    )
}