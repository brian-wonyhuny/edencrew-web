# 이든크루 웹사이트 프로젝트 인수인계 문서
> Claude (claude.ai) → Claude Code (claude desktop) 이관
> 작성일: 2026-06-26

---

## 1. 프로젝트 개요

**클라이언트:** ㈜이든크루 (Edencrew Inc.)
**목표:** 공식 홈페이지 (edencrew.com) 리뉴얼 — 시안 제작 단계
**대표 제품:** Lucy Platform (Lucy Studio · SDK · TeamCloud · Deploy · LAMP)
**핵심 포지셔닝:** "Turn project experience into platform assets"

---

## 2. 현재 산출물 파일

| 파일 | 설명 | 상태 |
|------|------|------|
| `edencrew-home.html` | 메인 홈 (edencrew.com) 시안 | ✅ 완성 |
| `lucy-studio-v5.html` | Lucy Studio 제품 페이지 시안 | ✅ 완성 |
| `lucy-studio-screenshot.png` | Lucy Studio 실제 스크린샷 (hero에 인라인 base64 삽입됨) | ✅ |
| `anim-compare.html` | 애니메이션 3종 비교 페이지 (Wave/Morph/Orb) | 참고용 |

> **중요:** `lucy-studio-v5.html`은 스크린샷이 base64로 인라인 임베드되어 있어 단독 파일로 동작함.
> `edencrew-home.html`과 `lucy-studio-v5.html`은 서로 링크 연결되어 있음 — 같은 폴더에 두어야 함.

---

## 3. 확정된 디자인 시스템

### 컬러
```
--p:      #8361FF   /* 포인트 컬러 (퍼플) — 버튼·em·체크에만 절제 사용 */
--bg:     #080808   /* 배경 */
--bg2:    #0D0D0D   /* 카드 배경 */
--bg3:    #111111   /* 서브 카드 */
--wh:     #F0EDE8   /* 텍스트 (오프화이트) */
--mid:    rgba(240,237,232,.45)  /* 서브 텍스트 */
--dim:    rgba(240,237,232,.2)   /* 딤 텍스트 */
--bdr:    rgba(255,255,255,.06)  /* 보더 */
```

### 폰트
- **Hero H1, 섹션 제목, Final CTA:** Montserrat Black (900)
- **카드 제목:** Inter Black (900)
- **본문·설명·레이블·버튼:** Inter (400~600)

### 디자인 톤
- **참고:** qount.io — 포인트 컬러 절제, 글로우 없음
- 배지·뱃지 배경 제거 → transparent + 보더만
- box-shadow 글로우 전부 없음
- 카드 hover → 보라 배경 없이 bdr2 보더만

---

## 4. 사이트 구조 (확정)

```
edencrew.com              → 메인 홈 (edencrew-home.html)
edencrew.com/lucy-studio  → Lucy Studio 제품 페이지 (lucy-studio-v5.html)
edencrew.com/platform     → [미제작]
edencrew.com/pricing      → [미제작]
edencrew.com/resources    → [미제작]
```

### GNB (공통)
```
Lucy Studio · Platform · Pricing · Resources   |   Log in · Download Studio
```

### Footer (공통) — 5컬럼
```
[Edencrew 브랜드 + 설명 + 인증] [Lucy Studio] [Platform] [Resources] [Company]
하단 바: 소셜 아이콘 · © 2026 Edencrew Inc. · 언어 선택 · 테마 토글(다크/시스템/라이트)
Company 컬럼: About · Clients · IR · Careers · Contact
```

---

## 5. 메인 홈 (edencrew-home.html) 섹션 구성

1. **Hero** — Montserrat Black 타이틀 + 서브카피 2줄 + CTA 2개 + Morph 애니메이션 + 타이핑 효과
2. **Lucy Platform** — 3카드 (Studio/SDK+TeamCloud/Deploy+LAMP)
3. **How It Works** — 5단계 워크플로우
4. **Client Marquee** — 12개 클라이언트 자동 스크롤
5. **The Edencrew Difference** — 기존 방식 vs 이든크루 2컬럼 비교
6. **Clients** — 국내 10개 + 글로벌 3개
7. **About Edencrew** — 텍스트 + 4카드 (90.9% IT · 10+ yrs · 4 Countries · MWC 2026)
8. **Final CTA**
9. **Footer**

### Hero 애니메이션
- **Morph Lines** — Canvas로 6개 베지어 곡선이 실시간 변형 (사인 복합 함수)
- **타이핑 효과** — "Turn project experience → into → platform assets" 순서로 타이핑
- Canvas는 `.hero` section 안에 `position:absolute; z-index:0`
- 텍스트/버튼은 `.hero-content` div에 `position:relative; z-index:2`

