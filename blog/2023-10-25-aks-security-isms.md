---
title: AKS로 쿠버네티스 시작하기 - 보안성
date: 2023-10-25
authors: [jeonck]
tags: [kubernetes, aks, azure, security, isms, rbac, devops]
---

VM 기반 인프라를 AKS로 전환하면서 ISMS 요건을 충족하기 위해 적용한 보안 대책을 다룬 글입니다. 클러스터 접근제어(RBAC), Public LoadBalancer 통제, ACR 보호, 네트워크 세그멘테이션, 버전 업그레이드, 보안 모니터링을 단계별로 구현한 실무 사례입니다.

{/* truncate */}

## 핵심 내용

- **RBAC**: 클러스터 역할 기반 접근 제어로 최소 권한 원칙 적용
- **NSG 설정**: Public LoadBalancer IP 접근 통제로 외부 노출 최소화
- **ACR 보호**: Azure Container Registry 이미지 접근 권한 관리
- **네트워크 세그멘테이션**: 워크로드 간 네트워크 격리 구성
- **보안 모니터링**: OpsNow360을 활용한 이상 징후 탐지

## 주요 기술 키워드

`Kubernetes` `AKS` `RBAC` `NSG` `ACR` `ISMS` `ISO/IEC 27017` `Network Segmentation` `Azure` `Security Monitoring`

---

전문은 SK Devocean에서 확인하실 수 있습니다.

**[→ 전체 글 읽기](https://devocean.sk.com/search/techBoardDetail.do?ID=165241)**
