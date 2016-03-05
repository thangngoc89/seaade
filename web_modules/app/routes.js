import React from "react"
import { Route } from "react-router"
import PageContainer from "statinamic/lib/PageContainer"
// Layouts
import LayoutContainer from "../LayoutContainer"
import Homepage from "../layouts/Homepage"
import Speakers from "../layouts/Speakers"

// routes
export default (
  <Route component={ LayoutContainer }>
    <Route path="/" component={ Homepage } />
    <Route path="/speakers" component={ Speakers } />
    <Route path="*" component={ PageContainer } />
  </Route>
)
