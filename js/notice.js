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
