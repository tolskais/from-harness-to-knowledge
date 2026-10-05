# 필드 결함 기반 개발 점검 Agent

임베디드 소프트웨어 개발을 위한 한 장 HTML 발표 자료입니다. 약 1분 발표를 기준으로 구성했습니다.

이전 세대 제품에서 결함 이력과 결함 발생 버전의 요구사항·설계·코드·수정 diff·시험 자료를 연결해 분석하고, 공통 패턴과 지식을 정리합니다.
수정 내용에 따라 결함 유형을 분류하고, 결함이 드러난 실행 조건을 정리합니다. 설계·코드·시험을 대조해 원인을 검토합니다.
다음 제품을 개발할 때, 이전 세대에서 축적한 지식과 다음 제품의 개발 자료를 대조합니다. 요구사항 명세서·추적성표·설계서·FMEA·소스 코드·단위시험·시험 명세서·회귀시험 세트의 보완안을 제안하는 흐름입니다.

## 자료

- `release/presentation.html`: 공유용 단일 HTML 파일. 별도 설치나 외부 네트워크 없이 브라우저에서 열 수 있습니다.
- `docs/index.html`: 같은 자료의 정적 사이트 진입점
- `slides.md`: Slidev 원본
- `release/overview.png`: 전체 그림 미리보기

## 명령

```bash
npm run build           # 정적 HTML과 공유용 단일 HTML 생성
npm run export          # 동일한 HTML 생성
npm run preview         # 브라우저 레이아웃 확인과 미리보기 생성
npm run verify:offline  # 외부 리소스 의존성 및 한 장 구성 확인
npm run dev             # Slidev 편집 서버
npm run build:slidev    # Slidev 번들 생성
```
