import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  englishSidebar: [
    {
      type: 'category',
      label: '🗣️ 영어',
      collapsed: false,
      items: [
        'english/speaking',
        'english/phrasal-verbs',
        'english/free-classes',
      ],
    },
  ],

  housingSidebar: [
    {
      type: 'category',
      label: '🏠 주거',
      collapsed: false,
      items: ['housing/overview'],
    },
  ],

  adminSidebar: [
    {
      type: 'category',
      label: '📋 행정',
      collapsed: false,
      items: ['admin/overview'],
    },
  ],

  educationSidebar: [
    {
      type: 'category',
      label: '🎓 교육',
      collapsed: false,
      items: [
        'education/overview',
        {
          type: 'category',
          label: '🎬 Grade 8 역사 미디어',
          collapsed: true,
          link: {type: 'doc', id: 'education/grade8-history-media'},
          items: [
            'education/media/presidents',
            'education/media/history-shorts',
            'education/media/american-experience',
            'education/media/story-of-us',
            'education/media/national-treasure',
            'education/media/remember-the-titans',
            'education/media/too-late-to-apologize',
            'education/media/hamilton-cabinet-battles',
            'education/media/future-fright',
          ],
        },
      ],
    },
  ],

  financeSidebar: [
    {
      type: 'category',
      label: '💰 금융',
      collapsed: false,
      items: [
        'finance/overview',
        'finance/overseas-asset-transfer',
        'finance/robinhood',
      ],
    },
  ],

  leisureSidebar: [
    {
      type: 'category',
      label: '🏌️ 골프',
      collapsed: false,
      items: [
        'leisure/golf/overview',
        'leisure/golf/gear',
        'leisure/golf/membership',
        'leisure/golf/tips',
      ],
    },
  ],

  lifestyleSidebar: [
    {
      type: 'category',
      label: '🍎 맛집/생활',
      collapsed: false,
      items: ['lifestyle/overview'],
    },
  ],

  capitalGainsSidebar: [
    {
      type: 'category',
      label: '💹 자본이득',
      collapsed: false,
      items: [
        'capital-gains/overview',
        'capital-gains/method',
        'capital-gains/mstr',
      ],
    },
  ],
};

export default sidebars;
