---
title: AKS로 쿠버네티스 시작하기 - 구축 통합본
date: 2023-08-09
authors: [jeonck]
tags: [kubernetes, aks, azure, ci-cd, argocd, gitlab, devops]
---

VM 기반 인프라를 AKS 쿠버네티스로 전환한 전체 구축 과정을 담은 통합 가이드입니다. Azure 인프라 구성 → CI 구축 → CD 구축 → 데이터 마이그레이션 → 도메인 절체까지 전 단계를 거쳐 스테이징 환경을 수 시간 내에 론칭한 실전 사례입니다.

{/* truncate */}

## 핵심 내용

- **인프라 구성**: AKS 클러스터, ACR, Azure 네트워크 설정
- **CI 구축**: GitLab-Runner를 통한 자동 빌드·이미지 푸시 파이프라인
- **CD 구축**: ArgoCD GitOps 기반 자동 배포 연동
- **데이터 마이그레이션**: 기존 VM DB를 K8s 환경으로 이전
- **도메인 절체**: 무중단 트래픽 전환으로 서비스 전환 완료
- **성과**: 팀 전체 K8s 실무 역량 습득, 스테이징 환경 수 시간 내 완성

## 주요 기술 키워드

`AKS` `Kubernetes` `GitLab-Runner` `ArgoCD` `ACR` `CI/CD` `Azure` `DevOps` `Data Migration` `Domain Cutover`

---

전문은 SK Devocean에서 확인하실 수 있습니다.

**[→ 전체 글 읽기](https://devocean.sk.com/search/techBoardDetail.do?ID=165170)**
