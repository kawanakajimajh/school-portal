// =====================================
// ログインチェック
// =====================================

(async () => {

    const { data, error } = await db.auth.getSession();

    if (!data.session) {

        alert("ログインしてください。");

        location.href = "login.html";

    }

})();
