# mbti Test Page 제작

## <코드리뷰>
1. 시맨틱 태그(html):
-코드 가독성이 향상되기 때문에 협업을 할 때 다른 사람이 코드를 쉽게 볼 수 있다.
-시맨틱 태그를 적잘히 사용하면 검색엔진을 최적화 시킬 수 있다.
1-1) 시작페이지를 나타내는 코드들 header태그로 묶어주기
1-2) 질문 및 결과 페이지는 main태그로 묶어주고 section태그를 이용해서 질문페이지와 결과페이지 영역 나누기

2. 네이밍: 코드가 복잡해질 때를 대비해서, 코드의 가독성을 위해서 의미를 알 수 있는 이름을 넣는 것이 좋다.
2-1) id a, b는 '그렇다'와 '아니다'를 나타낼 버튼의 id이니 yes, no같이 의미를 알 수 있는 이름으로 넣어주기

3. img class(html/css)
모든 페이지의 이미지가 똑같은 형식을 가지므로 img태그를 사용하여 바로 css에 코드를 작성하면 클래스를 따로 만들 필요가 없다. ( css: .img{ } -> img{ } )

4. textContent(js)
innerHTML는 태그를 포함한 모든 html 내용을 가져오고 textContent는 태그 내의 텍스트만 가져오기 때문에 html 전체 내용이 필요한 것이 아니면 textContent를 사용하여 처리 속도를 높일 수 있다.

5. qNumber(js)
qNumbr의 value가 키 이름과 같기 때문에 객체에 qNumber을 따로 작성하지 않고 바로 questionNumber.innerHTML=num으로 코드를 작성하면 코드를 줄일 수 있다.
(questionNumber.innerHTML=q[num].qNumber -> questionNumber.innerHTML=num)
