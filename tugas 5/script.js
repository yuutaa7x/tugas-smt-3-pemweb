const form = document.querySelector("#search-form");
const usernameInput = document.querySelector("#username");
const searchButton = document.querySelector("#searchBtn");
const searchStatus = document.querySelector("#searchStatus");
const profileContainer = document.querySelector("#profileContainer");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const username = usernameInput.value.trim();

  if (username === "") {
    searchStatus.textContent = "Masukkan username GitHub terlebih dahulu.";
    searchStatus.className = "search-status error-state";
    profileContainer.hidden = true;
    return;
  }

  searchButton.disabled = true;
  searchStatus.textContent = "Sedang mencari profil";
  searchStatus.className = "search-status loading";
  profileContainer.hidden = true;

  try {
    // Minta data profil dari GitHub.
    const response = await fetch(
      `https://api.github.com/users/${encodeURIComponent(username)}`
    );

    if (response.status === 404) {
      throw new Error("Username GitHub tidak ditemukan.");
    }

    if (!response.ok) {
      throw new Error("Profil tidak dapat dimuat. Coba lagi sebentar.");
    }

    // Ubah jawaban GitHub menjadi data yang bisa dibaca JavaScript.
    const user = await response.json();

    document.querySelector("#profileAvatar").src = user.avatar_url;
    document.querySelector("#profileAvatar").alt = `Avatar ${user.login}`;
    document.querySelector("#profileDisplayName").textContent =
      user.name || user.login;
    document.querySelector("#profileUsername").textContent = `@${user.login}`;
    document.querySelector("#profileRepoTotal").textContent =
      user.public_repos;
    document.querySelector("#profileLink").href = user.html_url;

    profileContainer.hidden = false;
    searchStatus.textContent = "";
    searchStatus.className = "search-status";
  } catch (error) {
    searchStatus.textContent = error.message;
    searchStatus.className = "search-status error-state";
  } finally {
    searchButton.disabled = false;
  }
});
