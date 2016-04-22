//////////////////////////////////////////////////////////////////////////
// File Name	: one.js												//
// Date	 		: 2015.03.18											//
// Compiler 	: -														//
// Os	 		: Window XP												//
// Author		: Kim kyung min											//
//----------------------------------------------------------------------//
// ver			: 1.0.11												//
// Description	: 검색홈페이지											//
//////////////////////////////////////////////////////////////////////////
window.onload = init;	//onload시, init 함수 호출
var home_flag = true;
var search_flag = false;
var ie8_check = false;
var first_flag = false;
function init(){
//	var add_button = document.getElementById("add");
	var search_button = document.getElementById("search");
	var search_text = document.getElementById("search_text");
	var search_nav = document.getElementById("search_nav");
	var home_nav = document.getElementById("home_nav");
//	add_button.onclick = add_click;
	search_button.onclick = search_click;							// 버튼 클릭 이벤트
	search_text.onkeypress = key_check;								// 키 삽입에 대한 이벤트
	search_nav.onclick = search_nav_click;							// 네비게이션 바에 존재하는 search 클릭
	home_nav.onclick = home_nav_click;								// 네비게이션 바에 존재하는 home 클릭
	
	knowhow_insert();												// insert.js에 존재하는 함수 호출
	home_view();													// insert.js에 존재하는 함수 호출

}
function search_nav_click(){										// 네비게이션 바에 존재하는 search 클릭했을 때
	var form_div = document.getElementById("form_container");
	var home_result_div = document.getElementById("home_result");
	var result_box_div = document.getElementById("result_box");
	var knowhow_box_div = document.getElementById("knowhow_box");
	home_result_div.style.display = "none";							// 홈에 대한 결과화면 display 끄기
	form_div.style.display = "block";								// 검색에 관련된 form_div display 보여주기
	if(first_flag==false){											// 검색 결과가 없다면
		result_box_div.style.display = "none";						// 검색 결과_div display 끄기
		knowhow_box_div.style.display = "block";					// 노하우에 관련된 display 보여주기
	}
	else{															// 검색 결과가 있다면
		knowhow_box_div.style.display = "none";						// 검색 결과_div display 보여주기
		result_box_div.style.display = "block";						// 노하우에 관련된 display 끄기
	}
}
function home_nav_click(){											// 네비게이션 바에 존재하는 home 클릭했을 때
	var form_div = document.getElementById("form_container");
	var home_result_div = document.getElementById("home_result");
	var result_box_div = document.getElementById("result_box");
	var knowhow_box_div = document.getElementById("knowhow_box");
	knowhow_box_div.style.display = "none";							// 노하우에 관련된 display 끄기
	form_div.style.display = "none";								// 검색에 관련된 form_div display 끄기
	result_box_div.style.display = "none";							// 검색 결과_div display 끄기
	home_result_div.style.display = "block";						// 홈 결과에 관련된 display 보여주기
	home_view();													// insert.js에 존재하는 함수 호출
}
function xml_get(index,data,url){									// 검색 했을 때, xml에 해당하는 데이터 가져오기
	// index
	// 1 : search_click;
	// 2 : add_click;
	var result_box_div = document.getElementById("result_box");	
	result_box_div.style.display = "block";							// 검색 결과_div display 보여주기
	progress_show();												// 검색 중일 때, progress 보여주기
	var request = createRequest();
	request.onreadystatechange = function(){						// 요청 상태가 변경된다면
		if (request.readyState === 4 && request.status === 200) {	// 처리 상태값이 4이고, 결과가 200으로 성공적이라면
			if(index==1){
				value_get(request.responseXML);						// value_get함수 호출 ( 서버측 스크립트에서 보낸 XML 데이터를 인자값으로 한다 )
			}
			else if(index==2){
					// add button click
			}
	   } 		 
	}
	request.open("POST",url,true);									// post 방식으로
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	request.send(data);												// 데이터를 전송한다.
	console.log(data);												// 로그 추출
}
function delete_node(node){											// 자식 노드 삭제 함수
	var child = 0;
	while(node.children[node.children.length-1]){
		child = node.children[node.children.length-1];
        if(child) node.removeChild(child);
	}
}
function value_get(xml){
	var resultDiv = document.getElementById("result");
	delete_node(resultDiv);											// 결과에 대한 자식노드 삭제
	if (xml==null)													// xml이 존재하지 않다면
	{
		resultDiv.appendChild(not_result());						// not_result()함수의 리턴값을 자식노드로 추가
		return ;
	}
	var quiz = xml.getElementsByTagName("quiz")[0];					// xml의 quiz 태그값을 가져옴
	var quiz_count = 0;
	var flag = false;
	if(typeof(quiz.children)=='undefined'){				
		ie8_check=true;
		quiz_count = quiz.childNodes.length;
	}
	else{
		quiz_count = quiz.children.length;
		flag = true;
	}
	var count = 0;
	while(count<quiz_count-1){										// quiz노드에 존재하는 count 수를 빼주어야한다.
		var div = document.createElement("div");
		div.className="resultItem";
		if(flag==false){											// quiz의 타입이 오브젝트가 아니면 ( 필요없어보인다 )
			div.appendChild(document.createTextNode(quiz.childNodes[count].firstChild.nodeValue));
			resultDiv.appendChild(div);
		}
		else{														// quiz의 타입이 오브젝트일 경우
			div.appendChild(document.createTextNode(quiz.children[count].firstChild.nodeValue));
			resultDiv.appendChild(div);
		}
		count++;
	}
	if(quiz_count==1){												// quiz의 자식노드 중 content가 없고 count만 있다면
		resultDiv.appendChild(not_result());						// 결과값이 없는 것으로 인식
	}
	document.getElementById("result_box").children[0].firstChild.nodeValue = "검색 결과".concat(" : ",quiz_count-1," 개 ");	// 검색 결과의 개수 표시
}
function not_result(){												// 결과값이 없을 때 호출되는 함수
	var div = document.createElement("div");
	div.className="resultItem not";
	div.appendChild(document.createTextNode("결과값이 존재하지 않습니다."));	// 해당 내용을 div의 자식노드에 추가
	return div;
}
function search_click(){
	var search_button = document.getElementById("search_text");
	var data = "data="+encodeURIComponent(document.getElementById("search_text").value);	// 검색할 내용의 특정문자를 이스케이핑하여 데이터에 추가 ( kk&m -> "kk%26m" )
	if(document.getElementById("search_text").value==""){									// 검색할 내용이 없다면
		alert("단어 혹 문장을 입력하세요");
		return ;
	}
	else if(document.getElementById("search_text").value.indexOf("  ")!=-1){				// 스페이스 2번 했다면
		alert("스페이스 2번은 안됩니다. 올바르게 입력해주세요");
		return ;
	}
	first_flag=true;
	document.getElementById("knowhow_box").style.display = "none";							// 노하우에 관련된 display 끄기
	xml_get(1,data,"tong_search.php");														// xml_get 함수 호출
}
function add_click(){	// 미구현
	var data = "data="+document.getElementById("add_text").value;
	xml_get(2,data,"tong_add.php");
}
function progress_show(){																	// 검색 중일때, 프로그레스바 표시
	document.getElementById("search_text").value = "";
	document.getElementById("result_box").children[0].firstChild.nodeValue = " 검색 중 "
	document.getElementById("result_box").style.display = "block";
	var resultDiv = document.getElementById("result");
	delete_node(resultDiv);
	var div = document.createElement("div");
	div.className="progress";
	var img = document.createElement("img");
	img.src = "12121212.gif";
	div.appendChild(img);
	resultDiv.appendChild(div);
}