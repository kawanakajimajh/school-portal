// =====================================
// お知らせ一覧を読み込む
// =====================================

async function loadNotices() {

    const tbody = document.getElementById("notice-list");

    if (!tbody) return;

    const { data, error } = await db
        .from("notices")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {

        console.error(error);

        alert("お知らせを取得できませんでした。");

        return;

    }

    tbody.innerHTML = "";

    data.forEach(notice => {

        const date = new Date(notice.created_at)
            .toLocaleDateString("ja-JP");

        tbody.innerHTML += `

        <tr>

            <td>${notice.id}</td>

            <td>${notice.title}</td>

            <td>${date}</td>

            <td>

                <span class="status published">

                    公開

                </span>

            </td>

            <td>

                <button class="edit-button">

                    編集

                </button>

                <button class="delete-button">

                    削除

                </button>

            </td>

        </tr>

        `;

    });

}

loadNotices();
// =====================================
// モーダル
// =====================================

const addButton = document.getElementById("addNoticeButton");

const modal = document.getElementById("noticeModal");

const cancelButton = document.getElementById("cancelNotice");


// 新規作成ボタン

addButton.addEventListener("click", () => {

    modal.classList.add("show");

});


// キャンセルボタン

cancelButton.addEventListener("click", () => {

    modal.classList.remove("show");

});


// 背景クリック

modal.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.classList.remove("show");

    }

});
// =====================================
// 保存ボタン
// =====================================

const saveButton = document.getElementById("saveNotice");

saveButton.addEventListener("click", saveNotice);

async function saveNotice() {

    const title = document.getElementById("noticeTitle").value.trim();

    const content = document.getElementById("noticeContent").value.trim();

    if (!title || !content) {

        alert("タイトルと本文を入力してください。");

        return;

    }

    const { error } = await db
        .from("notices")
        .insert([
            {
                title: title,
                content: content
            }
        ]);

    if (error) {

        console.error(error);

        alert("保存できませんでした。");

        return;

    }

    alert("保存しました！");

    document.getElementById("noticeTitle").value = "";

    document.getElementById("noticeContent").value = "";

    modal.classList.remove("show");

    loadNotices();

}
