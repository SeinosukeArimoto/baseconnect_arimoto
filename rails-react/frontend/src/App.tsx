import { useEffect, useMemo, useState } from 'react'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

type Job = {
  id: number
  category: string
  salary: number
  title: string
}

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

function App() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [error, setError] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [minSalary, setMinSalary] = useState<number>(0)

  async function fetchJobs() {
    setError('')
    try {
      const res = await fetch(`${API_BASE_URL}/api/jobs`)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = (await res.json()) as Job[]
      setJobs(data)
    } catch (e) {
      setError('取得に失敗しました')
      console.error(e)
    }
  }

  function toggleCategory(category: string) {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    )
  }

  const filteredJobs = useMemo(() => {
    const baseJobs =
      selectedCategories.length === 0
        ? jobs
        : jobs.filter((job) => selectedCategories.includes(job.category))

    return baseJobs.filter((job) => job.salary >= minSalary)
  }, [jobs, selectedCategories, minSalary])

  useEffect(() => {
    fetchJobs()
  }, [])

  return (
    <main>
      <div className="grid min-h-screen grid-cols-[240px_1fr]">
        <section className="bg-[#eef1f4] p-4">
          <h3 className="mb-2 mt-0 font-bold">求人カテゴリ</h3>

          <div className="grid gap-2">
            {JOB_CATEGORIES.map((category) => (
              <label key={category} className="flex items-center text-sm leading-[1.4]">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => toggleCategory(category)}
                  className="mr-1.5 h-3.5 w-3.5 cursor-pointer rounded-[2px] border-[1.5px] border-sky-400 bg-[#eef1f4] align-middle accent-sky-400"
                />
                {category}
              </label>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="mb-1.5 mt-0 font-bold">年収</h3>
            <select
              value={minSalary}
              onChange={(e) => setMinSalary(Number(e.target.value))}
              className="h-7 w-full appearance-none rounded-[2px] border border-[#b9c0c8] bg-white pl-2 text-xs text-[#333]"
            >
              <option value={0}>すべて</option>
              <option value={300}>300万円以上 ▼</option>
              <option value={400}>400万円以上 ▼</option>
              <option value={500}>500万円以上 ▼</option>
              <option value={600}>600万円以上 ▼</option>
            </select>
          </div>
        </section>

        <section className="bg-white p-4">
          <h3 className="mb-2 mt-0 font-bold">求人一覧</h3>

          <p className="text-sm">該当件数: {filteredJobs.length}件</p>
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}

          <ul className="m-0 mt-2 grid list-none gap-2 p-0">
            {filteredJobs.map((job) => (
              <li key={job.id} className="rounded-lg border border-[#ddd] px-3 py-2">
                <p className="mb-1 mt-0 font-bold">{job.title}</p>
                <p className="mb-0.5 mt-0 text-sm">カテゴリ：{job.category}</p>
                <p className="mb-[30px] mt-0 text-sm">年収: {job.salary}万円</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}

export default App
