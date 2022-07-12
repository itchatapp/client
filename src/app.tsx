import Router, { Route } from 'preact-router';
import { App as Home, About, Login, Register, NotFound } from './pages'

export function App() {
  return (
    <Router>
      <Route path="/" component={Home}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/register" component={Register}></Route>
      <Route path="/about" component={About} />
      <Route default component={NotFound} />
    </Router>
  )
}
