//////////////////////////////////////////////////////////////////////////
// File Name	: insert.c												//
// Date	 		: 2015.03.18											//
// Compiler 	: -														//
// Os	 		: Window XP												//
// Author		: Kim kyung min											//
//----------------------------------------------------------------------//
// ver			: 1.0.8													//
// Description	: 검색홈페이지											//
//////////////////////////////////////////////////////////////////////////
function home_view(){	// 홈 화면에 보여질 내용
	var home_result_div = document.getElementById("home_result");
	delete_node(home_result_div);	// 사용자 함수로서 해당 div에 존재하는 자식노드 삭제
	var div1 = document.createElement("div");	// div 생성
	var div2 = document.createElement("div");
	var div3 = document.createElement("div");
	var div4 = document.createElement("div");
	var div5 = document.createElement("div");
	div1.className="resultItem";	// class name 설정
	div2.className="resultItem";
	div3.className="resultItem";
	div4.className="resultItem";
	div5.className="resultItem";
	var textnode1 = document.createTextNode("1. 추가로 원하는 사항은 블로그 댓글 작성 부탁드립니다.");
	var textnode2 = document.createTextNode("2. 무료 웹 서버를 이용합니다. 속도 느려도 이해해주시기 바랍니다.");
	var textnode3 = document.createTextNode("3. 현재 로그인을 통한 문제 추가에 대한 신뢰성 생각중입니다. 좋은 의견 있으면 댓글 부탁드립니다!");
	var textnode4 = document.createTextNode("4. 트래픽 초과시 대처 방법이 없습니다.");
	var textnode5 = document.createTextNode("5. 최소 IE8 버전이어야 합니다. 최적은 크롬, 파폭 이용해주시기 바랍니다.");
	div1.appendChild(textnode1);	// 텍스트 노드 자식노드로 추가
	div2.appendChild(textnode2);
	div3.appendChild(textnode3);
	div4.appendChild(textnode4);
	div5.appendChild(textnode5);
	home_result_div.appendChild(div1);	// div 노드 자식노드로 추가
	home_result_div.appendChild(div2);
	home_result_div.appendChild(div3);
	home_result_div.appendChild(div4);
	home_result_div.appendChild(div5);
}
function knowhow_insert(){	// search 부분의 노하우에 보여질 내용
	var knowhow_div = document.getElementById("knowhow");
	var div1 = document.createElement("div");	// div 생성
	var div2 = document.createElement("div");
	var div3 = document.createElement("div");
	var div4 = document.createElement("div");
	var div5 = document.createElement("div");
	var div6 = document.createElement("div");
	div1.className="resultItem";	// class name 설정
	div2.className="resultItem";
	div3.className="resultItem";
	div4.className="resultItem";
	div5.className="resultItem";
	div6.className="resultItem";
	var textnode1 = document.createTextNode("1. 문제의 일부 단어를 넣고 Enter 혹은 검색 버튼을 클릭한다.");
	var textnode2 = document.createTextNode("2. 만약 '선생님과 학생은 서로 스승과 제자의 관계이다'를 찾고 싶을 경우, '님과 학생은' 만 검색해도 됩니다.");
	var textnode3 = document.createTextNode("3. 대소문자 구별 없습니다. 만약 'This is the moon'을 찾고 싶을 경우, 'this is the moon' 소문자로 검색해도 됩니다.");
	var textnode4 = document.createTextNode("4. 짧은 단어는 추천하지 않습니다. '야구'만 쳐도 40개가 넘게 나옵니다.");
	var textnode5 = document.createTextNode("5. 없는 문제 추가에 대한 부분은 어떻게 하는게 좋을지 블로그에 의견좀 부탁드립니다.");
	var textnode6 = document.createTextNode("6. 무작정 추가의 경우, 나쁜 마음을 품은 분이 일부러 오답을 적을 경우도 있습니다....(퀴즈퀴즈때 경험함...)");
	div1.appendChild(textnode1);	// 텍스트 노드 자식노드로 추가
	div2.appendChild(textnode2);
	div3.appendChild(textnode3);
	div4.appendChild(textnode4);
	div5.appendChild(textnode5);
	div6.appendChild(textnode6);
	knowhow_div.appendChild(div1);	// div 노드 자식노드로 추가
	knowhow_div.appendChild(div2);
	knowhow_div.appendChild(div3);
	knowhow_div.appendChild(div4);
	knowhow_div.appendChild(div5);
	knowhow_div.appendChild(div6);
}