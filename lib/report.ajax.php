<?php
$data = $_POST['data'];

var_dump($data);

$to = 'christoph.starkmann@explido.de';
$subject = 'Explido LinkGen Feedback';
$message = 'Fehler!';
$message .= "\n";
$message .= $data['program'];

$mail_sent = mail($to, $subject, $message);
echo $mail_sent . ' from php';
?>
