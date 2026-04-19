---
title: AKS usecase - K8s로 VM 제공하기 'KubeVirt'
date: 2023-07-04
authors: [jeonck]
tags: [kubernetes, aks, azure, kubevirt, virtualization, devops]
---

쿠버네티스 클러스터 위에 가상화 레이어를 제공하는 오픈소스 KubeVirt를 AKS에 설치하고 VM을 생성·관리하는 방법을 소개합니다. kubevirt operator와 CR 설치 후 VM YAML 파일로 가상머신을 K8s 리소스처럼 관리할 수 있어 리소스 공유 효율성과 확장성이 크게 향상됩니다.

{/* truncate */}

## 핵심 내용

- **KubeVirt란**: K8s 클러스터에서 VM을 Pod처럼 생성·관리하는 오픈소스 가상화 레이어
- **설치**: kubevirt operator + Custom Resource(CR) AKS 설치 절차
- **VM 생성**: VM YAML 파일로 가상머신을 쿠버네티스 리소스로 선언적 관리
- **리소스 공유**: 컨테이너와 VM이 동일 클러스터에서 자원 공유로 효율 향상
- **활용**: IaC 기반 VM 프로비저닝, ArgoCD GitOps 연동 배포

## 주요 기술 키워드

`KubeVirt` `AKS` `Kubernetes` `Virtualization` `Azure` `ArgoCD` `IaC` `VM` `Docker`

---

전문은 SK Devocean에서 확인하실 수 있습니다.

**[→ 전체 글 읽기](https://devocean.sk.com/search/techBoardDetail.do?ID=165086)**
