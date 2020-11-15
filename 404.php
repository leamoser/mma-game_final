<?php
include('templates/head.php')
?>
<section class="maincontainer" id="error">
    <article class="errormessage">
        <p><?php echo $gametitle ?></p>
        <h1>404</h1>
        <h2>Diese Seite gibt es nicht</h2>
    </article>
    <article>
        <p>Hier geht's zurück zur Startseite...</p>
        <button class="full">
            <a href="/choose_mode">
                <p>Startseite</p>
            </a>
        </button>
    </article>
</section>

<?php
include('templates/foot.php')
?>