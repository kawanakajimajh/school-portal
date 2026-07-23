// =======================================
// 川中島中学校 CMS Version4
// settings.js
// =======================================

console.log("Settings Manager Loaded");

// 保存ボタン
const saveButton = document.querySelector(".save-button");

if (saveButton) {

    saveButton.addEventListener("click", () => {

        alert("サイト設定を保存しました。（Phase2でSupabaseへ保存予定）");

    });

}

// 初期設定に戻すボタン
const resetButton = document.querySelector(".reset-button");

if (resetButton) {

    resetButton.addEventListener("click", () => {

        const ok = confirm("設定を初期値に戻しますか？");

        if (ok) {

            alert("初期設定に戻す機能はPhase2で実装予定です。");

        }

    });

}
