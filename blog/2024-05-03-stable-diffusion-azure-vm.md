---
title: Stable Diffusion - Azure VM에서 AI 기반 이미지 생성의 힘
date: 2024-05-03
authors: [jeonck]
tags: [stable-diffusion, azure, docker, gpu, generative-ai, image-generation]
---

Azure VM에 Stable Diffusion을 설치해 텍스트 설명으로 사실적인 이미지를 생성하는 환경을 구축한 과정을 기록한 글입니다. Ubuntu 22.04 LTS + Docker + NVIDIA GPU 드라이버 설정을 통해 시간당 약 4,000원 비용으로 고성능 AI 이미지 생성 인프라를 운영할 수 있음을 보여줍니다.

{/* truncate */}

## 핵심 내용

- **Stable Diffusion**: 텍스트 프롬프트 기반 사실적 이미지 생성 AI 모델
- **인프라**: Azure VM (GPU 인스턴스) + Ubuntu 22.04 LTS + Docker
- **GPU 설정**: NVIDIA 드라이버 설치 및 Docker GPU 연동 구성
- **비용**: 시간당 약 4,000원으로 고성능 이미지 생성 인프라 운영
- **활용**: 로컬 GPU 없이 클라우드에서 AI 이미지 생성 환경 즉시 구축

## 주요 기술 키워드

`Stable Diffusion` `Azure VM` `Docker` `NVIDIA GPU` `Ubuntu` `AI Image Generation` `Deep Learning` `Generative AI`

---

전문은 SK Devocean에서 확인하실 수 있습니다.

**[→ 전체 글 읽기](https://devocean.sk.com/search/techBoardDetail.do?ID=165866)**
