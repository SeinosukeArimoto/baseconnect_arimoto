import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const JOB_CATEGORIES = [
  '事務',
  'エンジニア',
  '営業',
  'デザイン',
  'マーケティング',
  '財務・経理',
  '人事',
  'カスタマーサポート',
  '製造',
  '医療・介護',
]

function NewJobPage() {
  const [category, setCategory] = useState('')
  const [salary, setSalary] = useState('')
  const [title, setTitle] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  async function createJob(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')

    try {
      const res = await fetch('http://localhost:3000/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category,
          salary: Number(salary),
          title,
        }),
      })

      if (!res.ok) {
        const err = await res.json()
        const message = (err.errors ?? []).join(', ') || `HTTP ${res.status}`
        throw new Error(message)
      }

      navigate('/')
    } catch (e) {
      setError(e instanceof Error ? e.message : '投稿に失敗しました')
    }
  }

  return (
    <main className="mx-auto px-6 py-[10px]">
      <h2 className="mb-7 mt-0 text-[28px] font-bold">求人投稿</h2>

      <form onSubmit={createJob} className="grid gap-y-[18px]">
        <label htmlFor="category" className="mb-0 block text-base font-medium">
          求人カテゴリ選択
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="h-10 w-[250px] appearance-none rounded-[2px] border border-[#d7d7d7] bg-white px-[14px] text-base"
        >
          <option value="">カテゴリを選択 ▼</option>
          {JOB_CATEGORIES.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <label htmlFor="salary" className="mb-0 block text-base font-medium">
          年収（万円）
        </label>
        <input
          id="salary"
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="h-10 w-[250px] rounded-[2px] border border-[#d7d7d7] bg-white px-[14px] text-base"
        />

        <label htmlFor="title" className="mb-0 block text-base font-medium">
          求人タイトル
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="h-10 w-full rounded-[2px] border border-[#d7d7d7] bg-white px-[14px] text-base"
        />

        <button
          type="submit"
          className="mt-[18px] h-10 w-[250px] cursor-pointer rounded-md border-0 bg-[#3da7e3] text-[15px] font-medium leading-none text-white"
        >
          投稿
        </button>
      </form>

      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
    </main>
  )
}

export default NewJobPage
