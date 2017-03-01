<?php 

$username = $_GET['username'];

$arr = ['zhangsan','lisi'];

if(in_array($username,$arr)){
	echo 1;
}else{
	echo 0;
}