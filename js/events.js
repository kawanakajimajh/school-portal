// =======================================
// 川中島中学校 CMS Version4
// events.js
// =======================================

console.log("Events Manager Loaded");

// 編集ボタン
document.querySelectorAll(".edit-button").forEach(button => {

    button.addEventListener("click", () => {

        alert("行事編集機能はPhase2で実装します。");

    });

});

// 削除ボタン
document.querySelectorAll(".delete-button").forEach(button => {

    button.addEventListener("click", () => {

        if (confirm("この学校行事を削除しますか？")) {

            alert("Phase2でSupabaseと連携します。");

        }

    });

});

// 新しい行事ボタン
const addButton = document.querySelector(".primary-button");

if (addButton) {

    addButton.addEventListener("click", () => {

        alert("新しい行事の追加画面はPhase2で実装します。");

    });

}
