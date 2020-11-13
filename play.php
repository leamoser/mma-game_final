<?php include('templates/sessionhandler.php') ?>
<?php
$level = 'Level';
$startort = 'Dein Startort ist:';
$zielort = 'Dein Zielort ist:';
$b1_text = 'Anderer Zielort';
$b2_text = 'und los...';
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
            <p>
                Um diesen Ort zu erreichen hast du maximal <span id="maxTransitions"></span> Umstiege zur Verfügung.
            </p>
        </article>
        <article>
            <button class="full" id="placeNew">
                <p><?php echo $b1_text ?></p>
            </button>
            <button class="full" id="startPlay">
                <a href="#">
                    <p><?php echo $b2_text ?></p>
                </a>
            </button>
        </article>
    </div>
</section>
<section class="maincontainer hide" id="game">
    <article id="ct_cockpit">
        <div class="timespan">
            <div>
                <span class="indicator"></span>
                <p id="placeStartInfo"></p>
            </div>
            <div id="journeyInfo">
                <div>
                    <span class="indicator"></span>
                    <p id="placeCurrentInfo"></p>
                </div>
            </div>
            <div>
                <span class="indicator"></span>
                <p id="placeEndInfo"></p>
            </div>
        </div>
    </article>
    <?php include('templates/map.php') ?>
    <article id="ct_schedule">
    </article>
    <article id="loadMore">
        <button class="full" id="loadMoreConnections">
            <p>+</p>
        </button>
    </article>
    <article id="ct_journeyinfo" class="hide">
        <h2></h2>
    </article>
    <article id="ct_gameWon" class="hide">
        <h2>Du hast gewonnen!</h2>
        <h3>Du bist ein Traingame Meister :)</h3>
    </article>
    <article id="ct_gameLost" class="hide">
        <h2>Game Over</h2>
        <h3>Du hast das Spiel verloren</h3>
    </article>
</section>
<?php include('templates/foot.php') ?>