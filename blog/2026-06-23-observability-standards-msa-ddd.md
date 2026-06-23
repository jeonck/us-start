---
title: MSA와 DDD 관점에서 바라본 운영의 Observability 표준 (Logs/Metrics/Tracing)
date: 2026-06-23
authors: [jeonck]
tags: [observability, msa, ddd, opentelemetry, microservices]
---

MSA 환경에서 "로그는 많은데 원인을 알 수 없는" 운영 복잡성을 해결하기 위해 로그·메트릭·트레이싱 3대 축을 통한 관찰 가능성(Observability)이 필수적이며, 이를 DDD의 Bounded Context 개념과 결합하여 기술 지표를 넘어 비즈니스 언어로 시스템을 투명하게 관찰하는 방법을 다룬 글입니다.

{/* truncate */}

## 핵심 내용

- **Observability의 3대 축**: 로그(Logs), 메트릭(Metrics), 분산 추적(Tracing)을 통해 시스템 내부 상태를 외부 출력만으로 추론하는 능력
- **Domain Probe 패턴**: 도메인 로직을 기술 코드로부터 분리하여 비즈니스 언어의 순수성을 유지하고 관심사를 분리
- **Bounded Context 기반 모니터링**: DDD의 도메인 경계에 맞춰 각 팀 책임 범위별 독립적 대시보드와 알림 규칙 정의
- **OpenTelemetry 표준 채택**: 벤더 종속성을 탈피하고 W3C Trace Context를 준수하여 상호 운용성 확보
- **LGTM 스택 구축**: Grafana, Loki, Tempo, Mimir을 조합하여 비용 효율적이면서도 통합성 높은 모니터링 시스템 구현

## 주요 기술 키워드

`Observability` `OpenTelemetry` `Distributed Tracing` `Structured Logging` `Bounded Context` `Domain-Driven Design` `LGTM Stack` `Trace Context Propagation` `Domain Probe Pattern`

---

전문은 외부 블로그에서 확인하실 수 있습니다.

**[→ 전체 글 읽기](https://blog.cslee.co.kr/observability-standards-in-msa-and-ddd-logs-metrics-tracing/)**
