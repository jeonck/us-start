---
title: AKS로 쿠버네티스 시작하기 - kubectl plugin
date: 2024-01-31
authors: [jeonck]
tags: [kubernetes, kubectl, aks, azure, krew, devops]
---

kubectl의 플러그인 아키텍처와 krew 패키지 매니저를 소개하고, 실무에서 유용한 플러그인(kubectx, k9s, octant, kubectl-tree, stern)의 사용법을 환경 준비·클러스터 관리·로깅 모니터링 측면으로 나눠 구체적으로 설명합니다.

{/* truncate */}

## 핵심 내용

- **krew**: kubectl 플러그인 패키지 매니저로 손쉬운 설치·관리
- **kubectx / kubens**: 클러스터·네임스페이스 컨텍스트 빠른 전환
- **k9s**: 터미널 기반 Kubernetes 리소스 대시보드
- **kubectl-tree**: 리소스 오너십 트리 시각화
- **stern**: 다중 Pod 로그 실시간 스트리밍

## 주요 기술 키워드

`kubectl` `krew` `k9s` `kubectx` `stern` `Kubernetes` `AKS` `Azure` `Plugin` `Cluster Management`

---

전문은 SK Devocean에서 확인하실 수 있습니다.

**[→ 전체 글 읽기](https://devocean.sk.com/search/techBoardDetail.do?ID=165287)**
