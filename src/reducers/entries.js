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
          title: 'Journal One',
          image: 'http://unsplash.com/photos/ndN00KmbJ1c/download',
          tint: '#2ecc71',
          open: false
        },
        {
          id: 2,
          title: 'Another Long Journal',
          image: 'http://unsplash.com/photos/b2PEDKfnyfY/download',
          tint: '#e74c3c',
          open: false
        },
        {
          id: 4,
          title: 'Example',
          image: 'http://unsplash.com/photos/VGOiY1gZZYg/download',
          tint: '#3498db',
          open: false
        }
      ];
    }
  }
}
