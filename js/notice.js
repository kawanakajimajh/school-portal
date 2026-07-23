// ===============================
// 川中島中学校 CMS Version4
// notice.js
// ===============================

console.log("Notice Manager Loaded");

// 編集ボタン
document.querySelectorAll(".edit-button").forEach(button => {

    button.addEventListener("click", () => {

        alert("編集画面はVersion4 Phase2で実装します。");

    });

});

// 削除ボタン
document.querySelectorAll(".delete-button").forEach(button => {

    button.addEventListener("click", () => {

        if(confirm("このお知らせを削除しますか？")){

            alert("Version4 Phase2でSupabaseと連携します。");

        }

    });

});
