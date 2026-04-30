import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import NewJobPage from './NewJobPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <header className="bg-[#26384d] text-white">
        <div className="mx-auto flex items-center justify-between px-4 py-[14px]">
          <h1 className="m-0 text-4xl font-bold">求人検索アプリ</h1>

          <nav>
            <ul className="m-0 flex list-none gap-7 p-0 text-base font-semibold">
              <li>
                <Link to="/" className="text-white no-underline">
                  求人検索
                </Link>
              </li>
              <li>
                <Link to="/jobs/new" className="text-white no-underline">
                  求人投稿
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/jobs/new" element={<NewJobPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
