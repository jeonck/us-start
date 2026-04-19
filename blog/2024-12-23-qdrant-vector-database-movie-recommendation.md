---
title: 영화 추천 여정으로 이해하는 Qdrant 벡터 데이터베이스
date: 2024-12-23
authors: [jeonck]
tags: [vector-database, qdrant, similarity-search, ai, recommendation]
---

벡터 데이터베이스 Qdrant를 영화 추천 시스템 사례로 쉽게 풀어낸 글입니다. Collection·Point 개념부터 Upsert, Similarity Search, Hybrid Search, Scroll까지 CRUD 개념과 실제 API 예시를 통해 벡터 DB의 핵심 기능을 설명합니다.

{/* truncate */}

## 핵심 내용

- **데이터 구조**: Collection(테이블)과 Point(레코드)로 벡터 데이터 저장
- **Upsert**: 영화 벡터 데이터 추가 및 수정
- **Similarity Search**: Dense Vector 기반 유사 영화 검색 (HNSW 알고리즘)
- **Hybrid Search**: Dense + Sparse(BM25) 벡터 결합으로 검색 정확도 향상
- **Scroll**: 대규모 데이터셋 페이지네이션 처리

## 주요 기술 키워드

`Qdrant` `Vector Database` `Similarity Search` `Hybrid Search` `HNSW` `Dense Vector` `Sparse Vector` `BM25` `Recommendation System`

---

전문은 SK Devocean에서 확인하실 수 있습니다.

**[→ 전체 글 읽기](https://devocean.sk.com/search/techBoardDetail.do?ID=166910)**
