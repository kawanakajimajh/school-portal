// =======================================
// 川中島中学校 CMS Version4
// home.js
// =======================================

console.log("Home Manager Loaded");

// 保存ボタン
const saveButton = document.querySelector(".save-button");

if (saveButton) {

    saveButton.addEventListener("click", () => {

        alert("ホームページの変更を保存しました。（Phase2でSupabaseへ保存予定）");

    });

}

// プレビューボタン
const previewButton = document.querySelector(".preview-button");

if (previewButton) {

    previewButton.addEventListener("click", () => {

        alert("プレビュー機能はPhase2で実装予定です。");

    });

}
