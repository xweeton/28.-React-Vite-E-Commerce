function Header({ headerLogo }) {
  return (
    <>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-6 col-md-4 text-md-center">
          <img src={headerLogo} height="40px" />
        </div>
        <div className="col-6 col-md-4 d-flex justify-content-end">
          <a href="#" className="icon d-flex">
            <i className="fa-regular fa-user fa-2xl ps-2 pe-1 pt-2"></i>
            <a className="d-none d-xl-block link-underline link-underline-opacity-0 link-underline-opacity-100-hover link-dark">
              Sign in
            </a>
          </a>
          <a href="#" className="icon d-flex">
            <i className="fa-regular fa-heart fa-2xl ps-2 pe-1 pt-2"></i>
            <a className="d-none d-xl-block link-underline link-underline-opacity-0 link-underline-opacity-100-hover link-dark">
              Favorites
            </a>
          </a>
          <a href="#" className="icon d-flex">
            <i className="fa-solid fa-bag-shopping fa-2xl ps-2 pe-1 pt-2"></i>
            <a className="d-none d-xl-block link-underline link-underline-opacity-0 link-underline-opacity-100-hover link-dark">
              Shopping Cart
            </a>
          </a>
        </div>
      </div>

      <div className="row mt-3 text-center ms-4">
        <a
          href="#"
          className="col-12 col-md-6 link-underline link-underline-opacity-0 link-underline-opacity-100-hover link-dark"
        >
          Faster delivery | Easy digital returns
        </a>
        <a
          href="#"
          className="d-none d-md-block col-md-6 link-underline link-underline-opacity-0 link-underline-opacity-100-hover link-dark ps-5"
        >
          Download our app
        </a>
      </div>
    </>
  );
}

export default Header;
