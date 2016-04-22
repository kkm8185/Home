<?php
//////////////////////////////////////////////////////////////////////////
// File Name	: tong_search.php										//
// Date	 		: 2015.03.18											//
// Compiler 	: -														//
// Os	 		: Window XP												//
// Author		: Kim kyung min											//
//----------------------------------------------------------------------//
// ver			: 1.0.15												//
// Description	: 검색홈페이지											//
//////////////////////////////////////////////////////////////////////////
   	require_once("../DB_data/db_info.php");
    // 데이터베이스 접속 문자열. (db위치, 유저 이름, 비밀번호)

	$dbc = mysqli_connect($SERV,$USER,$PASS,$USEDB)
		or die('Error connecting to MySQL server.');
	mysqli_query($dbc,"set names utf8");
	$i = 0;
	$doc = new DOMDocument('1.0', 'utf-8');
    // xml 생성

    $doc->preserveWhiteSpace=FALSE; 
    //불필요한 공백 제거

    $doc->formatOutput = true;
    // 들여쓰기

    $quiz = $doc->createElement('quiz');
    // 퀴즈라는 요소를 만든다

	$doc->appendChild($quiz);
    // xml에 quiz라는 요소 만든 것을 child로 넣는다
	$content = rawurldecode($_REQUEST["data"]); 
	// url로 인코딩된 데이터를 디코딩.
	$content = trim($content);
	// 앞 뒤 공백 제거
	$content = addslashes($content);
	// '(작은따옴표)를 \로 변경
	$query = "SELECT content FROM tong WHERE tong.content LIKE '%$content%';";
	// 해당 데이터 검색 쿼리
    $result = mysqli_query($dbc,$query) or die('Error querying database.!!!!!!!!!!'); 
	// db 실행
	while ($row = mysqli_fetch_array($result)){
		$i +=1;
		$to = $row['content'];
		$question = $doc->createElement('content');
		// content라는 요소를 만들어 퀘스천에 넣는다.
		$question_text = $doc->createTextNode($to);
		// 검색된 데이터를 question_text에 텍스트노드로 만든다.
		$question->appendChild($question_text);
		// 퀘스천의 자식 노드로 question_text로 삽입한다.
	    $quiz->appendChild($question);
	    // 퀴즈의 자식노드로 question을 삽입한다.
	}
	$count = $doc->createElement('count', $i);
	$quiz->appendChild($count);
	// 퀴즈의 자식노드로 count값을 삽입한다.
    $xml = $doc->saveXML();
    // xml 형태로 저장한다
    header('Content-type: text/xml;charset=UTF-8');
    // 헤더는 다음과 같다
    echo $xml;
    // 바로 xml 형태로 output한다
    $doc->save('test.xml');
	// 서버에 test.xml 파일 생성
	mysqli_close($dbc);   
	// db 연결 끊기.
?>