# Component 구성
## <코드리뷰>
### 1. if문과 switch문
if문:  
 조건이 여러 개일 때, 가장 위에서부터 맞는 조건이 나올 때까지 모든 조건을 읽어내려간다. => if(...) else if(...) else if(...) else if(...) else가 있을 때 세 번째 조건이 맞으면 위에 있는 해당하지 않는 조건도 읽고 내려온다.    
switch문:   
바로 맞는 조건을 찾아간다.  
=> 변수 mode가 있고 case에 A, B, C,가 있을 때, mode=C이면 A, B는 건너뛰고 바로 C로 간다.   

조건이 많을 때는 if문보다 switch문을 쓰는 것이 좋다.

### 2. export default
```
//1번
function component() {
 ...
}
export default component

//2번
export default  function component() {
 ...
} 
// 1번을 2번처럼 줄여서 사용할 수 있다.
```
