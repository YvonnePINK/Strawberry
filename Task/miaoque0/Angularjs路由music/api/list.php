<?php

	$list = array(
		array('id'=>1, 'pid'=>2, 'text'=>'�Һܳ�����Һ�����'),
		array('id'=>2, 'pid'=>2, 'text'=>'�ֹ�Ӣ��Լ��'),
		array('id'=>3, 'pid'=>2, 'text'=>'���ҵ�Լ��'),
		array('id'=>4, 'pid'=>3, 'text'=>'pretty boy'),
		array('id'=>5, 'pid'=>3, 'text'=>'See You Again'),
		array('id'=>6, 'pid'=>2, 'text'=>'�����'),
		array('id'=>7, 'pid'=>1, 'text'=>'�ټ� �ҵİ���'),
		array('id'=>8, 'pid'=>2, 'text'=>'���е�����'),
		array('id'=>8, 'pid'=>3, 'text'=>'Let It Go'),
		array('id'=>10, 'pid'=>1, 'text'=>'��Ҫ˵�ټ�'),
		array('id'=>11, 'pid'=>3, 'text'=>'Rise'),
		array('id'=>12, 'pid'=>2, 'text'=>'�ټ�'),
		array('id'=>13, 'pid'=>1, 'text'=>'׷����'),
		array('id'=>14, 'pid'=>2, 'text'=>'����˵������'),
		array('id'=>15, 'pid'=>4, 'text'=>'???? ???'),
		array('id'=>16, 'pid'=>1, 'text'=>'��������'),
		array('id'=>17, 'pid'=>3, 'text'=>'Love Me Like You Do'),
		array('id'=>18, 'pid'=>2, 'text'=>'�þò���'),
		array('id'=>19, 'pid'=>1, 'text'=>'����Ϸ'),
		array('id'=>20, 'pid'=>2, 'text'=>'K��֮��'),
		array('id'=>21, 'pid'=>1, 'text'=>'�������'),
		array('id'=>22, 'pid'=>2, 'text'=>'�������'),
		array('id'=>23, 'pid'=>3, 'text'=>'Just Like Fire'),
		array('id'=>24, 'pid'=>4, 'text'=>'�������'),
		array('id'=>25, 'pid'=>4, 'text'=>'����Style'),
		array('id'=>26, 'pid'=>4, 'text'=>'���饬��'),
		array('id'=>27, 'pid'=>1, 'text'=>'�������'),
		array('id'=>28, 'pid'=>4, 'text'=>'���֮��'),
		array('id'=>29, 'pid'=>4, 'text'=>'?????'),
		array('id'=>30, 'pid'=>3, 'text'=>' Good Time'),
		array('id'=>31, 'pid'=>1, 'text'=>'������ԥ'),
		array('id'=>32, 'pid'=>4, 'text'=>'����ʤ���� �������ꥳ�फ�顫'),
		array('id'=>33, 'pid'=>3, 'text'=>' Heart And Soul'),
		array('id'=>34, 'pid'=>4, 'text'=>'???? '),
		array('id'=>35, 'pid'=>1, 'text'=>'����ֻ�ܻ�ζ'),
		array('id'=>36, 'pid'=>3, 'text'=>'Bang Bang'),
		array('id'=>37, 'pid'=>4, 'text'=>'�����ä����ȽФӤ���'),
		array('id'=>38, 'pid'=>3, 'text'=>'Same Old Love'),
		array('id'=>39, 'pid'=>4, 'text'=>'����Τ���'),
		array('id'=>40, 'pid'=>1, 'text'=>'�����糾')
	);

	// ����pid
	$pid = $_GET['pid'];

	$result = array();

	foreach ($list as $key => $value) {

		if($value['pid'] == $pid) {
			$result[$key] = $value;
		}
	}

	echo json_encode($result);

?>