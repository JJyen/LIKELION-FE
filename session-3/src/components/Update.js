import {useState} from 'react';

//Update컴포넌트 생성
const Update = (props) => {
    const [title, setTitle]=useState(props.title);
    const [body, setBady]=useState(props.body);
    return (
      <article>
        <h2>Update</h2>
        <form onSubmit={e=>{
          e.preventDefault();
          const _title = e.target.title.value;
          const _body = e.target.body.value;
          props.onUpdate(_title,_body)
        }}>
          
          {/* 기존의 내용이 입력박스에 담겨있게 하기 위한 코드 */}
          <p><input type='text' name='title' placeholder='title' value={title} onChange={(e) =>{
            setTitle(e.target.value);
          }}/></p>
          <p><textarea name='body' placeholder='body' value={body} onChange={(e) => {
            setBady(e.target.value);
          }}/></p>
          <p><input type='submit' value="Update"/></p>
        </form>
      </article>
      )
  }

  export default Update;