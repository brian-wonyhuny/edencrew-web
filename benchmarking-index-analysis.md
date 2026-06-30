# 인덱스 페이지 벤치마킹 분석
> 2026-06-26 누리 작성 | 월요일 이어서 작업

## 작업 배경
- 아리(Gemini)가 Notion에 30개 사이트 전체 분석 완료 → `3899219b7e3c81b480d1cfa12b10bda2`
- 아리: 사이트별(세로) 분석 / 누리: 섹션별(가로) 분석 담당
- 코딩 전 페이지 구성 기획이 우선 — 섹션 확정 후 작업

---

## 인덱스 페이지 섹션 흐름 분석

### FlutterFlow
```
① GNB
② Hero — "Build Better. Launch Faster." + Start for Free
③ Trust — GM·Google·Amazon·IBM·Microsoft 로고 마퀴
④ Feature — "Build UI & logic visually" (3카드)
⑤ Feature — "Customize everything"
⑥ Feature — "Connect your app to data"
⑦ Feature — "Collaborate seamlessly"
⑧ Feature — "Build once, deploy everywhere"
⑨ Feature — "Own your code"
⑩ Showcase — Made with FlutterFlow
⑪ Social Proof — "Our customers love us"
⑫ Resources — "We'll help you get started"
⑬ Bottom CTA — "Join over 3.3M users" + Start for Free
⑭ Footer
```

### ProtoPie
```
① GNB
② Hero — "#1 advanced prototyping tool" + Get started + TRY DEMO
③ Platform — 지원 플랫폼 나열 (Automotive·Web·Mobile·TV·Smartwatch·Game)
④ Social Proof — 고객 인용문 5개 (Meta·Warner Bros 등)
⑤ Features — 6가지 핵심 기능
⑥ Comparison — vs Framer·Adobe XD·Figma
⑦ Resources — School·Community·Blog
⑧ Gallery — 실제 프로토타입 갤러리
⑨ Bottom CTA — "100% free"
⑩ Footer
```

### Blocs
```
① GNB
② Hero — 플랫폼별 CTA 3개 (Mac/iPad/iPhone)
③ Learn / Connect / Develop — 생태계 진입점 3단
④ Footer
```

### Linear
```
① GNB
② Hero — 제품 UI 대형 스크린샷 + Download + Open in browser
③ Features — 속도·이슈트래킹·로드맵
④ Speed proof — 애니메이션으로 속도 직접 증명
⑤ Bottom CTA
⑥ Footer
```

### Raycast
```
① GNB
② Hero — "Your shortcut to everything." + Download for Mac (단일)
③ Features — Extensions 생태계
④ Social Proof
⑤ Bottom CTA
⑥ Footer
```

### Vercel
```
① GNB
② Hero — 빌드 로그 애니메이션 + Start Deploying + Get a Demo
③ Trust — 기업 로고
④ Features — Deploy·Scale·Observe
⑤ Metrics — 속도·가용성 수치
⑥ Bottom CTA
⑦ Footer
```

### Stripe
```
① GNB
② Hero — 애니메이션 제품 UI + Start now
③ Trust — 대형 기업 로고 마퀴
④ Products — 제품군 소개
⑤ Code snippet — 4줄로 복잡한 걸 단순하게
⑥ Social Proof
⑦ Metrics
⑧ Bottom CTA
⑨ Footer
```

### Ramp
```
① GNB
② Hero — "Time is money. Save both." + 실제 대시보드 + 절감액 수치
③ Trust — 고객사 로고
④ Features
⑤ Social Proof + 절감 수치
⑥ Metrics — 고객수·절감액 규모
⑦ Bottom CTA
⑧ Footer
```

### Mercury
```
① GNB
② Hero — "Banking built for startups." + 실제 대시보드 프리뷰
③ Trust — FDIC 배지 + 고객사
④ Features
⑤ Social Proof — 창업자 인용문
⑥ Bottom CTA
⑦ Footer
```

### Intercom
```
① GNB
② Hero — 두 제품 분리 소개 (방문자 경로 선택 유도)
③ Trust — 고객사 로고
④ Features
⑤ Social Proof
⑥ Metrics — 해결률·만족도
⑦ Bottom CTA — Start free trial / View demo
⑧ Footer
```

### Figma
```
① GNB
② Hero — "Design, prototype, and build" + 협업 실제 화면
③ Trust
④ Products — Figma·FigJam·Dev Mode·Slides (복수 제품 통합)
⑤ Features
⑥ Social Proof
⑦ Bottom CTA
⑧ Footer
```

### Mendix
```
① GNB
② Hero — 수상·인증 배지 상단 + Start for Free + Talk to Sales
③ Trust — 엔터프라이즈 로고
④ Features
⑤ Industries — 금융·공공·제조 솔루션
⑥ Social Proof
⑦ Bottom CTA
⑧ Footer
```

---

## 공통 섹션 순서 패턴

```
GNB
└─ Hero
└─ Trust (로고 마퀴 or 배지)
└─ Features (3~6개 섹션)
└─ Social Proof (인용문 or 리뷰)
└─ Showcase / Metrics (선택)
└─ Resources (선택)
└─ Bottom CTA
└─ Footer
```

---

## 다음 작업 (월요일)
- [ ] 섹션별 심층 비교 계속 (Hero 카피 패턴, Feature 구성 방식, Social Proof 배치 등)
- [ ] edencrew.com 인덱스 섹션 구성 확정
- [ ] 확정 후 → edencrew-home.html 리뉴얼 or 신규 제작
