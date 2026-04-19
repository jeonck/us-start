---
title: AKS usecase - DevOps GitLab CI + ArgoCD
date: 2024-01-15
authors: [jeonck]
tags: [aks, azure, gitlab, argocd, ci-cd, devops, gitops]
---

AKS 환경에서 GitLab CI와 ArgoCD를 연동해 소스 커밋부터 ACR 이미지 업로드·자동 배포까지 전 과정을 자동화한 완전 자동화 CI/CD 파이프라인 구축 사례입니다. 개발자가 배포 걱정 없이 개발에 전념할 수 있게 되었고 새로운 인프라 제공이 단 2일 만에 가능해졌습니다.

{/* truncate */}

## 핵심 내용

- **파이프라인 구성**: GitLab CI → Docker 빌드(Jib/Maven) → ACR 푸시 → ArgoCD 자동 배포
- **GitOps**: ArgoCD가 Git 저장소 상태를 감지해 AKS에 자동 동기화
- **Helm 차트**: 환경별 배포 설정을 Helm으로 관리
- **생산성**: 인프라 프로비저닝 기간 수 주 → 2일로 단축
- **효과**: 개발자 배포 부담 제거, 빠른 피드백 루프 실현

## 주요 기술 키워드

`AKS` `GitLab CI` `ArgoCD` `GitOps` `Docker` `Jib` `Maven` `Helm` `Azure Container Registry` `DevOps`

---

전문은 SK Devocean에서 확인하실 수 있습니다.

**[→ 전체 글 읽기](https://devocean.sk.com/search/techBoardDetail.do?ID=165388)**
