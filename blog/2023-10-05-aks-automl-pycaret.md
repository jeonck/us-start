---
title: AKS usecase - AutoML 'pycaret'
date: 2023-10-05
authors: [jeonck]
tags: [kubernetes, aks, azure, python, automl, machine-learning]
---

엔드투엔드 ML 워크플로우를 자동화하는 AutoML 도구 pycaret을 AKS에 배포하는 방법을 소개합니다. Docker 이미지와 kubectl로 Namespace·PVC·Deployment·Service를 구성하고, `setup()·compare_models()·tune_model()` 함수로 모델 개발과 최적화를 자동화하는 샘플 코드를 제공합니다.

{/* truncate */}

## 핵심 내용

- **pycaret**: 몇 줄의 코드로 여러 ML 모델을 비교·최적화하는 AutoML 라이브러리
- **AKS 배포**: Namespace, PVC, Deployment, Service YAML 구성 및 kubectl 배포
- **핵심 함수**: `setup()` 데이터 준비 → `compare_models()` 모델 비교 → `tune_model()` 하이퍼파라미터 최적화
- **활용**: 데이터 사이언티스트 없이도 ML 파이프라인을 K8s 환경에서 운영

## 주요 기술 키워드

`pycaret` `AutoML` `AKS` `Kubernetes` `Docker` `Python` `Machine Learning` `Azure` `PVC`

---

전문은 SK Devocean에서 확인하실 수 있습니다.

**[→ 전체 글 읽기](https://devocean.sk.com/search/techBoardDetail.do?ID=165238)**
