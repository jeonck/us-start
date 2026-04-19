---
title: AKS usecase - 신속한 MySQL 개발환경
date: 2023-11-09
authors: [jeonck]
tags: [kubernetes, aks, azure, mysql, argocd, helm, devops]
---

AKS에서 ArgoCD + Helm으로 Bitnami MySQL 차트를 배포해 개발자용 MySQL 환경을 분 단위로 빠르게 구성하는 방법을 소개합니다. 기존 클라우드 리소스 할당 프로세스의 비효율을 개선하고 IP 기반 접근 제어로 보안도 함께 확보합니다.

{/* truncate */}

## 핵심 내용

- **문제**: 기존 클라우드 DB 할당 프로세스 수십 분 이상 소요
- **해결**: ArgoCD + Helm(Bitnami MySQL 차트)으로 분 단위 환경 제공
- **보안**: IP 기반 접근 제어로 개발 환경 외부 노출 차단
- **비용**: 사용 후 즉시 삭제 가능한 경량 개발 DB 환경
- **효과**: 개발자 대기 시간 제거, 신속한 개발·테스트 사이클 실현

## 주요 기술 키워드

`AKS` `MySQL` `ArgoCD` `Helm` `Bitnami` `Kubernetes` `Azure` `DevOps` `IP Access Control`

---

전문은 SK Devocean에서 확인하실 수 있습니다.

**[→ 전체 글 읽기](https://devocean.sk.com/search/techBoardDetail.do?ID=165182)**
