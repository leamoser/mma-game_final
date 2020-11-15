<?php

//Level-Angabe an nächstes File übergeben
if (isset($_POST['levelSend'])) {
    session_start();
    $_SESSION['level'] = $_POST['levelValue'];
    header('Location: ../play');
}
