import Link from 'next/link'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="m-0 bg-white font-sans">
        <header className="bg-[#26384d] text-white">
          <div className="mx-auto flex items-center justify-between px-4 py-[14px]">
            <h1 className="m-0 text-4xl font-bold">求人検索アプリ</h1>
          
            <nav>
              <ul className="m-0 flex list-none gap-7 p-0 text-base font-semibold">
                <li>
                  <Link href="/" className="text-white no-underline">
                    求人検索
                  </Link>
                </li>
                <li>
                  <Link href="/jobs/new" className="text-white no-underline">
                    求人を投稿
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        
        {children}
      </body>
    </html>
  )
}