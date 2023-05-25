//Create컴포넌트 생성
const Create = (props) => {
    return (
    <article>
      <h2>Create</h2>
      <form onSubmit={e=>{
        e.preventDefault();
        const _title = e.target.title.value;
        const _body = e.target.body.value;
        props.onCreate(_title,_body)
      }}>
        <p><input type='text' name='title' placeholder='title'/></p>
        <p><textarea name='body' placeholder='body'/></p>
        <p><input type='submit' value="Create"/></p>
      </form>
    </article>
    )
  }

  export default Create;