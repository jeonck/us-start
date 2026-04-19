---
title: Jenkins를 활용한 스프링부트 앱 CI/CD 쉽게 시작하기
date: 2022-05-09
authors: [jeonck]
tags: [jenkins, spring-boot, ci-cd, azure, gradle, devops]
---

Azure VM 환경에서 Jenkins로 GitHub 소스 가져오기 → Gradle 빌드 → SSH 배포 → 서비스 기동까지 전 과정을 자동화하는 Spring Boot CI/CD 파이프라인 구축 방법을 단계별로 설명합니다.

{/* truncate */}

## 핵심 내용

- **파이프라인 구성**: GitHub → Jenkins → Gradle 빌드 → SSH 배포 → 서비스 기동
- **빌드**: Gradle로 Spring Boot JAR 파일 자동 생성
- **배포**: SSH를 통한 Azure VM 원격 배포 자동화
- **서비스 기동**: 원격 스크립트 실행으로 애플리케이션 자동 재시작
- **효과**: 수동 배포 제거, 빠른 피드백 루프 실현

## 주요 기술 키워드

`Jenkins` `Spring Boot` `Gradle` `Azure VM` `SSH` `GitHub` `Java` `CI/CD` `Automation`

---

전문은 SK Devocean에서 확인하실 수 있습니다.

**[→ 전체 글 읽기](https://devocean.sk.com/search/techBoardDetail.do?ID=163889)**
