<?php
$titel = 'Wähle deinen Modus';
//Button 1
$b1_titel = 'Lerne das Spiel';
$b1_btn = 'start';
//Button 2
$b2_titel = 'Entdeckermodus';
$b2_btn = 'start';
//Button 3
$b3_titel = 'Spielmodus';
$b3_btn1 = 'easy';
$b3_btn2 = 'medium';
$b3_btn3 = 'hard';
?>

<?php include('templates/head.php') ?>
<section>
    <article>
        <h2><?php echo $titel ?></h2>
    </article>
    <article>
        <div>
            <h2><?php echo $b1_titel ?></h2>
            <button class="full"><?php echo $b1_btn ?></button>
        </div>
        <div>
            <h2><?php echo $b2_titel ?></h2>
            <button class="full"><?php echo $b2_btn ?></button>
        </div>
        <div>
            <h2><?php echo $b3_titel ?></h2>
            <div class="flex">
                <button class="full"><?php echo $b3_btn1 ?></button>
                <button class="full"><?php echo $b3_btn2 ?></button>
                <button class="full"><?php echo $b3_btn3 ?></button>
            </div>
        </div>
    </article>
</section>
<?php include('templates/foot.php') ?>