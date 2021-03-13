import React from "react";
import { useService } from "src/services";
import { Link } from "react-router-dom";

const Nav = () => {
  const { features } = useService();
  return (
    <nav>
      {features.flatMap((feature) =>
        feature.pages.map((page) => (
          <Link key={page.route} to={page.route}>
            {page.name}
          </Link>
        ))
      )}
    </nav>
  );
};

export default Nav;
