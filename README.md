# From Harness to Knowledge

C-level audience를 위한 30분 발표 자료입니다. 원본은 Slidev 문법으로 작성되어 있으며,
`docs/`에는 외부 네트워크나 npm 설치 없이 실행되는 정적 버전을 함께 보관합니다.

## Commands

```bash
npm run dev             # Slidev authoring server (npm install 필요)
npm run build           # air-gapped 정적 사이트를 docs/에 생성
npm run build:slidev    # Slidev 자체 번들 검증
npm run export          # release/presentation.pdf 생성 (Chromium 필요)
npm run verify:offline  # 외부 리소스와 누락 파일 검사
```

정적 사이트는 `docs/index.html`을 직접 열거나 `/docs`를 GitHub Pages 원본으로 지정해
사용합니다. 키보드 `←/→`, `Space`, `Home`, `End`와 화면 버튼을 지원합니다.

회사 사례의 구체 수치가 확보되면 7–9쪽의 `Observed` 근거를 검증된 `Measured`로
교체하십시오. 검증되지 않은 수치는 의도적으로 넣지 않았습니다.
