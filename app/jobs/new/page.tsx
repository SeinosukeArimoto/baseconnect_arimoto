import { JOB_CATEGORIES } from '@/lib/jobs/constants'
import { createJobAction } from './actions'

export default function NewJobPage() {

  return (
    <main className="mx-auto px-6 py-[10px]">
      <h2 className="mb-7 mt-0 text-[28px] font-bold">求人投稿</h2>

      <form
        action={createJobAction}
        className="grid gap-y-[18px]"
        >
        <label htmlFor="category"
          className="mb-0 block text-base font-medium"
          >求人カテゴリ選択</label>
        <select id="category" name="category"
          className="h-10 w-[250px] appearance-none rounded-[2px] border border-[#d7d7d7] bg-white px-[14px] text-base"
        >
          <option value="">カテゴリを選択 ▼</option>
          {JOB_CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category} ▼
            </option>
          ))}
        </select>

        <label htmlFor="salary"
          className="mb-0 block text-base font-medium"
          >年収（万円）</label>
        <input id="salary" name="salary" type="number"
          className="h-10 w-[250px] rounded-[2px] border border-[#d7d7d7] bg-white px-[14px] text-base"
         />

        <label htmlFor="title"
          className="mb-0 block text-base font-medium"
          >求人タイトル</label>
        <input id="title" name="title" type="text"
          className="h-10 w-full rounded-[2px] border border-[#d7d7d7] bg-white px-[14px] text-base"
         />

        <button type="submit"
          className="mt-[18px] h-10 w-[250px] cursor-pointer rounded-md border-0 bg-[#3da7e3] text-[15px] font-medium leading-none text-white"
        >
          投稿
        </button>
      </form>
    </main>
  )
}
