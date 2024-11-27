<template>
  <div class="iced-not-today">
    <div class="modal-content">
      <div class="close-btn">&times;</div>
      <img src="../assets/iced not today latte.png" alt="Iced not today latte" />
      <h2>Iced Not Today Latte</h2>
      <p>₱ 190</p>
      <p>Most ordered. Our own signature Spanish latte</p>

      <div class="option-group">
        <h3>Choice of Shot (Select 1)</h3>
        <label>
          <input type="radio" v-model="selectedShot" value="Single Shot" /> Single Shot
        </label>
        <label>
          <input type="radio" v-model="selectedShot" value="Double Shot" /> Double Shot
        </label>
        <label> <input type="radio" v-model="selectedShot" value="Quad Shot" /> Quadshot </label>
      </div>

      <div class="option-group">
        <h3>Drink Extras</h3>
        <p>Select up to 7 (optional)</p>
        <label> <input type="checkbox" value="Stevia Drops" v-model="extras" />Stevia Drops </label>

        <label> <input type="checkbox" value="Syrup" v-model="extras" />Syrup </label>

        <label> <input type="checkbox" value="Sugar Syrup" v-model="extras" />Sugar Syrup </label>

        <label> <input type="checkbox" value="Oatmilk" v-model="extras" />Oatmilk </label>

        <label> <input type="checkbox" value="Sweetcream" v-model="extras" />Sweetcream </label>

        <label> <input type="checkbox" value="Stevia Drops" v-model="extras" />Stevia Drops </label>
      </div>
    </div>
  </div>
</template>

<style></style>

<script></script>
