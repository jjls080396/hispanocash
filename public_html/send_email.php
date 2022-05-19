<?php
//ini_set('display_errors', 1); ini_set('display_startup_errors', 1); error_reporting(E_ALL);
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require './PHPMailer/vendor/autoload.php';

$data = json_decode(file_get_contents('php://input'), true);

$name = $data["name"];
$phone = $data["phone"];
$email = $data["email"];
$city = $data["city"];
$federative_entity = $data["federative_entity"];
//$message = $data["message"];

$body = "<div style='text-align: center;'> <br><br> <div style='font-size: 20px;'> " . 
        "Nombre: " . $name . 
        "<br/>Telefono: " . $phone . 
        "<br/>Correo: " . $email . 
        "<br/>Ciudad: " . $city . 
        "<br/>Estado: " . $federative_entity . 
        //"<br/><br/><br/>Mensaje: " . $message . 
        "</div> <br><br><br><br></div>";
        

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'hispanocash.com';                      //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'noreply@hispanocash.com';              //SMTP username
    $mail->Password   = '41sp4n0C45h';                          //SMTP password
    $mail->SMTPSecure = 'ssl';                                  //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('noreply@hispanocash.com', 'HispanoCash - No Reply');

    //$mail->addAddress('jaime.rico@tequilaplus.com', 'Jaime Rico');
    //$mail->addAddress('ruletaeriz@gmail.com', 'Cristo Lopez');
    $mail->addAddress('hola@hispanocash.com', 'Hola HispanoCash');
    $mail->addAddress('soporte@hispanocash.com', 'Soporte HispanoCash');

    

    //Content
    $mail->isHTML(true);                                        //Set email format to HTML
    $mail->Subject = 'New lead';
    $mail->Body = $body;

    $mail->send();
    echo 'Message has been sent';
}
catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
