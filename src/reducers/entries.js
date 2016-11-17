export default function (state, action) {
  switch (action.type) {
    case 'OPEN_ENTRY': {
      return state.map(entry => {
        const open = (action.payload === entry.id);
        return { ...entry, open };
      });
    }
    case 'CLOSE_ENTRY': {
      return state.map(entry => {
        return { ...entry, open: false };
      });
    }
    default: {
      return state || [
        {
          id: 1,
          title: 'Cake Carrot Cake Sesame',
          image: 'https://images.unsplash.com/uploads/14128324071271c853818/3765c625?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=d73b6f1d71a80b88e047b5bb835653a0',
          tint: '#e74c3c',
          open: false
        },
        {
          id: 2,
          title: 'Dragée Toffee Gummi Bears',
          image: 'https://images.unsplash.com/uploads/14128324071271c853818/3765c625?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=d73b6f1d71a80b88e047b5bb835653a0',
          tint: '#2ecc71',
          open: false
        },
        {
          id: 4,
          title: 'Lemon Drops Tart Toffee',
          image: 'https://images.unsplash.com/uploads/14128324071271c853818/3765c625?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=d73b6f1d71a80b88e047b5bb835653a0',
          tint: '#e67e22',
          open: false
        },
        {
          id: 5,
          title: 'Wafer Fruitcake Macaroon Sesame Snaps',
          image: 'https://images.unsplash.com/uploads/14128324071271c853818/3765c625?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=d73b6f1d71a80b88e047b5bb835653a0',
          tint: '#8e44ad',
          open: false
        },
        {
          id: 6,
          title: 'Cotton Candy Tootsie Roll Pie',
          image: 'https://images.unsplash.com/uploads/14128324071271c853818/3765c625?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=d73b6f1d71a80b88e047b5bb835653a0',
          tint: '#f1c40f',
          open: false
        },
        {
          id: 10,
          title: 'Dessert Toffee Bear Claw Biscuit',
          image: 'https://images.unsplash.com/uploads/14128324071271c853818/3765c625?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=d73b6f1d71a80b88e047b5bb835653a0',
          tint: '#3498db',
          open: false
        }
      ];
    }
  }
}
