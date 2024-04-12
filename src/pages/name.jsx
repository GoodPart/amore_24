import { useEffect } from "react"
export function Name({title}) {
    
    useEffect(() => {
        document.title = `AMORESTORE 가이드 | ${title}`

    }, [])
    return (
        <div>

            <div className="rull_area">
            <h1 className="title">퍼블리싱 규칙</h1>
                <div className="rull_area__item">
                    <h2 className="title">네임규칙</h2>
                    <div className="description">
                        ID는 개발을 위해서만 사용하고, input뒤 라벨등의 바인드를 제외하곤 사용하지 않는다.<br />
                    </div>

                    <div className="rull_area__content">
                        <h3 className="title">예시</h3>
                        <table className="table--lage">
                            <caption>공통 네이밍 규칙 예</caption>
                            <colgroup>
                                <col width="20%" />
                                <col width="20%" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>종류</th>
                                    <th>구분</th>
                                    <th>예시</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="align-l">ID Selector</td>
                                    <td className="align-l">카멜표기법 (camelCase)</td>
                                    <td className="align-l">headerSection, aniHeader</td>
                                </tr>
                                <tr>
                                    <td className="align-l">Class Selector</td>
                                    <td className="align-l">BEM표기법</td>
                                    <td className="align-l">module-header__util(BE)<br /> module-header__title--ani(BEM)<br /> module-header--default(BM)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="rull_area__item">
                    <h2 className="title">예약어</h2>
                    <div className="rull_area__content">
                        <h3 className="title">예시</h3>
                        <table className="table--xLage">
                            <caption>예약어의 예시</caption>
                            <colgroup>
                                <col width="10%" />
                                <col width="10%" />
                                <col width="55%" />

                                <col />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>종류</th>
                                    <th>예약어</th>
                                    <th>예시</th>
                                    <th>비고</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="align-l" rowSpan={5}>레이아웃</td>
                                    <td className="align-l">wrap</td>
                                    <td className="align-l">전체영역</td>
                                    <td className="align-1" rowSpan={5}></td>

                                </tr>
                                <tr>
                                    <td className="align-l">header</td>
                                    <td className="align-l">유저 상태와 페이지 주제가 처음 노출되는 영역</td>
                                </tr>
                                <tr>
                                    <td className="align-l">container</td>
                                    <td className="align-l">페이지 영역</td>
                                </tr>
                                <tr>
                                    <td className="align-l">footer</td>
                                    <td className="align-l">유저 상태와 이용약관 및 카피라이트 등의 바닥글 영역</td>
                                </tr>
                                <tr>
                                    <td className="align-l">contents</td>
                                    <td className="align-l">container내부에서 본문과 그외 영역을 분리하기위해 사용</td>
                                </tr>

                                <tr>
                                    <td className="align-l" rowSpan={4}>그룹핑</td>
                                    <td className="align-l">-area or classArea</td>
                                    <td className="align-l">그룹 영역</td>
                                    <td className="align-1"></td>

                                </tr>
                                <tr>
                                    <td className="align-l">tabWrap</td>
                                    <td className="align-l">탭 버튼 영역과 탭 내용을 감싸는 부모 클래스</td>
                                    <td className="align-1"></td>

                                </tr>
                                <tr>
                                    <td className="align-l">tabs</td>
                                    <td className="align-l">탭 버튼 영역으로, 내부 tab 클래스를 사용 버튼 나열</td>
                                    <td className="align-1"></td>

                                </tr>
                                <tr>
                                    <td className="align-l">prdDetail </td>
                                    <td className="align-l">선택된 탭의 내용 본문으로, 내부는 article클래스를 사용해 영역을 분리한다</td>
                                    <td className="align-1"></td>

                                </tr>


                                <tr>
                                    <td className="align-l">컴포넌트</td>
                                    <td className="align-l">module-[이름]</td>
                                    <td className="align-l">모듈 유형, 독립적으로 사용할 수 있도록 한다. 모듈 내부 클래스는 BEM 방식을 사용해야한다.</td>
                                    <td className="align-1"></td>

                                </tr>

                                <tr>
                                    <td className="align-l">상태</td>
                                    <td className="align-l">is-</td>
                                    <td className="align-l" >특정 상태에 대한 클래스로, 상태이름을 체이닝할때는 '-'(대시)를 사용한다.</td>
                                    <td className="align-1">is-scroll, .is-utils-hidden</td>
                                </tr>
                                <tr>
                                    <td className="align-l">아이콘</td>
                                    <td className="align-l">i</td>
                                    <td className="align-l">i태그를 사용하며, .icon.icon_mobile_20 과 같이 '_'(언더스코어)를 사용한다. 맨 뒤 숫자는 아이콘의 크기를 의미</td>
                                    <td className="align-l">'_20은 width, height가 20의 크기를 갖는다.<br />_8x20은 width: 8과 height:20을 의미한다 </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="rull_area__item">
                    <h2 className="title">이미지 네이밍 규칙</h2>
                    <div className="rull_area__content">
                        <h3 className="title">예시</h3>

                        <table className="table--lage">
                            <caption>이미지 네이밍 규칙 예</caption>
                            <colgroup>
                                <col width="10%" />
                                <col width="50%" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>분류</th>
                                    <th>구분</th>
                                    <th>예시</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="align-l">아이콘</td>
                                    <td className="align-l">아이콘은 '_'(언더스코어)를 사용하여 생성한다.</td>
                                    <td className="align-l">ic_store_20</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
