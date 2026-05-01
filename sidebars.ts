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
      items: ['education/overview'],
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
};

export default sidebars;
