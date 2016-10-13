<?php
	if(isset($_POST)){
		if(($_POST['login']=='glederson')&&($_POST['password']=='123456')){
			echo 1;
		}else{
			echo 0;
		}
	}else{
		echo -1;
	}
?>