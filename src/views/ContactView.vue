<template>
    <form class="form" action="https://formsubmit.co/abdoubourzikat3@gmail.com" method="POST">
        <label>Name:</label>
        <input type="text" name="username" required>
        <label>Email:</label>
        <input type="text" name="email" required>
        <label>Subject:</label>
        <input type="text" name="subject" required>
        <label>Object:</label>
        <input type="text" name="object" required>
        <button type="submit" class="btn btn-secondary mt-3">valid</button>
    </form>
</template>

<script>
</script>

<style>
    .form {
        max-width: 420px;
        margin: 30px auto;
        background: rgba(255, 255, 255, 0.575);
        text-align: left;
        padding: 40px;
        border-radius: 10px;
    }
    label {
        color: rgb(145, 145, 145);
        display: inline-block;
        margin: 25px 0 15px;
        font-size: 0.6em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }
    input {
        display: block;
        padding: 10px 6px;
        width: 100%;
        background: rgba(255, 255, 255, 0);
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid rgb(205, 205, 205);
        color: #555;
    }

</style>