export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <header>勉強中</header>
        {children}
      </body>
    </html>
  )
}