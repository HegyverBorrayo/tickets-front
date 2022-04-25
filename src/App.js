import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'context/SessionContext'
import LoginPage from 'pages/LoginPage'
import queryClient from 'queryClient'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <SessionProvider>
          <Router>
            <Routes>
              <Route path='/' element={<LoginPage />}></Route>
            </Routes>
          </Router>
        </SessionProvider>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
