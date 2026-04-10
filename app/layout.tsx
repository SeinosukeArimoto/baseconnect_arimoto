export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <header>共通ヘッダーです</header>
        {children}
      </body>
    </html>
  )
}