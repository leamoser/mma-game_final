<?php
$startort = 'Gib hier deinen Startort ein.';
$startort_placeholder = 'Gossau SG';
$zielort = 'Dein Zielort ist:';
$b1_text = 'Anderer Zielort';
$b2_text = 'und los...';
?>

<?php include('templates/head.php') ?>
<section id="infoscreen" data-level="freeplay">
    <form action="#" method="post">
        <article>
            <h2><?php echo $startort ?></h2>
            <input type="text" placeholder="<?php echo $startort_placeholder ?>">
            <h2><?php echo $zielort ?></h2>
            <h3 id="placeEnd">Genf</h3>
        </article>
        <article>
            <button class="full" id="placeNew"><?php echo $b1_text ?></button>
            <input type="submit" value="<?php echo $b2_text ?>" name="startFreeplay">
        </article>
    </form>
</section>
<hr>
<section id="game">
    <article id="ct_cockpit">
        <h1>Cockpit</h1>
        <p id="placeStart">Startort: </p>
        <p id="placeCurrent">Deine Reise: </p>
        <p id="placeEnd">Endstation: </p>
    </article>
    <?php include('templates/map.php') ?>
    <article id="ct_schedule">
    </article>
</section>
<?php include('templates/foot.php') ?>