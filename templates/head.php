<?php
$gametitle = 'abgefahren';
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title><?php echo $gametitle; ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
    <link rel="stylesheet" type="text/css" media="screen" href="css/main.css">
    <link rel='manifest' href='/manifest.json'>
    <script type="module">
        import 'https://cdn.jsdelivr.net/npm/@pwabuilder/pwaupdate';
        const el = document.createElement('pwa-update');
        document.body.appendChild(el);
    </script>
    <script src='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js'></script>
    <script type="module" src="js/main.js"></script>
    <link rel="shortcut icon" href="/assets/pwaicons/abgefahren_icon-120x120.png">
    <link rel="icon" type="image/png" href="/assets/pwaicons/abgefahren_icon-36x36.png" sizes="36x36">
    <link rel="icon" type="image/png" href="/assets/pwaicons/abgefahren_icon-96x96.png" sizes="96x96">
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/pwaicons/abgefahren_icon-180x180.png">
    <meta name="msapplication-TileColor" content="#77BDBE">
    <meta name="msapplication-TileImage" content="/assets/pwaicons/abgefahren_icon-144x144.png">
</head>

<body>
    <main>
        <?php include('navigation.php') ?>