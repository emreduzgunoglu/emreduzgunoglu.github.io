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

const color = {
  green: "#28a745",   // Success
  red: "#dc3545",     // Error
  yellow: "#ffc107",  // Warning
  blue: "#007bff"     // Info (opsiyonel)
};

function showPopup(message, color = "#28a745") { 
  const popup = document.getElementById("popupSuccess");
  const payBtn = document.getElementById("payBillBtn");
  const callBtn = document.getElementById("callWaiterBtn");

  popup.innerHTML = message;
  popup.style.backgroundColor = color; 
  popup.style.display = "block";

  payBtn.style.visibility = "hidden";
  callBtn.style.visibility = "hidden";

  setTimeout(() => {
    popup.style.display = "none";
    payBtn.style.visibility = "visible";
    callBtn.style.visibility = "visible";
  }, 3000);
}

function callWaiter() {
  const ref = db.ref("Website/Table-1/callWaiter");
  ref.set(true).then(() => {
    showPopup("A waiter is on the way! 🛎️");
  }).catch((err) => {
    console.error("Çağrı hatası:", err);
    showPopup("An error occurred while calling the waiter.", color.red);
  });
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

  ref.get()
    .then(snapshot => {
      const data = snapshot.val() || {};
      let html = "";
      let total = 0;

      for (const item in data) {
        if (item === "callWaiter") continue;
        const qty = data[item];
        if (!qty || qty === 0) continue; // ✅ Sıfırları gösterme

        const price = prices[item] || 0;
        const subtotal = qty * price;
        total += subtotal;
        html += `<div style="display:flex; justify-content:space-between;">
                  <span>${item} × ${qty}</span>
                  <span>$${subtotal.toFixed(2)}</span>
                </div>`;
      }

      document.getElementById("billItems").innerHTML = html || "<i>No items ordered.</i>";
      document.getElementById("billTotal").innerHTML = `
        <div style="display: flex; justify-content: space-between;">
          <span><strong>Total</strong></span>
          <span><strong>$${total.toFixed(2)}</strong></span>
        </div>`;
      document.getElementById("billPopup").style.display = "flex";
    })
    .catch(err => {
      console.error("Hesap görüntülenemedi:", err);
      showPopup("An error occurred while loading the bill.", color.red);
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

  ref.get()
    .then(snapshot => {
      const data = snapshot.val();
      if (!data) {
        showPopup("No bill found to reset.", color.yellow);
        return;
      }

      const updates = {};
      for (const item in data) {
        updates[item] = (item === "callWaiter") ? false : 0;
      }

      ref.update(updates)
        .then(() => {
          closeBill();
          showPopup("Payment completed. Thank you! 🙏");
        })
        .catch(err => {
          console.error("Veriler sıfırlanamadı:", err);
          showPopup("An error occurred while resetting the bill.", color.red);
        });

    })
    .catch(err => {
      console.error("Veritabanı okuma hatası:", err);
      showPopup("An error occurred while accessing the bill.", color.red);
    });
}

// Başlat
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const auth = firebase.auth();

let currentItem = "";
let currentIngredients = [];

function openIngredientPopup(itemName, ingredientsText) {
  currentItem = itemName;
  currentIngredients = ingredientsText.split(',').map(i => i.trim());

  const list = document.getElementById("ingredientList");
  list.innerHTML = "";
  document.getElementById("popupTitle").innerText = `Customize ${itemName}`;

  currentIngredients.forEach((ingredient, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${ingredient}</span>
      <button class="closeBtn" onclick="removeIngredient(${index})">✖</button>
    `;
    list.appendChild(li);
  });

  document.getElementById("ingredientPopup").style.display = "flex";
}

function removeIngredient(index) {
  currentIngredients.splice(index, 1);
  openIngredientPopup(currentItem, currentIngredients.join(', '));
}

function closeIngredientPopup() {
  const popup = document.getElementById("ingredientPopup");
  popup.classList.add("fade-out");
  setTimeout(() => {
    popup.style.display = "none";
    popup.classList.remove("fade-out");
  }, 300);
}

window.addEventListener("DOMContentLoaded", () => {
  const confirmBtn = document.getElementById("confirmOrderBtn");
  if (confirmBtn) {
    confirmBtn.addEventListener("click", () => {
      const ref = db.ref("Website/Table-1/" + currentItem);
      ref.get().then(snapshot => {
        const current = snapshot.val() || 0;
        ref.set(current + 1).then(() => {
          closeIngredientPopup();
          showPopup(`Your ${currentItem} order has been received! 🥳 (Total: ${current + 1})`);
        });
      }).catch(err => {
        console.error("Sipariş hatası:", err);
        showPopup("Order failed. Please try again.", color.red);
      });
    });
  } else {
    console.warn("#confirmOrderBtn not found in DOM");
  }
});

auth.signInAnonymously().then(() => {
  console.log("Anonim giriş başarılı.");
  document.querySelectorAll(".orderBtn").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".single-menu").dataset.item;
      const ingredientsText = button.closest(".single-menu").querySelector(".menu-ingredients").innerText;
      openIngredientPopup(item, ingredientsText);
    });
  });
}).catch((error) => {
  console.error("Anonim giriş hatası:", error.message);
  showPopup("Bağlantı kurulamadı. Menü yüklenemedi.", color.red);
});