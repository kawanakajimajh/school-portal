// =======================================
// 川中島中学校 CMS Version4
// users.js
// =======================================

console.log("Users Manager Loaded");

// 編集ボタン
document.querySelectorAll(".edit-button").forEach(button => {

    button.addEventListener("click", () => {

        alert("管理者編集機能はPhase2で実装します。");

    });

});

// 削除ボタン
document.querySelectorAll(".delete-button").forEach(button => {

    button.addEventListener("click", () => {

        if (confirm("この管理者を削除しますか？")) {

            alert("Phase2でSupabaseと連携します。");

        }

    });

});

// 管理者追加ボタン
const addButton = document.querySelector(".primary-button");

if (addButton) {

    addButton.addEventListener("click", () => {

        alert("管理者追加機能はPhase2で実装します。");

    });

}
