function openLetter() {
    const closed = document.getElementById("closed");
    const opened = document.getElementById("opened");

    closed.classList.add("hidden");
    setTimeout(() => {
        opened.classList.remove("hidden");
    }, 1000); // Tunggu animasi amplop tertutup selesai
}