<?php
$titel = 'Wähle deinen Modus';
//Button 1
$b1_titel = 'Lerne das Spiel';
$b1_explainer = 'Du bist neu? Mache dich zuerst mit dem Spiel vertraut und erfahre, um was es geht.';
$b1_btn = 'start';
$b1_link = '/tutorial';
//Button 2
$b2_titel = 'Entdeckermodus';
$b2_explainer = 'Bestimme selber wo du starten möchtest und reise unbegrenzt quer durch die Schweiz.';
$b2_btn = 'start';
$b2_link = '/freeplay';
//Button 3
$b3_titel = 'Spielmodus';
$b3_explainer = 'Wähle deine Schwerigkeitsstufe und meistere die Levels mit der vorgegebenen Anzahl Umstiege.';
$b3_btn1 = 'easy';
$b3_btn2 = 'medium';
$b3_btn3 = 'hard';
$b3_link = '/play';
?>

<?php include('templates/head.php') ?>
<section class="maincontainer" id="choosemode">
    <article>
        <h1 class="gametitle"><?php echo $gametitle ?></h1>
        <h2><?php echo $titel ?></h2>
    </article>
    <article>
        <div>
            <h2><?php echo $b1_titel ?></h2>
            <p class="subinfo"><?php echo $b1_explainer ?></p>
            <button class="full"><a href="<?php echo $b1_link ?>">
                    <p><?php echo $b1_btn ?></p>
                </a></button>
        </div>
        <div>
            <h2><?php echo $b3_titel ?></h2>
            <p class="subinfo"><?php echo $b3_explainer ?></p>
            <div class="flex">
                <form action="/templates/calc.php" method="post">
                    <input type="hidden" value="<?php echo $b3_btn1 ?>" name="levelValue">
                    <input type="submit" value="<?php echo $b3_btn1 ?>" name="levelSend">
                </form>
                <form action="/templates/calc.php" method="post">
                    <input type="hidden" value="<?php echo $b3_btn2 ?>" name="levelValue">
                    <input type="submit" value="<?php echo $b3_btn2 ?>" name="levelSend">
                </form>
                <form action="/templates/calc.php" method="post">
                    <input type="hidden" value="<?php echo $b3_btn3 ?>" name="levelValue">
                    <input type="submit" value="<?php echo $b3_btn3 ?>" name="levelSend">
                </form>
            </div>
        </div>
        <div>
            <h2><?php echo $b2_titel ?></h2>
            <p class="subinfo"><?php echo $b2_explainer ?></p>
            <button class="full"><a href="<?php echo $b2_link ?>">
                    <p><?php echo $b2_btn ?>
                </a></p></button>
        </div>
    </article>
</section>
<?php include('templates/foot.php') ?>