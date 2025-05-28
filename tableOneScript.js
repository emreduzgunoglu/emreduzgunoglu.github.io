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
  const payBtn = document.getElementById("payBillBtn");

  popup.innerHTML = message;
  popup.style.display = "block";
  payBtn.style.visibility = "hidden"; // butonu gizle

  setTimeout(() => {
    popup.style.display = "none";
    payBtn.style.visibility = "visible"; // geri göster
  }, 3000);
}

function showBill() {
  const ref = db.ref("Website/Table-1");
  const prices = {
    "Lobster Bisque": 5.95,
    "Bread Barrel": 6.95,
    "Crab Cake": 7.95,
    "Caesar Selections": 8.95,
    "Tuscan Grilled": 9.95,
    "Mozzarella Stick": 4.95,
    "Greek Salad": 9.95,
    "Spinach Salad": 9.95,
    "Lobster Roll": 12.95
  };

  ref.get().then(snapshot => {
    const data = snapshot.val() || {};
    let html = "";
    let total = 0;

    for (const item in data) {
      if (item === "callWaiter") continue;
      const qty = data[item];
      const price = prices[item] || 0;
      const subtotal = qty * price;
      total += subtotal;
      html += `<div style="display:flex; justify-content:space-between;">
                  <span>${item} × ${qty}</span>
                  <span>$${subtotal.toFixed(2)}</span>
                </div>`;
    }

    document.getElementById("billItems").innerHTML = html || "<i>No items ordered.</i>";
    document.getElementById("billTotal").innerText = `Total: $${total.toFixed(2)}`;
    document.getElementById("billPopup").style.display = "flex";
  });
}

function closeBill() {
  const popup = document.getElementById("billPopup");
  popup.classList.add("fade-out");

  setTimeout(() => {
    popup.style.display = "none";
    popup.classList.remove("fade-out"); 
  }, 300); 
}

function payBill() {
  const ref = db.ref("Website/Table-1");
  ref.remove().then(() => {
    closeBill();
    showPopup("Payment completed. Thank you! 🙏");
  });
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
      const ref = db.ref("Website/Table-1/" + item); // 🔄 güncel veri yolu

      ref.get().then((snapshot) => {
        const current = snapshot.val() || 0;
        ref.set(current + 1).then(() => {
          showPopup(`Your ${item} order has been received! 🥳`);
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