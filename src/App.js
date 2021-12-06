import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Nav from './components/common/Nav'
import Home from './components/common/Home'
import CharacterIndex from './components/fscharacters/CharacterIndex'
import CharacterShow from './components/fscharacters/CharacterShow'
import EpisodeIndex from './components/fsepisodes/EpisodeIndex'
import QuoteIndex from './components/fsquotes/QuotesIndex'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path ="/character/:characterId">
          <CharacterShow />
        </Route>
        <Route path="/character">
          <CharacterIndex />
        </Route>
        <Route path="/episode">
          <EpisodeIndex />
        </Route>
        <Route path="/quote">
          <QuoteIndex />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
