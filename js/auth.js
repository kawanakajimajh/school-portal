// =======================================
// 川中島中学校 CMS Version4
// auth.js
// =======================================

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email =
        document.querySelector("#email").value;

    const password =
        document.querySelector("#password").value;

    const { data, error } =
        await db.auth.signInWithPassword({

            email: email,

            password: password

        });

    if (error) {

        alert("メールアドレスまたはパスワードが違います。");

        return;

    }

    alert("ログイン成功！");

    location.href = "dashboard.html";

});
