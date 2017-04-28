const React = require('react');

const handleChange = (filter, updateFilter) => (
  e => updateFilter(filter, e.currentTarget.value)
);

const FilterForm = ({ accept_cc, accept_phone_orders, delivers, updateFilter }) => (
  <div>
    <h1>
      Filter trucks:
    </h1>
    <button>
      Accepts Credit Card?
    </button>

    <button>
      Accepts Phone Orders?
    </button>

    <button>
      Delivers?
    </button>

  </div>
)
