export default function (state, action) {
  switch (action.type) {
    case 'OPEN_ENTRY': {
      return state.map(entry => {
        const open = (action.payload == entry.id);
        return { ...entry, open };
      });
    }
    case 'CLOSE_ENTRY': {
      return state.map(entry => {
        return { ...entry, open: false };
      });
    }
    case 'EXPOSE_ENTRY': {
      return state.map(entry => {
        return { ...entry, hidden: !(entry.id == action.payload) };
      });
    }
    case 'LOAD_JOURNAL': {
      return state.map(entry => {
        if (action.payload.id === entry.id) {
          return { ...entry, body: action.payload.content };
        }
        return { ...entry };
      });
    }
    default: {
      return state || [
        {
          id: 1,
          title: 'I am a Feminist',
          image: require('../assets/backgrounds/nqsunxinsp4-alex-harvey.jpg'),
          tint: '#000',
        },
        {
          id: 2,
          title: 'Feminist in History: Mary Daly',
          image: require('../assets/backgrounds/urgyjacxvai-judson-moore.jpg'),
          tint: '#000',
        },
        {
          id: 4,
          title: 'Contemporary Feminist',
          image: require('../assets/backgrounds/wjj3xp5z_vw-dorne-marting.jpg'),
          tint: '#000',
        },
        {
          id: 5,
          title: 'Intro to Manifesta',
          image: require('../assets/backgrounds/25joi4xc-du-roksolana-zasiadko.jpg'),
          tint: '#000',
        },
        {
          id: 6,
          title: 'What Is Feminism?',
          image: require('../assets/backgrounds/yxpivqyqcp0-alice-achterhof.jpg'),
          tint: '#000',
        },
        {
          id: 9,
          title: 'Mentor Role',
          image: require('../assets/backgrounds/2qs7wbere3c-sean-mcauliffe.jpg'),
          tint: '#000',
        },
        {
          id: 10,
          title: 'Valenti Group Comments',
          image: require('../assets/backgrounds/y32jfpfk0do-alisa-anton.jpg'),
          tint: '#000',
        },
        {
          id: 12,
          title: 'Beauty Cult',
          image: require('../assets/backgrounds/jx7ndtafbcu-steinar-la-engeland.jpg'),
          tint: '#000',
        },
        {
          id: 15,
          title: 'Dove Workshop',
          image: require('../assets/backgrounds/4wz1ysanfb0-annie-spratt.jpg'),
          tint: '#000',
        },
        {
          id: 100,
          title: 'This I Believe',
          image: require('../assets/backgrounds/bo5bswjwgui-dana-critchlow.jpg'),
          tint: '#000',
          hidden: true
        },
        {
          id: 101,
          title: 'Outspoken Reflection',
          image: require('../assets/backgrounds/ziceedwwh0o-andy-chilton.jpg'),
          tint: '#000',
          hidden: true
        },
        {
          id: 102,
          title: 'Reflection',
          image: require('../assets/backgrounds/zwcuf5ptim4-annie-spratt.jpg'),
          tint: '#000',
          hidden: true
        }
      ];
    }
  }
}
