---
title: AKS 운용관리 - 직접 만들어 본 툴 aks-resourcemanager
date: 2024-04-11
authors: [jeonck]
tags: [kubernetes, aks, azure, streamlit, python, devops]
---

Streamlit을 활용해 AKS 리소스(Pod, Deployment, Service 등)를 웹 기반으로 조회하고 다중 컨텍스트를 쉽게 전환할 수 있는 관리 도구를 직접 개발한 과정을 담은 글입니다. Docker 컨테이너화로 배포 환경 제약 없이 실무에서 즉시 활용 가능합니다.

{/* truncate */}

## 핵심 내용

- **배경**: kubectl 명령어 반복 사용의 불편함을 웹 UI로 해결
- **기술 스택**: Python + Streamlit + kubectl + Docker
- **주요 기능**: Pod·Deployment·Service 조회, 다중 클러스터 컨텍스트 전환
- **배포**: Docker 컨테이너화로 어느 환경에서나 즉시 실행
- **효과**: AKS 리소스 현황 파악 시간 단축, 운영 편의성 향상

## 주요 기술 키워드

`AKS` `Kubernetes` `Streamlit` `Python` `kubectl` `Docker` `Azure` `Resource Management`

---

전문은 SK Devocean에서 확인하실 수 있습니다.

**[→ 전체 글 읽기](https://devocean.sk.com/search/techBoardDetail.do?ID=165697)**
