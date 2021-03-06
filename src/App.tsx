import React, { useEffect, useState } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Axios from "axios";
import { HomePage } from "./pages/home/HomePage";
import { ContactsPage } from "./pages/contacts/ContactsPage";
import { CatalogPage } from "./pages/catalog/CatalogPage";
import { AnimatedHamburger, Item } from "./shared/AnimatedHamburger";

export const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    Axios.get<Item[]>('http://localhost:3001/configRoutes')
        .then(res => {
          setItems(res.data)
        })
  }, []);

  return (
      <div>
        <BrowserRouter>
          <AnimatedHamburger items={items} />
          <Switch>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/contacts">
              <ContactsPage />
            </Route>
            <Route path="/catalog">
              <CatalogPage />
            </Route>
          </Switch>
        </BrowserRouter>

        {/*<pre style={{paddingTop: 250, fontSize: 20}}>
        {`<AnimatedHamburger items={items} iconClick={goto} />`}
      </pre>*/}
      </div>
  )
};

export default App;