import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

type CategoryItem = {
  emoji: string;
  title: string;
  description: string;
  to: string;
  pages: string[];
  accent: string;
};

type RelatedSite = {
  emoji: string;
  title: string;
  description: string;
  href: string;
};

const categories: CategoryItem[] = [
  {
    emoji: '🗣️',
    title: '영어',
    description: '미국 직장·일상에서 통하는 실전 영어. 면접 표현부터 필수 구동사까지.',
    to: '/docs/english/speaking',
    pages: ['영어 면접 가이드', '필수 구동사 사전'],
    accent: '#3b82f6',
  },
  {
    emoji: '🏠',
    title: '주거',
    description: '미국 집 구하기의 모든 것. 렌트 계약부터 이웃 문화까지.',
    to: '/docs/housing/overview',
    pages: ['주거 가이드 개요'],
    accent: '#f59e0b',
  },
  {
    emoji: '📋',
    title: '행정',
    description: 'SSN, 운전면허, 비자 연장 등 미국 생활에 꼭 필요한 행정 절차.',
    to: '/docs/admin/overview',
    pages: ['행정 가이드 개요'],
    accent: '#8b5cf6',
  },
  {
    emoji: '🎓',
    title: '교육',
    description: '미국 공립·사립학교 시스템 이해. 자녀 입학부터 학군 선택까지.',
    to: '/docs/education/overview',
    pages: ['교육 가이드 개요'],
    accent: '#ec4899',
  },
  {
    emoji: '💰',
    title: '금융',
    description: '미국 은행 개설, 해외 자금 반출, 로빈후드 투자 계좌 운영 가이드.',
    to: '/docs/finance/overview',
    pages: ['금융 개요', '해외이주 자금 반출', '로빈후드 가입과 운영'],
    accent: '#10b981',
  },
  {
    emoji: '🏌️',
    title: '골프',
    description: '오스틴 인근 골프장 총정리. 회원권 비교, 장비, 라운딩 팁.',
    to: '/docs/leisure/golf/overview',
    pages: ['골프장 안내', '회원권 비용 비교', '푸시카트 추천', '라운딩 팁'],
    accent: '#06b6d4',
  },
  {
    emoji: '🍎',
    title: '맛집·생활',
    description: '오스틴 한인 맛집, 마트, 생활 편의 정보 모음.',
    to: '/docs/lifestyle/overview',
    pages: ['맛집·생활 개요'],
    accent: '#f97316',
  },
  {
    emoji: '💹',
    title: '자본이득',
    description: '인플레이션·원화 약세 시대의 달러 자산 전략. 일등주식투자법, MSTR, 복리 분석.',
    to: '/docs/capital-gains/overview',
    pages: ['자본이득 개요', '일등주식투자법', 'MSTR 전략'],
    accent: '#14b8a6',
  },
];

const relatedSites: RelatedSite[] = [
  {emoji: '🤖', title: 'AI Eng', description: 'AI 기술관리를 5개 영역으로 체계화한 실무 프레임워크.', href: 'https://jeonck.github.io/ai-eng/'},
  {emoji: '⚙️', title: 'AI시대의 SW공학', description: 'AI가 만든 코드를 설계, 검증, 운영하는 실전 소프트웨어 공학.', href: 'https://jeonck.github.io/ai-sw-engineering/'},
  {emoji: '🛡️', title: 'AI 보안', description: 'AI 시스템과 서비스를 위협으로부터 지키는 보안 지식과 실무.', href: 'https://jeonck.github.io/ai-security/'},
  {emoji: '🕹️', title: 'AI agent 실무', description: 'AI 에이전트를 설계하고 운영하는 실전 노하우 모음.', href: 'https://jeonck.github.io/ai-agent/'},
  {emoji: '🔐', title: '정보보안 지식베이스', description: '정보보안 분야 기술을 체계적으로 정리한 지식 베이스.', href: 'https://jeonck.github.io/info-security/'},
  {emoji: '🧠', title: '프레임워크적 사고', description: 'IT 전문가를 위한 구조적 IT 지식 체계 및 사고법.', href: 'https://jeonck.github.io/fw-thinking/'},
  {emoji: '🔍', title: '감리업무 온보딩', description: '정보시스템 감리 절차 중심의 빠른 온보딩 가이드.', href: 'https://jeonck.github.io/it-audit-onboard/'},
  {emoji: '🎓', title: 'CISA', description: '국제정보시스템감사사 자격 취득을 위한 핵심 지식베이스.', href: 'https://jeonck.github.io/cisa/'},
  {emoji: '🛰️', title: 'CCNP-CCIE', description: '네트워크 전문가 자격 취득과 실무를 위한 기술 정리.', href: 'https://jeonck.github.io/ccnp-ccie/'},
  {emoji: '🇺🇸', title: 'US Work English', description: '미국 직장에서 자신 있게 소통하기 위한 영어 학습 가이드.', href: 'https://jeonck.github.io/us-work-english/'},
  {emoji: '🖥️', title: '정보시스템 기술사', description: '정보시스템 기술사 시험 대비를 위한 체계적인 지식베이스.', href: 'https://jeonck.github.io/itpe-KM/'},
  {emoji: '💻', title: '코딩 저널', description: '코딩을 익히기 위해 예시와 함께 배워나가는 개발 학습 블로그.', href: 'https://jeonck.github.io/coding-journal/'},
  {emoji: '👂', title: 'Heard & Kept', description: '들은 표현을 줍고, 다시 써보고, 기록으로 남기는 생존형 영어 습득 로드맵.', href: 'https://jeonck.github.io/heard-and-kept/'},
  {emoji: '☸️', title: 'Kubernetes 실무 가이드', description: '쿠버네티스를 MECE로 정리한 4계층 12카테고리 실무 지식베이스.', href: 'https://jeonck.github.io/k8s-km/'},
  {emoji: '☁️', title: 'AWS 솔루션 아키텍트', description: '3~6개월 실무형 Hands-on으로 완성하는 AWS Solutions Architect Professional.', href: 'https://jeonck.github.io/aws-sol-archi-prof/'},
  {emoji: '🚀', title: 'DevOps Professional', description: '13개 역량과 4단계 성숙도로 증명하는 DevOps 전문가 실무 플레이북.', href: 'https://jeonck.github.io/devops-professional/'},
  {emoji: '📊', title: 'ISP & IT 컨설팅', description: '정보전략계획(ISP)과 EA·클라우드 전략을 다루는 IT 컨설팅 실무 가이드.', href: 'https://jeonck.github.io/isp-it-consulting/'},
];

