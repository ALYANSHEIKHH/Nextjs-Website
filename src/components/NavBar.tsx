import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <nav className="flex w-fit mx-auto gap-10 font-medium py-4 text-blackish" aria-label="Main Navigation">
          <Link className="navbar__link relative" href="/" aria-label="Home">
            HOME
          </Link>
          <Link className="navbar__link relative" href="/categories" aria-label="Categories">
            CATEGORIES
          </Link>
          <Link className="navbar__link relative" href="/mens" aria-label="Mens">
            MENS
          </Link>
          <Link className="navbar__link relative" href="/womens" aria-label="Womens">
            WOMENS
          </Link>
          <Link className="navbar__link relative" href="/jewelery" aria-label="Jewelery">
            JEWELERY
          </Link>
          <Link className="navbar__link relative" href="/perfume" aria-label="Perfume">
            PERFUME
          </Link>
          <Link className="navbar__link relative" href="/blog" aria-label="Blog">
            BLOG
          </Link>
          <Link className="navbar__link relative" href="/hot-offers" aria-label="Hot Offers">
            HOT OFFERS
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
