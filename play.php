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
            <button class="full hide" id="startPlay">
                <a href="#">
                    <p><?php echo $b2_text ?></p>
                </a>
            </button>
        </article>
    </div>
</section>
<section class="maincontainer hide" id="game">
    <article id="ct_cockpit">
        <p id="levelModus">Level: </p>
        <div class="timespan">
            <div>
                <span class="indicator"></span>
                <p id="placeStartInfo"></p>
            </div>
            <div id="journeyInfo">
            </div>
            <div>
                <span class="indicator"></span>
                <p id="placeEndInfo"></p>
            </div>
        </div>
        <hr>
    </article>
    <article id="ct_cockpit_added">
        <p>Du bist mit <span id="counterMoves"></span> gefahren. Dir verbleiben noch <span id="availableMoves"></span> Züge.</p>
    </article>
    <?php include('templates/map.php') ?>
    <?php include('templates/breakscreens/break.php') ?>
    <?php include('templates/breakscreens/won.php') ?>
    <?php include('templates/breakscreens/lost.php') ?>
    <article id="ct_schedule">
    </article>
    <article id="loadMore">
        <button class="full" id="loadMoreConnections">
            <p>+</p>
        </button>
    </article>
</section>
<?php include('templates/foot.php') ?>