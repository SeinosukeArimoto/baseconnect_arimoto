export default function NewJobPage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>求人投稿</h1>

      <form style={{ marginTop: 16, display: 'grid', gap: 16, maxWidth: 640 }}>
        <div>
          <label htmlFor="category">求人カテゴリ</label>
          <br />
          <select id="category" name="category" style={{ marginTop: 8, width: '100%', padding: 8 }}>
            <option value="">カテゴリを選択</option>
            <option value="営業">営業</option>
            <option value="エンジニア">エンジニア</option>
            <option value="デザイン">デザイン</option>
            <option value="カスタマーサポート">カスタマーサポート</option>
          </select>
        </div>

        <div>
          <label htmlFor="salary">年収（万円）</label>
          <br />
          <input id="salary" name="salary" type="number" style={{ marginTop: 8, width: '100%', padding: 8 }} />
        </div>

        <div>
          <label htmlFor="title">求人タイトル</label>
          <br />
          <input id="title" name="title" type="text" style={{ marginTop: 8, width: '100%', padding: 8 }} />
        </div>

        <button type="submit" style={{ padding: 10 }}>
          投稿
        </button>
      </form>
    </main>
  )
}
