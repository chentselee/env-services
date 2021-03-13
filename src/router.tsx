import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useService } from "src/services";
import { DefaultLayout } from "src/layouts";

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
              <DefaultLayout>{page.component}</DefaultLayout>
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
