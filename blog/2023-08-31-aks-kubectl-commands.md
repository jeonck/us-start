---
title: AKS로 쿠버네티스 시작하기 - 사용한 명령어
date: 2023-08-31
authors: [jeonck]
tags: [kubernetes, aks, azure, kubectl, devops]
---

AKS 구축 경험을 바탕으로 클러스터 생성부터 운영까지 실무에서 자주 쓰는 필수 명령어를 정리한 글입니다. kubectl·Azure CLI·k9s·stern 활용법과 namespace 설정, ingress-controller 설치, SSL 구성 방법을 포함합니다.

{/* truncate */}

## 핵심 내용

- **클러스터 관리**: az aks 명령어로 AKS 클러스터 생성·연결·스케일링
- **리소스 운영**: kubectl get/describe/logs/exec 핵심 명령어 정리
- **Namespace·Ingress**: 네임스페이스 분리 및 ingress-controller + SSL 구성
- **배포 도구**: ArgoCD GitOps 연동 및 ACR 이미지 관리
- **모니터링·디버깅**: k9s 대시보드, stern 멀티 Pod 로그 스트리밍

## 주요 기술 키워드

`kubectl` `AKS` `Azure CLI` `k9s` `stern` `ArgoCD` `ACR` `Ingress` `SSL` `Namespace`

---

전문은 SK Devocean에서 확인하실 수 있습니다.

**[→ 전체 글 읽기](https://devocean.sk.com/search/techBoardDetail.do?ID=165236)**
