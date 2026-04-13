'use client'

import { useState } from 'react'

type Job = {
  id: number
  title: string
  category: string
  salary: number
}

const jobs: Job[] = [
  { id: 1, title: '経験者歓迎！大手企業でのWebエンジニア募集', category: 'エンジニア', salary: 700 },
  { id: 2, title: '未経験OK！営業アシスタント急募', category: '営業', salary: 350 },
  { id: 3, title: 'UI/UXデザイナー募集！急成長中のスタートアップ', category: 'デザイン', salary: 550 },
]

const categories = ['営業', 'エンジニア', 'デザイン']

export default function Page() {
  const [count, setCount] = useState(0)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  function toggleCategory(category: string) {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) return prev.filter((c) => c !== category)
      return [...prev, category]
    })
  }

  const filteredJobs =
    selectedCategories.length === 0
      ? jobs
      : jobs.filter((job) => selectedCategories.includes(job.category))

  return (
    <main>
      <h1>求人検索</h1>
      <p>現在値: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>

      {categories.map((category) => (
        <label key={category} style={{ display: 'block' }}>
          <input
            type="checkbox"
            checked={selectedCategories.includes(category)}
            onChange={() => toggleCategory(category)}
          />
          {category}
        </label>
      ))}

      <ul>
        {filteredJobs.map((job) => (
          <li key={job.id}>
            <p>{job.title}</p>
            <p>カテゴリ: {job.category}</p>
            <p>年収: {job.salary}万円</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
