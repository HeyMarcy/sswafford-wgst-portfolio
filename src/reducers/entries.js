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
          title: 'TBD',
          image: 'http://unsplash.com/photos/VGOiY1gZZYg/download',
          tint: '#e74c3c',
          open: false
        },
        {
          id: 2,
          title: 'TBD',
          image: 'http://unsplash.com/photos/VGOiY1gZZYg/download',
          tint: '#2ecc71',
          open: false
        },
        {
          id: 4,
          title: 'TBD',
          image: 'http://unsplash.com/photos/VGOiY1gZZYg/download',
          tint: '#e67e22',
          open: false
        },
        {
          id: 5,
          title: 'TBD',
          image: 'http://unsplash.com/photos/VGOiY1gZZYg/download',
          tint: '#8e44ad',
          open: false
        },
        {
          id: 6,
          title: 'TBD',
          image: 'http://unsplash.com/photos/VGOiY1gZZYg/download',
          tint: '#f1c40f',
          open: false
        },
        {
          id: 10,
          title: 'TBD',
          image: 'http://unsplash.com/photos/VGOiY1gZZYg/download',
          tint: '#3498db',
          open: false
        }
      ];
    }
  }
}
