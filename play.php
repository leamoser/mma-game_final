<?php include('templates/sessionhandler.php') ?>
<?php
$level = 'Level';
$startort = 'Dein Startort ist:';
$zielort = 'Dein Zielort ist:';
$b1_text = 'Anderer Zielort';
$b2_text = 'und los...';
$explainer = 'Um diesen Ort zu erreichen brauchst du mindestens 2 Umstiege und hast maximal 10 Umstiege zur Verfügung.';
?>

<?php include('templates/head.php') ?>
<section class="maincontainer" id="infoscreen" data-level="<?php echo $_SESSION['level'] ?>">
    <div id="infoscreen_flex">
        <article>
            <div class="infobox">
                <h2><?php echo $level ?></h2>
                <h3 id="level"><?php echo $_SESSION['level'] ?></h3>
            </div>
            <div class="infobox">
                <h2><?php echo $startort ?></h2>
                <h3 id="placeStart">...</h3>
            </div>
            <div class="infobox">
                <h2><?php echo $zielort ?></h2>
                <h3 id="placeEnd">...</h3>
            </div>
            <p><?php echo $explainer ?></p>
        </article>
        <article>
            <button class="full" id="placeNew">
                <p><?php echo $b1_text ?></p>
            </button>
            <button class="full" id="startPlay">
                <p><?php echo $b2_text ?></p>
            </button>
        </article>
    </div>
</section>
<section class="maincontainer hide" id="game">
    <article id="ct_cockpit">
        <p id="placeStartInfo"></p>
        <p id="placeCurrentInfo"></p>
        <p id="placeEndInfo"></p>
    </article>
    <?php include('templates/map.php') ?>
    <article id="ct_schedule">
    </article>
</section>
<?php include('templates/foot.php') ?>