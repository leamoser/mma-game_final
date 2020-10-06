<?php
$startort = 'Gib hier deinen Startort ein.';
$startort_placeholder = 'Gossau SG';

?>

<?php include('templates/head.php') ?>
<section>
    <article>
        <h2><?php echo $startort ?></h2>
        <form action="#" method="get">
            <input id="startort" type="text" placeholder="<?php echo $startort_placeholder ?>">
        </form>
    </article>
    <article>

    </article>
</section>
<?php include('templates/foot.php') ?>
