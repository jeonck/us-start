---
title: KVM GPU 패스스루 구축
date: 2025-06-10
authors: [jeonck]
tags: [kvm, gpu, virtualization, linux, on-premise, devops]
---

가상 머신이 물리적 GPU에 직접 접근할 수 있는 KVM GPU 패스스루 기술을 소개하는 글입니다. IOMMU 활성화, VFIO-PCI 바인딩, VM 설정의 3단계 구축 절차를 통해 온프레미스 환경에서 개발자들이 GPU 자원을 공유하는 렌더링 개발 환경을 구축하는 실무 가이드입니다.

{/* truncate */}

## 핵심 내용

- **GPU 패스스루란**: VM이 하이퍼바이저를 거치지 않고 물리 GPU에 직접 접근하는 기술
- **1단계 - 하드웨어 설정**: BIOS에서 IOMMU(VT-d/AMD-Vi) 활성화
- **2단계 - 드라이버 바인딩**: VFIO-PCI 드라이버로 GPU 바인딩 및 검증
- **3단계 - VM 설정**: virt-manager에서 PCI 장치 추가 및 구성
- **활용**: 온프레미스 GPU 서버 자원을 개발팀이 VM 단위로 공유

## 주요 기술 키워드

`KVM` `GPU Passthrough` `VFIO-PCI` `IOMMU` `virt-manager` `Virtualization` `Linux` `On-premise`

---

전문은 SK Devocean에서 확인하실 수 있습니다.

**[→ 전체 글 읽기](https://devocean.sk.com/search/techBoardDetail.do?ID=167502)**
