//Article컴포넌트 생성
const Article = (props) => {
    return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
    )
  }

  export default Article;