const stats = [
  {label: '콘텐츠 카테고리', value: '8'},
  {label: '연계 프로젝트', value: '17'},
  {label: '미국 정착 가이드', value: '4'},
  {label: '자산 & 라이프', value: '4'},
];

function CategoryCard({emoji, title, description, to, pages, accent}: CategoryItem) {
  return (
    <Link to={to} className={styles.cardLink}>
      <div className={styles.card} style={{'--card-accent': accent} as React.CSSProperties}>
        <div className={styles.cardAccentBar} />
        <div className={styles.cardHeader}>
          <span className={styles.cardEmoji}>{emoji}</span>
          <h3 className={styles.cardTitle}>{title}</h3>
        </div>
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.pageChips}>
          {pages.slice(0, 3).map((page, i) => (
            <span key={i} className={styles.chip}>{page}</span>
          ))}
          {pages.length > 3 && <span className={styles.chip}>+{pages.length - 3}</span>}
        </div>
        <span className={styles.cardArrow}>→</span>
      </div>
    </Link>
  );
}

function HubCard({emoji, title, description, href}: RelatedSite) {
  return (
    <Link href={href} className={styles.cardLink} target="_blank" rel="noopener noreferrer">
      <div className={clsx(styles.card, styles.hubCard)}>
        <div className={styles.hubEmoji}>{emoji}</div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <span className={styles.externalLink}>↗ 바로가기</span>
      </div>
    </Link>
  );
}

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroGlow} />
      <div className="container" style={{position: 'relative', zIndex: 1}}>
        <div className={styles.heroTag}>🌿 The Knowledge Hub for Growth</div>
        <Heading as="h1" className={styles.heroTitle}>
          Project-U
        </Heading>
        <p className={styles.heroSubtitle}>
          미국 정착 실무부터 미래를 설계하는 기술 프로젝트까지,<br />
          성장을 위한 모든 지식을 연결합니다.
        </p>
        <div className={styles.heroButtons}>
          <a className={styles.btnPrimary} href="#project-hub">
            🚀 Project Hub 탐색
          </a>
          <a className={styles.btnOutline} href="#settling-in">
            🇺🇸 US Life Guide
          </a>
        </div>
      </div>
    </header>
  );
}

function StatsBar() {
  return (
    <div className={styles.statsBar}>
      <div className="container">
        <div className={styles.statsGrid}>
          {stats.map((stat, i) => (
            <div key={i} className={styles.statItem}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const settlingIn = categories.slice(0, 4);
  const assetsAndLife = categories.slice(4);

  return (
    <Layout title={siteConfig.title} description="미국 생활 적응 가이드 — 영어, 주거, 행정, 금융, 자본이득">
      <HomepageHeader />
      <StatsBar />
      <main className={styles.main}>
        <section id="project-hub" className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionBadge}>Knowledge Network</span>
              <Heading as="h2" className={styles.sectionTitle}>🌿 Project Hub</Heading>
              <p className={styles.sectionSubtitle}>성장을 위한 연계 지식 프로젝트</p>
            </div>
            <div className={styles.cardGrid}>
              {relatedSites.map((item, idx) => (
                <HubCard key={idx} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section id="settling-in" className={clsx(styles.section, styles.sectionAlt)}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionBadge}>Life Guide</span>
              <Heading as="h2" className={styles.sectionTitle}>🇺🇸 미국 정착</Heading>
              <p className={styles.sectionSubtitle}>영어부터 교육까지, 미국 생활 필수 가이드</p>
            </div>
            <div className={styles.cardGrid}>
              {settlingIn.map((item, idx) => (
                <CategoryCard key={idx} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section id="assets-life" className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionBadge}>Wealth & Lifestyle</span>
              <Heading as="h2" className={styles.sectionTitle}>📈 자산 & 라이프</Heading>
              <p className={styles.sectionSubtitle}>금융 전략부터 여가까지, 풍요로운 미국 생활</p>
            </div>
            <div className={styles.cardGrid}>
              {assetsAndLife.map((item, idx) => (
                <CategoryCard key={idx} {...item} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
