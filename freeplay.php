<?php
$startort = 'Gib hier deinen Startort ein.';
$startort_placeholder = 'Gossau SG';
$zielort = 'Dein Zielort ist:';
$b1_text = 'Anderer Zielort';
$b2_text = 'und los...';
?>

<?php include('templates/head.php') ?>
<section class="maincontainer" id="infoscreen" data-level="freeplay">
    <form action="#" method="post" id="infoscreen_flex">
        <article>
            <div class="infobox">
                <h2><?php echo $startort ?></h2>
                <input type="text" placeholder="<?php echo $startort_placeholder ?>" name="startPlace" id="inputStartPlace">
            </div>
            <div class="infobox">
                <h2><?php echo $zielort ?></h2>
                <h3 id="placeEnd">...</h3>
            </div>
        </article>
        <article>
            <button class="full" id="placeNew">
                <p><?php echo $b1_text ?></p>
            </button>
            <button class="full" id="startPlay">
                <p><?php echo $b2_text ?></p>
            </button>
        </article>
    </form>
</section>
<section class="maincontainer hide" id="game">
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