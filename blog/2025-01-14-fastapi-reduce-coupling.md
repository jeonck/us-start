---
title: FastAPI 프로젝트의 결합도 낮추기 전략
date: 2025-01-14
authors: [jeonck]
tags: [fastapi, python, architecture, microservice, design-pattern]
---

FastAPI 웹 애플리케이션에서 service 구현 그룹(비즈니스 로직)과 router 구현 그룹(API 통신)으로 파일을 분리해 결합도를 낮추는 아키텍처 전략을 소개합니다. Entity-DTO-Repository-Service 패턴과 구체적인 파일 구조로 유지보수성·재사용성·테스트 용이성을 높입니다.

{/* truncate */}

## 핵심 내용

- **핵심 원칙**: 비즈니스 로직(Service)과 API 통신(Router) 완전 분리
- **파일 구조**: Entity → DTO → Repository → Service → Router 레이어 구성
- **결합도/응집도**: 낮은 결합도·높은 응집도를 달성하는 모듈 설계
- **비동기 처리**: FastAPI 비동기 패턴 적용으로 성능 최적화
- **효과**: 코드 재사용성, 테스트 용이성, 유지보수성 향상

## 주요 기술 키워드

`FastAPI` `Python` `Software Architecture` `Coupling` `Cohesion` `Microservice` `Entity-DTO-Repository-Service` `Async`

---

전문은 SK Devocean에서 확인하실 수 있습니다.

**[→ 전체 글 읽기](https://devocean.sk.com/search/techBoardDetail.do?ID=166993)**
