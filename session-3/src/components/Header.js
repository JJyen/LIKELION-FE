//Header컴포넌트 생성
const Header = (props) => {
    return (
      <header>
        <h1>
           <a href="/" onClick={(e)=> { 
               e.preventDefault(); // a 태그를 클릭 했을 때 리로드 되는 것을 막음
               props.onChangeMode(); 
           }}>{props.title}</a>
        </h1>
      </header>
    );
  }

  export default Header;