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
                <input type="text" placeholder="<?php echo $startort_placeholder ?>" name="startPlace" id="inputStartPlace" autocomplete="off">
                <select id="possiblePlaces" name="possiblePlaces" size="5"></select>
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
                <a href="#">
                    <p><?php echo $b2_text ?></p>
                </a>
            </button>
        </article>
    </form>
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
    <article id="ct_duration">
        <p id="journeyDuration"></p>
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
    <article id="ct_freeGameWon" class="hide">
        <h2>Du bist an deinem Zielort angekommen</h2>
        <h2>Dein Nächster Zielort:</h2>
        <h3 id="placeEndNew"></h3>
        <button class="full hideOnClick">
            <p>Weiter</p>
        </button>
        <button class="full">
            <p>Spiel abbrechen</p>
        </button>
    </article>
    <article id="ct_gameLost" class="hide">
        <h1>Game Over</h1>
        <p>Du hast das Spiel verloren</p>
    </article>
    <article id="ct_gameWon" class="hide">
        <h2>Du hast gewonnen!</h2>
        <h3>Du bist ein Traingame Meister :)</h3>
    </article>
</section>
<?php include('templates/foot.php') ?>