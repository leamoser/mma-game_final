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
                <div id="possiblePlaces" name="possiblePlaces">
                </div>
                <div class="infobox">
                    <h2><?php echo $zielort ?></h2>
                    <h3 id="placeEnd">...</h3>
                </div>
        </article>
        <article>
            <button class="full" id="placeNew">
                <a href="freeplay">
                    <p><?php echo $b1_text ?></p>
                </a>
            </button>
            <button class="full hide" id="startPlay">
                <p><?php echo $b2_text ?></p>
            </button>
        </article>
    </form>
</section>
<section class="maincontainer hide" id="game">
    <article id="ct_cockpit">
        <p id="levelModus"></p>
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
        <p id="journeyDuration"></p>
    </article>
    <?php include('templates/map.php') ?>
    <?php include('templates/breakscreens/break.php') ?>
    <?php include('templates/breakscreens/next.php') ?>
    <?php include('templates/breakscreens/lost.php') ?>
    <?php include('templates/breakscreens/won.php') ?>
    <article id="ct_schedule">
    </article>
    <article id="loadMore">
        <button class="full" id="loadMoreConnections">
            <p>+</p>
        </button>
    </article>
</section>
<?php include('templates/foot.php') ?>