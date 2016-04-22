<?php
//////////////////////////////////////////////////////////////////////////
// File Name	: tong_del.php											//
// Date	 		: 2015.03.18											//
// Compiler 	: -														//
// Os	 		: Window XP												//
// Author		: Kim kyung min											//
//----------------------------------------------------------------------//
// ver			: 1.0.1													//
// Description	: 검색홈페이지											//
//////////////////////////////////////////////////////////////////////////
   	require_once("../DB_data/db_info.php");
    // 데이터베이스 접속 문자열. (db위치, 유저 이름, 비밀번호)
	$dbc = mysqli_connect($SERV,$USER,$PASS,$USEDB)
		or die('Error connecting to MySQL server.');
	mysqli_query($dbc,"set names utf8");
	$query = "DELETE FROM `tong` WHERE 1;";
	// 모든 데이터 삭제쿼리
    $result = mysqli_query($dbc,$query) or die('Error querying database.!!!!!!!!!!'); 
	// db 실행
	echo $result;
	// 결과 출력
	mysqli_close($dbc);
	// db 연결 해제
?>