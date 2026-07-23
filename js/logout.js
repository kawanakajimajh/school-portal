// ==============================
// logout.js
// ==============================

const logoutButton = document.querySelector(".sidebar-bottom a");

logoutButton.addEventListener("click", async (e) => {

    e.preventDefault();

    await db.auth.signOut({ scope: "local" });

    location.href = "login.html";

});
