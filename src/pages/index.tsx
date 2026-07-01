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

type HubGroup = {
  badge: string;
  title: string;
  sites: RelatedSite[];
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

const hubGroups: HubGroup[] = [
  {
    badge: 'Platform & Infrastructure Strategy',
    title: '플랫폼 · 인프라 전략',
    sites: [
      {emoji: '🚀', title: 'DevOps & SRE Strategy', description: '13개 역량 지표와 성숙도 모델을 기반으로 한 클라우드 네이티브 플랫폼 운영 표준.', href: 'https://jeonck.github.io/devops-professional/'},
      {emoji: '☸️', title: 'Kubernetes Control Plane Architecture', description: 'MECE 원칙에 기반한 4계층·12카테고리 시스템 아키텍처 및 운영 프레임워크.', href: 'https://jeonck.github.io/k8s-km/'},
      {emoji: '⚓', title: 'Kubernetes Advanced Engineering', description: 'PKI 인증서·Operator·Observability까지 다루는 엔터프라이즈 쿠버네티스 심화 운영 엔지니어링.', href: 'https://jeonck.github.io/k8s-adv/'},
      {emoji: '☁️', title: 'AWS Cloud Solutions Architecture', description: '대규모 엔터프라이즈 환경을 위한 고가용성 아키텍처 설계 및 프로페셔널 구현 가이드.', href: 'https://jeonck.github.io/aws-sol-archi-prof/'},
      {emoji: '🏗️', title: 'Terraform Infrastructure as Code', description: '클릭 운영에서 코드 운영으로 — IaC 기반 인프라 자동화 및 정책·컴플라이언스 표준화.', href: 'https://jeonck.github.io/terraform-onboard/'},
    ],
  },
  {
    badge: 'Governance, Audit & Security',
    title: '거버넌스 · 감사 · 보안',
    sites: [
      {emoji: '🛡️', title: 'AI Governance & Security', description: 'AI 시스템의 신뢰성 확보를 위한 보안 설계 프레임워크 및 위협 대응 전략.', href: 'https://jeonck.github.io/ai-security/'},
      {emoji: '🎓', title: 'CISA Certification & Professional Audit', description: '국제 표준 기반의 IT 감사 수행 역량 및 정보시스템 통제 솔루션.', href: 'https://jeonck.github.io/cisa/'},
      {emoji: '🔍', title: 'IT Audit & Governance', description: '정보시스템 감리 절차의 표준화 및 규제 준수(Compliance)를 위한 전략 가이드.', href: 'https://jeonck.github.io/it-audit-onboard/'},
      {emoji: '🔐', title: 'Information Security Knowledge Base', description: '전사적 보안 거버넌스 수립을 위한 핵심 기술 지식 체계 및 리스크 관리.', href: 'https://jeonck.github.io/info-security/'},
    ],
  },
  {
    badge: 'Software Engineering & AI Architecture',
    title: '소프트웨어 공학 · AI 아키텍처',
    sites: [
      {emoji: '🕹️', title: 'AI Agent System Design', description: '복잡한 비즈니스 로직을 자동화하는 자율형 AI 에이전트 설계 및 운영 노하우.', href: 'https://jeonck.github.io/ai-agent/'},
      {emoji: '⚙️', title: 'AI-Driven Software Engineering', description: 'AI 생성 코드의 설계·검증 및 시스템 운영 자동화를 위한 신뢰성 엔지니어링.', href: 'https://jeonck.github.io/ai-sw-engineering/'},
      {emoji: '🤖', title: 'AI Engineering Framework', description: 'AI 기술 도입을 위한 5단계 실무 통합 관리 프레임워크.', href: 'https://jeonck.github.io/ai-eng/'},
      {emoji: '🧠', title: 'Structural Thinking & IT Frameworks', description: 'IT 전문가를 위한 복잡성 관리 및 구조적 IT 전략 수립 사고법.', href: 'https://jeonck.github.io/fw-thinking/'},
    ],
  },
  {
    badge: 'Domain Expertise & Certification',
    title: '전문 기술 · 자격',
    sites: [
      {emoji: '📊', title: 'Enterprise Architecture (ISP/IT Consulting)', description: '전략적 IT 로드맵 수립 및 엔터프라이즈 아키텍처(EA) 전환 컨설팅 가이드.', href: 'https://jeonck.github.io/isp-it-consulting/'},
      {emoji: '🖥️', title: 'Professional Engineer (PE) Knowledge Base', description: '대한민국 정보시스템 기술사 자격 기반의 시스템 설계 및 기술 의사결정 가이드.', href: 'https://jeonck.github.io/itpe-KM/'},
      {emoji: '🛰️', title: 'Enterprise Network Engineering (CCNP/CCIE)', description: '글로벌 표준 기반의 네트워크 인프라 설계 및 트러블슈팅 전문가 역량.', href: 'https://jeonck.github.io/ccnp-ccie/'},
      {emoji: '📈', title: 'Performance & Load Engineering', description: 'JMeter·Scouter 기반의 대규모 부하 테스트 및 시스템 성능 병목 분석 엔지니어링.', href: 'https://jeonck.github.io/jmeter-onboard/'},
      {emoji: '💻', title: 'Platform Engineering Coding Journal', description: '플랫폼 안정성 및 효율성 증대를 위한 실전 엔지니어링 기록.', href: 'https://jeonck.github.io/coding-journal/'},
    ],
  },
];

const stats = [
  {label: '기술 포트폴리오', value: '18'},
  {label: '전문 도메인', value: '4'},
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
              <span className={styles.sectionBadge}>Engineering Excellence & Strategy</span>
              <Heading as="h2" className={styles.sectionTitle}>🌿 Project Hub</Heading>
              <p className={styles.sectionSubtitle}>상위 직무(Director/Architect) 공략을 위한 통합 기술 포트폴리오</p>
            </div>
            {hubGroups.map((group, gIdx) => (
              <div key={gIdx} className={styles.hubGroup}>
                <div className={styles.hubGroupHeader}>
                  <span className={styles.hubGroupIndex}>{String(gIdx + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className={styles.hubGroupTitle}>{group.title}</h3>
                    <span className={styles.hubGroupBadge}>{group.badge}</span>
                  </div>
                </div>
                <div className={styles.cardGrid}>
                  {group.sites.map((item, idx) => (
                    <HubCard key={idx} {...item} />
                  ))}
                </div>
              </div>
            ))}
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
