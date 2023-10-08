function Items({
  itemsTitle,
  itemsImg1,
  itemsName1,
  itemsPrice1,
  itemsImg2,
  itemsName2,
  itemsPrice2,
  itemsImg3,
  itemsName3,
  itemsPrice3,
  itemsImg4,
  itemsName4,
  itemsPrice4,
}) {
  return (
    <>
      <h5 className="text-start mt-3">{itemsTitle}</h5>

      <div className="row">
        <div className="col-xl-3 col-6">
          <a href="#">
            <img src={itemsImg1} className="img-item" />
          </a>
          <a
            href="#"
            className="d-block text-start link-underline link-underline-opacity-0 link-underline-opacity-100-hover link-dark mb-0"
          >
            {itemsName1}
          </a>
          <p className="text-start">{itemsPrice1}</p>
        </div>
        <div className="col-xl-3 col-6">
          <a href="#">
            <img src={itemsImg2} className="img-item" />
          </a>
          <a
            href="#"
            className="d-block text-start link-underline link-underline-opacity-0 link-underline-opacity-100-hover link-dark mb-0"
          >
            {itemsName2}
          </a>
          <p className="text-start">{itemsPrice2}</p>
        </div>
        <div className="d-none d-xl-block col-xl-3">
          <a href="#">
            <img src={itemsImg3} className="img-item" />
          </a>
          <a
            href="#"
            className="d-block text-start link-underline link-underline-opacity-0 link-underline-opacity-100-hover link-dark mb-0"
          >
            {itemsName3}
          </a>
          <p className="text-start">{itemsPrice3}</p>
        </div>
        <div className="d-none d-xl-block col-xl-3">
          <a href="#">
            <img src={itemsImg4} className="img-item" />
          </a>
          <a
            href="#"
            className="d-block text-start link-underline link-underline-opacity-0 link-underline-opacity-100-hover link-dark mb-0"
          >
            {itemsName4}
          </a>
          <p className="text-start">{itemsPrice4}</p>
        </div>
      </div>
    </>
  );
}

export default Items;
