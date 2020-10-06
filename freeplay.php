<?php
$startort = 'Gib hier deinen Startort ein.';
$startort_placeholder = 'Gossau SG';
$zielort = 'Dein Zielort ist:';
$b1_text = 'Anderer Zielort';
$b2_text = 'und los...';
?>

<?php include('templates/head.php') ?>
<section id="infoscreen">
    <article>
        <h2><?php echo $startort ?></h2>
        <form action="#" method="get">
            <input id="startort" type="text" placeholder="<?php echo $startort_placeholder ?>">
        </form>
        <h2><?php echo $zielort ?></h2>
        <h3 id="destination">Genf</h3>
    </article>
    <article>
        <button class="full" id="placeNew"><?php echo $b1_text ?></button>
        <button class="full" id="startFreeplay"><?php echo $b2_text ?></button>
    </article>
</section>
<hr>
<section id="game">
    <article id="ct_cockpit">
        <h1>Cocpit</h1>
    </article>
    <?php include('templates/map.php') ?>
    <article id="ct_schedule">
    </article>
</section>
<?php include('templates/foot.php') ?>