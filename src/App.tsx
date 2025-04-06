import { useState, useEffect } from "react"
import { Toaster } from "sonner"
import AppRoutes from "./router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import './index.css'
import { Spin } from "antd"
import { LoadingOutlined } from "@ant-design/icons"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
})

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500); 
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-right" richColors closeButton />
      <AppRoutes />
    </QueryClientProvider>
  )
}

export default App
