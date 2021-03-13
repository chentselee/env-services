import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useService } from "src/services";
import { Layout } from "src/layout";

const Routes = () => {
  const { features } = useService();
  return (
    <>
      {features
        .flatMap((feature) => feature.pages)
        .map((page) => (
          <Route key={page.route} exact path={page.route}>
            {page.layout ? (
              <page.layout>{page.component}</page.layout>
            ) : (
              <Layout>{page.component}</Layout>
            )}
          </Route>
        ))}
    </>
  );
};

export const RouterProvider = () => {
  return (
    <Router>
      <Switch>
        <Routes />
      </Switch>
    </Router>
  );
};
