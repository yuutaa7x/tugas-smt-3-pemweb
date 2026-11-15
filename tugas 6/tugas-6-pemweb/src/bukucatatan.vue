<script setup>
  import { ref, computed } from 'vue';

  const listCategory = ref(['Fiction', 'Light Novel', 'Comic']);
  const Category = ref('');
  const readedStatus = ref(false);

  const readDone = computed(() => {
    return task.value.filter(item => item.haveRead).length;
  });

  let id = 0;

  const newTask = ref('');
  const task = ref([]);

  function addTask() {
    if (!newTask.value.trim()) return;

    task.value.push({
      id: id++,
      judul: newTask.value,
      selectedCategories: Category.value,
      haveRead: readedStatus.value //
    });
    newTask.value = '';
    Category.value = '';
    readedStatus.value = false;
  }
</script>

<template>
  <div class="container-buku">
    <h2>List Buku Catatan</h2>
    <form @submit.prevent="addTask">
      <div class="input-form">
        <input v-model="newTask" required placeholder="Masukkan Judul Buku..." type="text">
      </div>
      <br>
      <div class="input-form">
        <select v-model="Category">
          <option disabled value="">Pilih Kategori</option>
          <option v-for="ctg in listCategory" :key="ctg" :value="ctg">
            {{ ctg.toUpperCase() }}
          </option>
        </select>
      </div>
      <br>
      <div class="input-form checkboxes">
        <label>
          <input type="checkbox" v-model="readedStatus"> Sudah Dibaca!
        </label>
      </div>
      <br>
      <button type="submit">Tambah Buku</button>
    </form>
    <br>
    <div class="list-section">
      <h3>Daftar Koleksi Buku</h3>
      <p class="stats">Total buku selesai dibaca: <strong>{{ readDone }}</strong> dari {{ task.length }} buku</p>

      <ul class="buku-list">
        <li v-for="item in task" :key="item.id" :class="{ 'selesai': item.haveRead }">
          <div class="info-buku">
            <span>{{ item.judul }}</span>
            <span v-if="item.selectedCategories"> - {{ item.selectedCategories }}</span>
            <span> - </span>
            <span :class="item.haveRead ? 'badge-sukses' : 'badge-belum'">
              {{ item.haveRead ? 'Selesai' : 'Belum' }}
            </span>
          </div>
        </li>
      </ul>

      <p v-if="task.length === 0">Belum ada buku dalam daftar.</p>
    </div>
    <br>
  </div>
</template>


<style scoped>

</style>
