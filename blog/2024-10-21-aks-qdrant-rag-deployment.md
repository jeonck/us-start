---
title: AKS에 Qdrant 배포하기 - 쉽게 시작하는 Qdrant와 RAG 개발 환경
date: 2024-10-21
authors: [jeonck]
tags: [qdrant, kubernetes, aks, azure, rag, vector-database]
---

Azure Kubernetes Service(AKS)에 벡터 데이터베이스 Qdrant를 빠르게 배포하는 방법을 소개합니다. 네임스페이스·PVC·Ingress 단계별 설정과 운영 중 타임아웃 문제 해결 팁까지 포함한 RAG 개발 환경 구축 실전 가이드입니다.

{/* truncate */}

## 핵심 내용

- **Qdrant on AKS**: HNSW 알고리즘 기반 빠른 벡터 검색 + K8s 확장성 결합
- **배포 구성**: Namespace, PVC(영구 스토리지), Service, Ingress 단계별 설정
- **RAG 환경**: Retrieval-Augmented Generation 개발 환경을 간편하게 구축
- **트러블슈팅**: 운영 중 발생한 Ingress 타임아웃 문제와 annotation 해결책
- **활용**: 생성형 AI 서비스에 외부 지식 검색 기능 연동

## 주요 기술 키워드

`Qdrant` `AKS` `Azure` `Kubernetes` `RAG` `Vector Database` `HNSW` `Ingress` `PVC`

---

전문은 SK Devocean에서 확인하실 수 있습니다.

**[→ 전체 글 읽기](https://devocean.sk.com/search/techBoardDetail.do?ID=166879)**
