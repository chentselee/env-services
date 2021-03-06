import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { useAuth } from "src/auth";
import { DefaultLayout } from "src/layouts";
import { useService } from "src/services";
import { match } from "ts-pattern";

const NoMatch = () => {
  return <div>Not found.</div>;
};

export const RouterProvider = () => {
  const { features } = useService();
  const { authStatus } = useAuth();
  return (
    <Router>
      <Switch>
        {features
          .flatMap((feature) => feature.pages)
          .map((page) =>
            page.protected ? (
              match(authStatus)
                .with("authorized", () => (
                  <Route key={page.route} exact path={page.route}>
                    {page.layout ? (
                      <page.layout>{page.component}</page.layout>
                    ) : (
                      <DefaultLayout>{page.component}</DefaultLayout>
                    )}
                  </Route>
                ))
                .otherwise(() => <Redirect key={page.route} to="/login" />)
            ) : (
              <Route key={page.route} exact path={page.route}>
                {page.layout ? (
                  <page.layout>{page.component}</page.layout>
                ) : (
                  <DefaultLayout>{page.component}</DefaultLayout>
                )}
              </Route>
            )
          )}
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
};
