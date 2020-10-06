<?php
$titel = 'Wähle deinen Modus';
//Button 1
$b1_titel = 'Lerne das Spiel';
$b1_btn = 'start';
$b1_link = '/tutorial.php';
//Button 2
$b2_titel = 'Entdeckermodus';
$b2_btn = 'start';
$b2_link = '/freeplay.php';
//Button 3
$b3_titel = 'Spielmodus';
$b3_btn1 = 'easy';
$b3_btn2 = 'medium';
$b3_btn3 = 'hard';
$b3_link = '/play.php';
?>

<?php include('templates/head.php') ?>
<section>
    <article>
        <h2><?php echo $titel ?></h2>
    </article>
    <article>
        <div>
            <h2><?php echo $b1_titel ?></h2>
            <button class="full"><a href="<?php echo $b1_link ?>"><?php echo $b1_btn ?></a></button>
        </div>
        <div>
            <h2><?php echo $b2_titel ?></h2>
            <button class="full"><a href="<?php echo $b2_link ?>"><?php echo $b2_btn ?></a></button>
        </div>
        <div>
            <h2><?php echo $b3_titel ?></h2>
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
    </article>
</section>
<?php include('templates/foot.php') ?>