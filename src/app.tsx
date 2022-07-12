import Router, { Route } from 'preact-router';
import { App as Home, About, Error, NotFound } from './pages'

export function App() {
  return (
    <Router>
      <Route path="/" component={Home}></Route>
      <Route path="/about" component={About} />
      <Route default component={NotFound} />
    </Router>
  )
}
