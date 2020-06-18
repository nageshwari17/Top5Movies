import React from "react";

const OrderSelect = (props) => {
  const { select, setOrder } = props;
  const handleChange = (e) => {
    setOrder(e.target.value);
  };
  return (
    <div className="row">
      <div className="col s12 order-select">
        <div className="col s12  m4 l4">
          <select onChange={handleChange}>
            <option value="">Sort By</option>
            {select &&
              select.items.map((item) => {
                return (
                  <option value={item.valueToOrderBy} key={item.valueToOrderBy}>
                    {item.label}
                  </option>
                );
              })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default OrderSelect;
