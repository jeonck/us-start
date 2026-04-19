---
title: XRDP로 헤드리스 GPU 서버에 원격 GUI 접속하기
date: 2025-07-21
authors: [jeonck]
tags: [linux, ubuntu, xrdp, gpu, devops, remote-desktop]
---

온프레미스 GPU 서버가 헤드리스로 운영될 때, XRDP를 설치해 Mac의 Windows App으로 원격 GUI에 접속하는 방법을 다룬 글입니다. Ubuntu에 XRDP와 XFCE 데스크톱 환경을 구성하면 그래픽 애플리케이션 관리와 디버깅이 가능해집니다.

{/* truncate */}

## 핵심 내용

- **문제 상황**: 헤드리스 GPU 서버에서 GUI 기반 툴 실행이 필요한 경우
- **해결책**: Ubuntu에 XRDP + XFCE 데스크톱 환경 설치
- **접속 방법**: Mac의 Windows App(Microsoft Remote Desktop)으로 RDP 연결
- **방화벽 설정**: UFW를 통한 RDP 포트(3389) 개방 구성
- **활용**: 원격에서 GPU 가속 그래픽 애플리케이션 관리 및 디버깅

## 주요 기술 키워드

`XRDP` `Ubuntu` `XFCE` `RDP` `GPU Server` `Headless` `Remote Desktop` `UFW` `Linux`

---

전문은 SK Devocean에서 확인하실 수 있습니다.

**[→ 전체 글 읽기](https://devocean.sk.com/search/techBoardDetail.do?ID=167621)**
