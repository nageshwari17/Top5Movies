import React from 'react';

const OrderSelect = (props) => {
  const { select, setOrder } = props;
  return (
    <div className="row">
      <div className="col s12 order-select">
        <div className="col s12 m6 l4">
          <select onChange={(e) => { console.log(e.target.value); setOrder(e.target.value); } } data-testid="sortBox">
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
