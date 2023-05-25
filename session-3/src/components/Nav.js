//Nav컴포넌트 생성
const Nav = (props) => {
    const lis =[]
    for(let i=0; i<props._topics.length; i++){
          let t = props._topics[i]; //배열 형성
           //lis에 t 추가
          lis.push(<li key={t.id}>
            <a id={t.id} href={'/read/'+t.id} onClick={(e)=>{
              e.preventDefault();
              props.onChangeMode(Number(e.target.id));
            }}>{t.title}</a>
            </li>) //배열의 세부내용 title, id 받아오기
    }
    return (
      <nav>
        <ol>
          {lis}
        </ol>
      </nav>
    )
  }

  export default Nav;