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
          title: 'No Title',
          image: 'https://images.unsplash.com/uploads/14128324071271c853818/3765c625?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=d73b6f1d71a80b88e047b5bb835653a0',
          tint: '#e74c3c',
        },
        {
          id: 2,
          title: 'Feminist in History: Mary Daly',
          image: 'https://images.unsplash.com/uploads/14128324071271c853818/3765c625?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=d73b6f1d71a80b88e047b5bb835653a0',
          tint: '#2ecc71',
        },
        {
          id: 4,
          title: 'Contemporary Feminist',
          image: 'https://images.unsplash.com/uploads/14128324071271c853818/3765c625?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=d73b6f1d71a80b88e047b5bb835653a0',
          tint: '#e67e22',
        },
        {
          id: 5,
          title: 'Intro to Manifesta',
          image: 'https://images.unsplash.com/uploads/14128324071271c853818/3765c625?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=d73b6f1d71a80b88e047b5bb835653a0',
          tint: '#8e44ad',
        },
        {
          id: 6,
          title: 'What Is Feminism?',
          image: 'https://images.unsplash.com/uploads/14128324071271c853818/3765c625?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=d73b6f1d71a80b88e047b5bb835653a0',
          tint: '#f1c40f',
        },
        {
          id: 10,
          title: 'No Title',
          image: 'https://images.unsplash.com/uploads/14128324071271c853818/3765c625?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=d73b6f1d71a80b88e047b5bb835653a0',
          tint: '#3498db',
        }
      ];
    }
  }
}
