export default function Footer() {
    return (
        <footer className='module-footer'>
            <section className="module-footer__inner">
                <ul className="module-footer__links--large">
                    <li><a href="#none" ap-click-area="스토어_공통" ap-click-name="스토어_공통_Footer" ap-click-data="로그인 버튼">로그인</a></li>
                    <li><a href="https://www.amoremall.com/kr/ko/beautypoint/app/footer/agreement.do" target="_blank" rel="opener noreferrer" ap-click-area="스토어_공통" ap-click-name="스토어_공통_Footer" ap-click-data="이용약관 버튼">이용약관</a></li><li><a href="https://www.amoremall.com/kr/ko/beautypoint/app/footer/privacy.do" target="_blank" rel="opener noreferrer" ap-click-area="스토어_공통" ap-click-name="스토어_공통_Footer" ap-click-data="개인정보처리방침 버튼">개인정보처리방침</a></li>
                </ul>
                <div className="module-footer__copyright">
                    <div className="module-footer__copyright-txt">© AMOREPACIFIC CORPORATION. ALL RIGHTS RESERVED</div>
                </div>
            </section>
        </footer>
    )
}