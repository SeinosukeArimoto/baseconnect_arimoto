'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function createJobAction(formData: FormData) {
  const category = formData.get('category')
  const salary = formData.get('salary')
  const title = formData.get('title')

  if (!category || !salary || !title) {
    throw new Error('未入力の項目があります')
  }

  const supabase = await createClient()

  const result = await supabase.from('jobs').insert({
    category: String(category),
    salary: Number(salary),
    title: String(title),
  })

  if (result.error) {
    throw new Error(result.error.message)
  }

  revalidatePath('/')
  redirect('/')
}
