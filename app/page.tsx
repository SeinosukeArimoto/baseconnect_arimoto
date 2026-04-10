'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'

type Instrument = {
  id: number
  name: string
}

export default function Page() {
  const [items, setItems] = useState<Instrument[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      const supabase = createClient()

      const { data, error } = await supabase
        .from('instruments')
        .select('id, name')
        .order('id')

      if (error) {
        console.error(error)
      } else {
        setItems(data ?? [])
      }

      setLoading(false)
    }

    load()
  }, [])

  return (
    <main style={{ padding: 24 }}>
      <h1>baseconnect_arimoto</h1>
      <p>Supabase 接続テスト</p>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </main>
  )
}