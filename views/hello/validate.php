<?php
function post_captcha($user_response) {
  $fields_string = '';
  $fields = array(
    'secret' => '6Lca9ksUAAAAAPsPaV-PmYBUpSnOdeeT_ZBYQSfE',
    'response' => $user_response
  );
  foreach($fields as $key=>$value)
    $fields_string .= $key . '=' . $value . '&';
  $fields_string = rtrim($fields_string, '&');

  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, 'https://www.google.com/recaptcha/api/siteverify');
  curl_setopt($ch, CURLOPT_POST, count($fields));
  curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, True);

  $result = curl_exec($ch);
  curl_close($ch);

  return json_decode($result, true);
}

// Call the function post_captcha
$res = post_captcha($_POST['grecaptcha']);

if (!$res['success']) {
  // What happens when the CAPTCHA wasn't checked
  echo 'false';
} else {
  // If CAPTCHA is successfully completed...

  // Paste mail function or whatever else you want to happen here!
  echo 'true';
}
?>
