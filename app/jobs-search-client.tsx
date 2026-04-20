'use client'

import { useState } from 'react'
import { JOB_CATEGORIES } from '@/lib/jobs/constants'
import type { Job } from '@/lib/jobs/types'

export default function JobsSearchClient({ initialJobs }: { initialJobs: Job[] }) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [minSalary, setMinSalary] = useState<number>(0)
  const jobs = initialJobs
  const categories = JOB_CATEGORIES

  // 配列にカテゴリが含まれていれば削除し、含まれていなければ追加する。
  function toggleCategory(category: string) {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    )
  }

  //selectedCategoriesの長さが0であれば全カテゴリ表示、そうでなければ選択されたもののみ表示
  const baseJobs = 
    selectedCategories.length === 0
      ? jobs
      : jobs.filter((job) => selectedCategories.includes(job.category))

  // 年収の絞り込み
  const filteredJobs = baseJobs.filter((job) => job.salary >= minSalary)

  return (
    <main>
      <div className="grid min-h-screen grid-cols-[240px_1fr]">
      <section className="bg-[#eef1f4] p-4">
        <h3 className="mb-2 mt-0 font-bold">求人カテゴリ</h3>

        <div className="grid gap-2">
          {categories.map((category) => (
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

        {/* 年収絞り込み */}
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

        <ul className="m-0 grid list-none gap-2 p-0">
          {filteredJobs.map((job) => (
            <li
              key={job.id}
              className="rounded-lg border border-[#ddd] px-3 py-2"
            >
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
