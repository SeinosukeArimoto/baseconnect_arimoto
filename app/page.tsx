import JobsSearchClient from "./jobs-search-client";
import { createClient } from "@/utils/supabase/server";
import type { Job } from "@/lib/jobs/types";

export default async function Page(){
  const supabase = await createClient()

  const result = await supabase
    .from('jobs')
    .select('id, title, category, salary')
    .order('id', { ascending: true })

  if (result.error) {
    console.error('求人の取得に失敗しました', result.error)
  }

  const jobs: Job[] = result.data ?? []

  return <JobsSearchClient initialJobs={jobs} />

}
