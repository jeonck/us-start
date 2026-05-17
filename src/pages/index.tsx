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
  },
  {
    emoji: '🏠',
    title: '주거',
    description: '미국 집 구하기의 모든 것. 렌트 계약부터 이웃 문화까지.',
    to: '/docs/housing/overview',
    pages: ['주거 가이드 개요'],
  },
  {
    emoji: '📋',
    title: '행정',
    description: 'SSN, 운전면허, 비자 연장 등 미국 생활에 꼭 필요한 행정 절차.',
    to: '/docs/admin/overview',
    pages: ['행정 가이드 개요'],
  },
  {
    emoji: '🎓',
    title: '교육',
    description: '미국 공립·사립학교 시스템 이해. 자녀 입학부터 학군 선택까지.',
    to: '/docs/education/overview',
    pages: ['교육 가이드 개요'],
  },
  {
    emoji: '💰',
    title: '금융',
    description: '미국 은행 개설, 해외 자금 반출, 로빈후드 투자 계좌 운영 가이드.',
    to: '/docs/finance/overview',
    pages: ['금융 개요', '해외이주 자금 반출', '로빈후드 가입과 운영'],
  },
  {
    emoji: '🏌️',
    title: '골프',
    description: '오스틴 인근 골프장 총정리. 회원권 비교, 장비, 라운딩 팁.',
    to: '/docs/leisure/golf/overview',
    pages: ['골프장 안내', '회원권 비용 비교', '푸시카트 추천', '라운딩 팁'],
  },
  {
    emoji: '🍎',
    title: '맛집·생활',
    description: '오스틴 한인 맛집, 마트, 생활 편의 정보 모음.',
    to: '/docs/lifestyle/overview',
    pages: ['맛집·생활 개요'],
  },
  {
    emoji: '💹',
    title: '자본이득',
    description: '인플레이션·원화 약세 시대의 달러 자산 전략. 일등주식투자법, MSTR, 복리 분석.',
    to: '/docs/capital-gains/overview',
    pages: ['자본이득 개요', '일등주식투자법', 'MSTR 전략'],
  },
];

const relatedSites: RelatedSite[] = [
  {
    emoji: '🇺🇸',
    title: 'US Work English',
    description: '미국 직장에서 자신 있게 소통하기 위한 영어 학습 가이드.',
    href: 'https://jeonck.github.io/us-work-english/',
  },
  {
    emoji: '🔐',
    title: '정보보안 지식베이스',
    description: '정보보안 분야 기술을 체계적으로 정리한 지식 베이스.',
    href: 'https://jeonck.github.io/info-security/',
  },
  {
    emoji: '🤖',
    title: 'AI 기술관리 프레임워크',
    description: 'AI 기술관리를 5개 영역으로 체계화한 실무 프레임워크.',
    href: 'https://jeonck.github.io/ai-eng/',
  },
  {
    emoji: '🧠',
    title: '프레임워크적 사고',
    description: 'IT 전문가를 위한 구조적 IT 지식 체계 및 사고법.',
    href: 'https://jeonck.github.io/fw-thinking/',
  },
  {
    emoji: '⚙️',
    title: 'AI시대의 SW공학',
    description: 'AI가 만든 코드를 설계, 검증, 운영하는 실전 소프트웨어 공학.',
    href: 'https://jeonck.github.io/ai-sw-engineering/',
  },
  {
    emoji: '🔍',
    title: '감리업무 온보딩',
    description: '정보시스템 감리 절차 중심의 빠른 온보딩 가이드.',
    href: 'https://jeonck.github.io/it-audit-onboard/',
  },
  {
    emoji: '🎓',
    title: 'CISA',
    description: '국제정보시스템감사사 자격 취득을 위한 핵심 지식베이스.',
    href: 'https://jeonck.github.io/cisa/',
  },
  {
    emoji: '🛰️',
    title: 'CCNP-CCIE',
    description: '네트워크 전문가 자격 취득과 실무를 위한 기술 정리.',
    href: 'https://jeonck.github.io/ccnp-ccie/',
  },
];

function CategoryCard({emoji, title, description, to, pages}: CategoryItem) {
  return (
    <div className={clsx('col col--4', styles.cardCol)}>
      <Link to={to} className={styles.cardLink}>
        <div className={styles.card}>
          <div className={styles.cardEmoji}>{emoji}</div>
          <Heading as="h3" className={styles.cardTitle}>{title}</Heading>
          <p className={styles.cardDescription}>{description}</p>
          <ul className={styles.pageList}>
            {pages.map((page, i) => (
              <li key={i}>{page}</li>
            ))}
          </ul>
        </div>
      </Link>
    </div>
  );
}

function RelatedSiteCard({emoji, title, description, href}: RelatedSite) {
  return (
    <div className={clsx('col col--4', styles.cardCol)}>
      <Link href={href} className={styles.cardLink} target="_blank" rel="noopener noreferrer">
        <div className={clsx(styles.card, styles.relatedCard)}>
          <div className={styles.cardEmoji}>{emoji}</div>
          <Heading as="h3" className={styles.cardTitle}>{title}</Heading>
          <p className={styles.cardDescription}>{description}</p>
          <span className={styles.externalBadge}>외부 사이트 →</span>
        </div>
      </Link>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/capital-gains/overview">
            💹 자본이득 전략
          </Link>
          <Link className="button button--outline button--secondary button--lg" to="/docs/english/speaking">
            영어 가이드 시작 →
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="미국 생활 적응 가이드 — 영어, 주거, 행정, 금융, 자본이득, AI 기술관리">
      <HomepageHeader />
      <main>
        <section className={styles.categories}>
          <div className="container">
            <Heading as="h2" className={styles.sectionTitle}>전체 가이드</Heading>
            <div className="row">
              {categories.map((item, idx) => (
                <CategoryCard key={idx} {...item} />
              ))}
            </div>
          </div>
        </section>
        <section className={clsx(styles.categories, styles.relatedSection)}>
          <div className="container">
            <Heading as="h2" className={styles.sectionTitle}>🌿 Project Hub</Heading>
            <div className="row">
              {relatedSites.map((item, idx) => (
                <RelatedSiteCard key={idx} {...item} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
