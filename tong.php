<?php
//////////////////////////////////////////////////////////////////////////
// File Name	: tong.php												//
// Date	 		: 2015.03.18											//
// Compiler 	: -														//
// Os	 		: Window XP												//
// Author		: Kim kyung min											//
//----------------------------------------------------------------------//
// ver			: 1.0.8													//
// Description	: 검색홈페이지											//
//////////////////////////////////////////////////////////////////////////
   	require_once("../DB_data/db_info.php");
    // 데이터베이스 접속 문자열. (db위치, 유저 이름, 비밀번호)
	$dbc = mysqli_connect($SERV,$USER,$PASS,$USEDB)
		or die('Error connecting to MySQL server.');
	mysqli_query($dbc,"set names utf8");
	$file = 'TONG2.txt';
	$fp = @fopen($file,"r");
	// 해당 파일을 읽는다.
	if(!$fp)
		die("$file Can NOT Found.");
		// 파일이 없으면 에러
	$i = 0;
	while(!feof($fp)){
		$tstr=fgets($fp,4096);
		$count = 0;
		$count = strlen($tstr);
		$tstr = addslashes($tstr);
		// '(작은따옴표)를 \로 변경
		if($count>=5){
			if($i==0){
				$query = "INSERT INTO tong(content) VALUES ('$tstr')";
				// 첫번째 일경우에만 insert into를 삽입
			}
			else{
				$query = $query.",('$tstr')";
				// 그렇지 않으면 ,를 통해 데이터 지속적 추가.
			}
			$i +=1;
		}
		flush();
		// flush를 통해 출력물 브라우저에 전송하면서 출력 버퍼 비운다.
	}
	$query = $query.";";
    $result = mysqli_query($dbc,$query) or die('Error querying database.!!!!!!!!!!'); 
	// 쿼리 실행.
	echo nl2br("count : ".$i."\n");
	// nl2br를 통해 \n값을 넣어, 자동개행되도록 한다.
	@fclose($fp);
	// 파일 닫기
	mysqli_close($dbc);
	// db연결해제
?>