---

## 6. Lucy Studio 페이지 (lucy-studio-v5.html) 섹션 구성

1. **Hero** — Lucy Studio 심볼 + 타이틀 + CTA 3개 (Download/Watch/Contact) + 실제 스크린샷
2. **Build with Lucy Studio** — 3카드 (Figma Import / WYSIWYG / Logic)
3. **Deploy with Lucy Studio** — 2카드 (OTA Deploy / SDUI Runtime)
4. **Platform Support** — 6개 플랫폼 배지
5. **Final CTA**
6. **Footer**

### 언어 전환
- 한국어 / English / 日本語 — `localStorage` 유지
- 기본값: English
- JS i18n 객체로 주요 텍스트 전환

### 테마 토글
- 다크(기본) / 시스템 / 라이트 — `localStorage` 유지
- CSS 변수 기반 (`body.light` 클래스 토글)

---

## 7. SVG 심볼 (인라인 적용됨)

| 위치 | 심볼 | 처리 |
|------|------|------|
| 메인 홈 NAV 로고 | 이든크루 컬러 심볼 (`#EC7425`) | 인라인 SVG |
| Lucy Studio NAV 로고 | Lucy Studio 멀티컬러 심볼 | 인라인 SVG |
| Footer 브랜드 | 이든크루 컬러 심볼 | 인라인 SVG |
| Footer 소셜 ① | Edencrew 심볼 (currentColor) | 인라인 SVG |
| Footer 소셜 ② | Lucy 심볼 (currentColor) | 인라인 SVG |

---

## 8. 클라이언트 레퍼런스

**국내:** NH투자증권 · 신한투자증권 · 한국투자증권 · 현대차증권 · DB금융투자 · LS증권 · 유안타증권 · 교보증권 · 우리투자증권
**글로벌:** SBI Securities (Japan) · NH Korindo (Indonesia) · Tara Advisors (USA)

---

## 9. 향후 작업 (미완료)

| 페이지 | 상태 | 비고 |
|--------|------|------|
| Platform 페이지 | ❌ 미제작 | Lucy Studio/SDK/TeamCloud/Deploy/LAMP + Use Cases + Industries |
| Pricing 페이지 | ❌ 미제작 | Free/Pro/Team/Enterprise (Stripe 연동) |
| Resources 페이지 | ❌ 미제작 | Docs · Blog · Changelog · Downloads |
| 노션 워크스페이스 업데이트 | ❌ 미완료 | 기획&전략 페이지에 v4 확정안 반영 필요 |
| GitHub 업로드 | ❌ 미완료 | GitHub Pages로 배포 예정 |

---

## 10. 참고 레퍼런스 사이트

| 용도 | URL |
|------|-----|
| 전체 톤 | https://qount.io |
| 제품 페이지 구조 | https://blocsapp.com/mac/ |
| GNB 패턴 | Figma, FlutterFlow, ProtoPie, Stripe |
| 애니메이션 참고 | https://withframes.com |

---

## 11. 피그마 파일

| 파일 | Key |
|------|-----|
| 이든크루 Website | `UiN5zTvEmzX6uyyXhni9zy` |
| Deck-Pipeline (사이트맵 있음) | `bkJYlYcQETwsjV5QnyKcXZ` |

---

## 12. 노션 워크스페이스 주요 페이지 ID

| 페이지 | ID |
|--------|-----|
| 메인 허브 | `3899219b-7e3c-8151-b386-ec7de5936de1` |
| 기획 & 전략 | `3899219b-7e3c-81cb-9652-c3eb0b4361a3` |
| 벤치마킹 | `3899219b-7e3c-81b4-80d1-cfa12b10bda2` |

---

## 13. 기술 스택 (개발 단계 확정 예정)

| 항목 | 선택 | 비고 |
|------|------|------|
| 프레임워크 | Next.js (App Router) | |
| 스타일 | Tailwind CSS | |
| CMS | Sanity | |
| 호스팅 | Vercel | |
| 다국어 | next-intl | 한국어/English/日本語 |
| 인증 | lucy-auth SSO (PKCE) | TeamCloud 연동 |
| 결제 | Stripe Billing | Pricing 페이지 |

---

## 14. 핵심 연락처

- **개발 담당:** 영빈 하 (bin@edencrew.com)
- **회사 대표:** 남경아
- **설립:** 2015.07.01 / 서울 영등포구 영등포로 150

---

*이 문서는 claude.ai 세션에서 자동 생성되었습니다.*
