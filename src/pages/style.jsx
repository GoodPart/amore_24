export function StyleGuide() {
    return (
        <div>
            <div className="guide__title">아이디 네이밍 룰</div>
            <div>
                id는 카멜표기법을 사용한다.
            </div>
            <div className="guide__title">클래스 네이밍 룰</div>
            <div>
                클래스 네이밍은 블록, 요소, 수정자 형식과 카멜표기법을 사용한다.
            </div>
            <div className="guide__title">클래스 상태 네이밍 룰</div>
            <div>
                scroll, active 등 상태의 변화가 필요할 경우, is-active와 같이 상태어 앞에'is-'를 사용한다.
            </div>
            <div className="guide__title">a태그 룰</div>
            <div>
                기본적으로 href, ap-click-area, ap-click-name, ap-click-data를 작성한다.<br />
                a태그 안은 비어있으면 안된다.
            </div>
            <div className="guide__title">이미지 룰</div>
            <div></div>
        </div>
    )
}