// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCaV9egqUhFRqDc9Ug-ULkWjYYyFuxR4ew",
    authDomain: "ar-risk.firebaseapp.com",
    databaseURL: "https://ar-risk-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "ar-risk",
    storageBucket: "ar-risk.appspot.com",
    messagingSenderId: "378232515783",
    appId: "1:378232515783:web:488c46687815d4388fe2e2",
    measurementId: "G-33CEDTPMEJ"
  };
  
  function showPopup(message) {
    const popup = document.getElementById("popupSuccess");
    popup.innerText = message;
    popup.style.display = "block";
  
    setTimeout(() => {
      popup.style.display = "none";
    }, 3000); // 3 saniye sonra kaybolur
  }
  
  // Başlat
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  const auth = firebase.auth();
  
  auth.signInAnonymously()
    .then(() => {
    console.log("Anonim giriş başarılı.");
  
    // Sipariş butonları aktif hale gelsin
    document.querySelectorAll(".orderBtn").forEach((button) => {
      button.addEventListener("click", () => {
        const item = button.closest(".single-menu").dataset.item;
        const ref = db.ref("Website/Table-2" + item); // 🔄 güncel veri yolu
  
        ref.get().then((snapshot) => {
          const current = snapshot.val() || 0;
          ref.set(current + 1).then(() => {
            showPopup(`Your ${item} order has been received! 🥳 (Total: ${current + 1})`);
          });
        }).catch((err) => {
          console.error("Veritabanı hatası:", err);
          showPopup("Hata oluştu. Lütfen tekrar deneyin.");
        });
      });
    });
  })
  .catch((error) => {
    console.error("Anonim giriş hatası:", error.message);
    alert("Bağlantı kurulamadı. Menü yüklenemedi.");
  });   