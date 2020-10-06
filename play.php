<?php
$level = 'Level';
$startort = 'Gib hier deinen Startort ein.';
$zielort = 'Dein Zielort ist:';
$b1_text = 'Anderer Zielort';
$b2_text = 'und los...';
?>

<?php include('templates/head.php') ?>
<section id="inforscreen">
    <article>
        <h2><?php echo $level ?></h2>
        <h3 id="level">medium</h3>
        <h2><?php echo $startort ?></h2>
        <h3 id="placeStart">Genf</h3>
        <h2><?php echo $zielort ?></h2>
        <h3 id="placeEnd">Genf</h3>
    </article>
    <article>
        <button class="full" id="placeNew"><?php echo $b1_text ?></button>
        <button class="full" id="startPlay"><?php echo $b2_text ?></button>
    </article>
</section>
<section id="game">
    <mark>Game</mark>
</section>
<?php include('templates/foot.php') ?>