import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import LoginPage from './pages/LoginPage.tsx'
import ContentManager from './pages/ContentManager.tsx'
import ContentDetail from './pages/ContentDetail.tsx'
import ResultVisualize from './pages/ResultVisualize.tsx'

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/result',
		element: <ResultVisualize />,
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/content-manage',
		element: <ContentManager />,
	},
	{
		path: '/content',
		element: <ContentDetail />,
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={appRouter} />
	</React.StrictMode>,
)
