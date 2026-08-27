---
theme: default
title: From Harness to Knowledge
info: C-level briefing · 30 minutes + Q&A
drawings:
  persist: false
transition: none
mdc: true
layout: deck
chapter: '01'
section: Agent Memory의 변화
page: 01 / 19
---

<div class="eyebrow">Knowledge-based Agent</div>
<h1>From Harness to Knowledge</h1>
<p class="lead">실행할 수 있는 Agent에서, 경험을 축적하고 다시 쓰는 Agent로</p>
<div class="cycle" style="margin-top:42px">Execute&nbsp;&nbsp; → &nbsp;&nbsp;Learn&nbsp;&nbsp; → &nbsp;&nbsp;Reuse</div>

---
layout: deck
chapter: '01'
section: Agent Memory의 변화
page: 02 / 19
---

<div class="eyebrow">Today’s route</div>
<h2>오늘 이야기할 네 단계</h2>
<div class="agenda">
  <div class="agenda-row"><b>01</b><strong>Agent Memory의 변화</strong><span>검색에서 지식 축적으로</span></div>
  <div class="agenda-row"><b>02</b><strong>우리가 확인한 것</strong><span>Harness의 효과와 남은 손실</span></div>
  <div class="agenda-row"><b>03</b><strong>의미</strong><span>Knowledge의 달라진 비용 구조</span></div>
  <div class="agenda-row"><b>04</b><strong>다음 단계</strong><span>Harness + Knowledge</span></div>
</div>

---
layout: deck
chapter: '01'
section: Agent Memory의 변화
page: 03 / 19
---

<div class="eyebrow">From feature to infrastructure</div>
<h2>기업들은 Agent의 장기 기억을 제품 기능으로 만들고 있다</h2>
<div class="timeline">
  <div class="moment"><b>2025.07</b><strong>Google Memory Bank</strong><p class="muted">세션에서 장기 기억을 생성·검색하는 관리형 서비스 공개</p></div>
  <div class="moment"><b>2025.10</b><strong>AWS AgentCore Memory</strong><p class="muted">추출·통합·검색 전략을 갖춘 장기 기억 서비스 GA</p></div>
  <div class="moment"><b>2026.01</b><strong>GitHub Copilot Memory</strong><p class="muted">저장소 지식을 Agent 간 공유하고 사용 전 코드로 재검증</p></div>
  <div class="moment now"><b>공통 과제</b><strong>무엇을 믿고 남길 것인가</strong><p class="muted">범위·검증·만료·권한이 제품 설계의 일부가 됨</p></div>
</div>
<div class="process-band">
  <p class="tiny"><strong>세 제품에서 공통적으로 나타나는 구조</strong></p>
  <div class="flow">
    <div class="step"><strong>Events</strong>대화·도구 사용·업무 결과</div><div class="arrow">→</div>
    <div class="step"><strong>Extract</strong>남길 사실·선호·경험 선택</div><div class="arrow">→</div>
    <div class="step"><strong>Scope & Store</strong>사용자·세션·저장소별 보관</div><div class="arrow">→</div>
    <div class="step"><strong>Retrieve & Apply</strong>다음 업무의 판단에 활용</div><div class="arrow">→</div>
    <div class="step"><strong>Govern</strong>검증·갱신·만료·삭제</div>
  </div>
</div>
<div class="source">Official sources · <a href="https://cloud.google.com/blog/products/ai-machine-learning/vertex-ai-memory-bank-in-public-preview">Google Cloud, “Vertex AI Memory Bank” (2025)</a> · <a href="https://aws.amazon.com/blogs/machine-learning/amazon-bedrock-agentcore-is-now-generally-available/">AWS, “Bedrock AgentCore GA” (2025)</a> · <a href="https://github.blog/changelog/2026-01-15-agentic-memory-for-github-copilot-is-in-public-preview/">GitHub, “Agentic memory for Copilot” (2026)</a></div>

---
layout: deck
chapter: '01'
section: Agent Memory의 변화
page: 04 / 19
---

<div class="eyebrow">The shift</div>
<h2>핵심 변화는 <span class="muted">매번 찾는 것</span>에서 <span class="accent">남기고 다시 쓰는 것</span>으로의 확장이다</h2>
<div class="compare">
  <div class="card"><span class="metric">Retrieval-centric</span><h3>일회성 검색</h3><div class="list"><div>질문마다 관련 문서를 검색</div><div>원문에서 답의 근거를 가져옴</div><div>세션의 발견은 대개 남지 않음</div></div></div>
  <div class="middle">→</div>
  <div class="card soft"><span class="metric">Accumulation-centric</span><h3>장기 Agent Memory</h3><div class="list"><div>업무 중 발견을 기억 후보로 만듦</div><div>범위를 정해 저장하고 검증·갱신</div><div>다음 세션의 출발점을 바꿈</div></div></div>
</div>
<p class="tiny" style="margin-top:13px">대체 관계가 아니다. 장기 기억도 원천 자료 검색과 검증을 필요로 하며, 반복 해석 비용을 줄이는 보완 계층이다.</p>

---
layout: deck
chapter: '01'
section: Agent Memory의 변화
page: 05 / 19
---

<div class="eyebrow">Compounding context</div>
<h2>Agent가 매번 <span class="muted">Session Zero</span>에서 시작하지 않게 한다</h2>
<div class="grid-2">
  <div class="card"><h3>반복되는 세션</h3><div class="flow"><div class="step">탐색</div><div class="arrow">→</div><div class="step">판단</div><div class="arrow">→</div><div class="step">종료</div></div><div class="flow" style="margin-top:10px"><div class="step">다시 탐색</div><div class="arrow">→</div><div class="step">다시 판단</div><div class="arrow">→</div><div class="step">종료</div></div></div>
  <div class="card soft"><h3>누적되는 세션</h3><div class="flow"><div class="step">탐색</div><div class="arrow">→</div><div class="step">판단</div><div class="arrow">→</div><div class="step">Knowledge</div></div><div class="flow" style="margin-top:10px"><div class="step">이전 지식</div><div class="arrow">→</div><div class="step">더 나은 판단</div><div class="arrow">→</div><div class="step">갱신</div></div></div>
</div>
<p class="quote" style="margin-top:22px">가치는 더 많은 기억이 아니라, 다음 행동의 출발점이 달라지는 데 있다.</p>

---
layout: deck
chapter: '02'
section: What We Already Did
page: 06 / 19
---

<div class="eyebrow">The bridge</div>
<h2>이름은 최근에 등장했지만, 우리는 이미 비슷한 문제를 다뤘다</h2>
<div class="compare">
  <div class="card"><h3>외부의 새 패턴</h3><p class="lead">경험을 구조화하고<br>다음 실행에 재사용</p></div>
  <div class="middle">↔</div>
  <div class="card soft"><h3>우리의 Harness 경험</h3><p class="lead">반복 업무를 도구·검증·<br>절차로 고정하고 재사용</p></div>
</div>
<p class="quote" style="margin-top:20px">우리는 먼저 Agent가 일할 수 있는 실행 환경을 만들었다.</p>

---
layout: deck
chapter: '02'
section: What We Already Did
page: 07 / 19
---

<div class="eyebrow">Case 01 · Investigation</div>
<h2>반복 조사: 매번 찾던 경로를 실행 가능한 절차로 바꿨다</h2>
<div class="case-path">
  <div class="box"><span class="metric">Before</span><strong>사람이 저장소·로그·이력을 오가며 조사</strong><p class="tiny">경로 선택과 누락 여부가 개인 경험에 의존</p></div><div class="arrow">→</div>
  <div class="box soft"><span class="metric">Harness</span><strong>정해진 도구와 순서로 근거를 수집</strong><p class="tiny">접근 범위, 출력 형식, 종료 조건을 실행 흐름에 포함</p></div><div class="arrow">→</div>
  <div class="box"><span class="metric">Observed</span><strong>탐색 단계와 사람 개입 지점 감소</strong><p class="tiny">동일한 조사 흐름을 반복 적용할 수 있음</p></div>
</div>
<div class="loss"><strong>남기지 못한 Knowledge</strong> 어떤 신호를 우선 보았는지, 잘못된 단서는 무엇이었는지, 예외 상황에서 경로를 왜 바꿨는지</div>

---
layout: deck
chapter: '02'
section: What We Already Did
page: 08 / 19
---

<div class="eyebrow">Case 02 · Decision & Validation</div>
<h2>변경 검증: 판단과 확인을 Guardrail 안에 넣었다</h2>
<div class="case-path">
  <div class="box"><span class="metric">Before</span><strong>변경 영향과 검증 범위를 사람이 매번 결정</strong><p class="tiny">확인 항목이 사람과 시점에 따라 달라짐</p></div><div class="arrow">→</div>
  <div class="box soft"><span class="metric">Harness</span><strong>변경 후 필요한 검사와 증거 수집을 자동 실행</strong><p class="tiny">도구 권한, 실패 처리, 확인 절차를 일관되게 적용</p></div><div class="arrow">→</div>
  <div class="box"><span class="metric">Observed</span><strong>검증 누락을 줄이고 결과를 재현 가능하게 만듦</strong><p class="tiny">사람은 예외와 최종 판단에 집중</p></div>
</div>
<div class="loss"><strong>남기지 못한 Knowledge</strong> 왜 이 검사가 필요한지, 어떤 실패는 허용되는지, 변경 유형별 최소 검증 범위는 무엇인지</div>

---
layout: deck
chapter: '02'
section: What We Already Did
page: 09 / 19
---

<div class="eyebrow">Case 03 · Reuse</div>
<h2>반복 실행: 한 번의 성공 경험을 다음 업무의 기본값으로 만들었다</h2>
<div class="case-path">
  <div class="box"><span class="metric">Before</span><strong>담당자가 과거 사례를 찾아 수작업으로 재구성</strong><p class="tiny">인수인계와 기억에 따라 품질 편차 발생</p></div><div class="arrow">→</div>
  <div class="box soft"><span class="metric">Harness</span><strong>검증된 명령·설정·실행 순서를 재사용</strong><p class="tiny">같은 조건에서는 같은 출발점 제공</p></div><div class="arrow">→</div>
  <div class="box"><span class="metric">Observed</span><strong>반복 준비와 해석 부담을 줄임</strong><p class="tiny">업무 결과가 다음 실행의 기반으로 작동</p></div>
</div>
<div class="loss"><strong>남기지 못한 Knowledge</strong> 재사용 가능한 범위, 환경별 차이, 실패 후 얻은 교훈, 더 이상 유효하지 않은 조건</div>

---
layout: deck
chapter: '02'
section: What We Already Did
page: 10 / 19
---

<div class="eyebrow">A common shape</div>
<h2>세 사례에는 같은 업무 패턴이 있다</h2>
<div class="flow">
  <div class="step"><strong>01 기존 업무</strong>사람의 탐색과 판단</div><div class="arrow">→</div>
  <div class="step"><strong>02 Harness</strong>도구·권한·절차·검증</div><div class="arrow">→</div>
  <div class="step"><strong>03 확인된 효과</strong>반복과 누락의 감소</div><div class="arrow">→</div>
  <div class="step"><strong>04 발견</strong>규칙·예외·판단 근거</div><div class="arrow">→</div>
  <div class="step" style="border-color:var(--orange)"><strong>05 손실</strong>다음 업무에 남지 않음</div>
</div>
<div class="grid-3" style="margin-top:24px">
  <div class="card"><span class="metric">Measured</span><p>실제 수치로 확인된 효과<br><span class="tiny">수치 확보 후에만 사용</span></p></div>
  <div class="card"><span class="metric">Observed</span><p>반복적으로 관찰한 변화<br><span class="tiny">현재 사례의 근거 수준</span></p></div>
  <div class="card"><span class="metric expected">Expected</span><p>Knowledge 적용 후 검증할 가설<br><span class="tiny">효과로 단정하지 않음</span></p></div>
</div>

---
layout: deck
chapter: '02'
section: What We Already Did
page: 11 / 19
---

<div class="eyebrow">The remaining loss</div>
<h2>Harness의 효과는 확인했지만, 경험 축적은 아직 단절돼 있다</h2>
<div class="grid-2">
  <div class="card soft"><h3>이미 얻은 것</h3><div class="list"><div>Agent가 도구를 안전하게 사용</div><div>반복 업무의 시작점 표준화</div><div>검증 절차의 누락 감소</div><div>실행 결과를 재현 가능하게 유지</div></div></div>
  <div class="card"><h3>아직 잃는 것</h3><div class="list"><div>업무 중 발견한 적용 조건</div><div>실패에서 얻은 예외와 경고</div><div>판단을 바꾼 근거와 맥락</div><div>다음 업무에서의 자동 재사용</div></div></div>
</div>
<p class="quote" style="margin-top:18px">실행은 반복 가능해졌지만, 실행에서 배운 것은 아직 반복 가능하지 않다.</p>

---
layout: deck
chapter: '03'
section: What Knowledge Means
page: 12 / 19
---

<div class="eyebrow">An old goal, new economics</div>
<h2>Knowledge는 새로운 목표가 아니라 <span class="accent">실현 비용이 달라진 목표</span>다</h2>
<table class="table"><thead><tr><th>과거</th><th>LLM 시대</th></tr></thead><tbody>
<tr><td>사람이 업무 후 문서화</td><td>Agent가 업무 중 Knowledge 후보 생성</td></tr>
<tr><td>사람이 분류하고 연결</td><td>LLM이 요약·구조화·상호 연결</td></tr>
<tr><td>사람이 검색하고 해석</td><td>Agent가 실행 과정에서 직접 활용</td></tr>
<tr><td>유지 비용이 높아 빠르게 노후화</td><td>사용 과정에서 갱신 후보 생성</td></tr>
</tbody></table>
<p class="quote" style="margin-top:14px">새로운 것은 Knowledge가 아니다. 생성·구조화·연결·갱신의 비용이 낮아졌다.</p>
<div class="source">Sources · <a href="https://ntrs.nasa.gov/citations/19950024815">NASA/University of Maryland, “The Experience Factory” (1994/1995)</a> · <a href="https://library.serviceinnovation.org/KCS/KCS_v6/KCS_v6_Practices_Guide/030">Consortium for Service Innovation, “KCS v6 Practices Guide”</a></div>

---
layout: deck
chapter: '03'
section: What Knowledge Means
page: 13 / 19
---

<div class="eyebrow">Working definition</div>
<h2>Knowledge는 저장된 문서가 아니라 <span class="accent">다음 판단을 바꾸는 경험 자산</span>이다</h2>
<div class="flow">
  <div class="step"><strong>Data</strong>로그·수치·변경</div><div class="arrow">→</div>
  <div class="step"><strong>Information</strong>맥락 안에서 정리된 사실</div><div class="arrow">→</div>
  <div class="step" style="background:var(--blue-soft)"><strong>Knowledge</strong>조건과 근거를 가진 재사용 가능한 판단</div>
</div>
<p class="quote" style="margin-top:21px">Knowledge는 출처와 적용 맥락을 가지고 다음 행동이나 판단을 바꾸며, 재사용과 검증을 통해 계속 개선되는 경험 자산이다.</p>
<p class="tiny" style="margin-top:13px">형태 · 사실과 시스템 구조 · 결정과 근거 · 성공·실패 사례 · 적용 조건과 예외 · 검증 방법과 실행 절차</p>
<div class="source">Source · <a href="https://www.iso.org/obp/ui?_escaped_fragment_=iso:std:iso:30401:dis:ed-2:v1:en">ISO/DIS 30401 (2nd ed.), Knowledge management systems — Requirements</a>: organizational knowledge as an evolving asset formed through experience, reflection and learning.</div>

---
layout: deck
chapter: '03'
section: What Knowledge Means
page: 14 / 19
---

<div class="eyebrow">Knowledge lifecycle</div>
<h2>경험은 분석·구조화·재사용을 거쳐 Knowledge가 된다</h2>
<div class="flow">
  <div class="step"><strong>업무 경험</strong>실행 결과와 맥락</div><div class="arrow">↓</div>
  <div class="step"><strong>Capture</strong>사실·결정·실패 포착</div><div class="arrow">→</div>
  <div class="step"><strong>Distill</strong>적용 조건과 의미 추출</div><div class="arrow">→</div>
  <div class="step"><strong>Package</strong>찾고 쓸 수 있게 구조화</div><div class="arrow">→</div>
  <div class="step"><strong>Reuse</strong>다음 업무에 적용</div><div class="arrow">→</div>
  <div class="step"><strong>Review</strong>사용 결과로 개선</div>
</div>
<div class="cycle" style="margin-top:28px">경험&nbsp; → &nbsp;지식 후보&nbsp; → &nbsp;검증된 자산&nbsp; → &nbsp;더 나은 경험</div>

---
layout: deck
chapter: '03'
section: What Knowledge Means
page: 15 / 19
---

<div class="eyebrow">Knowledge contract</div>
<h2>Agent가 사용할 Knowledge에는 다섯 가지 조건이 필요하다</h2>
<div class="grid-5 contract">
  <div class="card"><strong>Grounded</strong><p class="tiny">원천 자료와 출처가 연결돼 있다</p></div>
  <div class="card"><strong>Scoped</strong><p class="tiny">적용 대상과 조건이 명확하다</p></div>
  <div class="card"><strong>Current</strong><p class="tiny">작성 시점과 최신 상태를 안다</p></div>
  <div class="card"><strong>Actionable</strong><p class="tiny">행동과 판단에 사용할 수 있다</p></div>
  <div class="card"><strong>Governed</strong><p class="tiny">생성·검토·수정·폐기 책임이 있다</p></div>
</div>
<p class="quote" style="margin-top:23px">LLM은 Knowledge의 원천이 아니라 편집자이자 유지 관리자다.</p>
<p class="tiny" style="margin-top:11px">자동 생성된 후보는 출처·범위·검증·승인 없이 조직의 사실이 되지 않는다.</p>
<div class="source">Source · <a href="https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence">NIST AI 600-1, Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile (2024)</a>.</div>

---
layout: deck
chapter: '04'
section: Future Agent
page: 16 / 19
---

<div class="eyebrow">Knowledge already embedded</div>
<h2>우리는 이미 코드 저장소에 지식을 실체화해 왔다</h2>
<table class="table"><tbody>
<tr><td>코드</td><td>구현된 설계와 결정</td><td class="accent">embedded knowledge</td></tr>
<tr><td>테스트</td><td>실행 가능한 기대 동작과 Guardrail</td><td class="accent">executable knowledge</td></tr>
<tr><td>설정·스크립트</td><td>운영 조건과 반복 절차</td><td>operational knowledge</td></tr>
<tr><td>문서·지침</td><td>명시적으로 표현된 맥락</td><td>explicit knowledge</td></tr>
<tr><td>Git 이력</td><td>변경 과정과 일부 의사결정의 흔적</td><td>historical trace</td></tr>
</tbody></table>
<p class="quote" style="margin-top:14px">지식 시스템을 별도로 만들지는 않았지만, 업무 결과물 안에 지식을 계속 실체화해 왔다.</p>
<p class="tiny" style="margin-top:8px">현재는 비체계적이다. 발견·연결·적용 범위·갱신이 일관되지 않지만 실제 재사용 효과는 존재한다.</p>

---
layout: deck
chapter: '04'
section: Future Agent
page: 17 / 19
---

<div class="eyebrow">Target architecture</div>
<h2>미래 Agent는 <span class="accent">Model · Harness · Knowledge</span>의 결합체다</h2>
<div class="architecture">
  <div class="card pillar"><h3>Model</h3><p>추론 · 계획 · 생성</p><p class="tiny" style="margin-top:9px">무엇을 할지 사고한다</p></div>
  <div class="card pillar"><h3>Harness</h3><p>도구 · 권한 · 실행 · 검증</p><p class="tiny" style="margin-top:9px">안전하고 재현 가능하게 일한다</p></div>
  <div class="card pillar"><h3>Knowledge</h3><p>사실 · 결정 · 사례 · 절차</p><p class="tiny" style="margin-top:9px">어디서부터 판단할지 바꾼다</p></div>
</div>
<div class="flow" style="margin-top:18px"><div class="step"><strong>사용자 / 개발 업무</strong>Agent Orchestrator</div><div class="arrow">→</div><div class="step"><strong>업무 결과</strong>실행과 검증</div><div class="arrow">→</div><div class="step"><strong>Knowledge 후보</strong>출처 → 범위 → 검증 → 승인</div><div class="arrow">↻</div><div class="step"><strong>다음 업무</strong>검증된 지식 재사용</div></div>

---
layout: deck
chapter: '04'
section: Future Agent
page: 18 / 19
---

<div class="eyebrow">From implicit to intentional</div>
<h2>현재의 암묵적 축적을 명시적인 Knowledge Loop로 연결한다</h2>
<table class="table"><thead><tr><th>현재</th><th>다음 단계</th></tr></thead><tbody>
<tr><td>코드와 테스트 안에 암묵적으로 축적</td><td>핵심 지식을 Agent가 탐색할 수 있게 연결</td></tr>
<tr><td>사람이 필요할 때 찾아서 해석</td><td>Agent가 업무 중 필요한 맥락을 조회</td></tr>
<tr><td>변경 이력에 근거가 일부 남음</td><td>결정·근거·적용 범위를 명시적으로 관리</td></tr>
<tr><td>문서 갱신이 별도 업무</td><td>업무 수행 중 갱신 후보 자동 생성</td></tr>
<tr><td>프로젝트별 재사용</td><td>조직 차원의 검증된 Knowledge 재사용</td></tr>
</tbody></table>
<div class="grid-2" style="margin-top:12px"><p class="tiny"><strong>LLM</strong> · 후보 추출, 요약, 연결, 충돌 탐지, 갱신 제안</p><p class="tiny"><strong>사람과 조직</strong> · 출처 확인, 중요 지식 승인, 충돌 결정, 권한 관리</p></div>

---
layout: deck
chapter: '04'
section: Future Agent
page: 19 / 19
---

<div class="eyebrow">The next loop</div>
<h1>실행 경험이 조직 자산으로 남는 구조</h1>
<div class="cycle" style="margin:28px 0">Execute&nbsp; → &nbsp;Observe&nbsp; → &nbsp;Distill&nbsp; → &nbsp;Validate&nbsp; → &nbsp;Reuse<br><span class="muted" style="font-size:14px">↖──────────────────── Learn ────────────────────↙</span></div>
<div class="quote">우리는 Harness를 통해 Agent가 일할 수 있게 만들었다.<br>다음 단계는 이를 의도적이고 반복 가능한 Knowledge Loop로 연결하는 것이다.</div>

---
layout: deck
chapter: ''
section: Q&A Appendix
page: A01 / A06
appendix: true
---

<span class="appendix-tag">Q&A APPENDIX</span>
<h2 style="margin-top:14px">용어를 이렇게 구분한다</h2>
<table class="table"><thead><tr><th>용어</th><th>이 발표에서의 의미</th><th>경계</th></tr></thead><tbody>
<tr><td>Memory</td><td>Agent가 이후 상호작용에 활용하도록 유지하는 상태</td><td>모든 기억이 조직 Knowledge는 아님</td></tr>
<tr><td>RAG</td><td>외부 자료에서 관련 맥락을 검색해 생성에 제공</td><td>검색만으로 축적·갱신은 보장되지 않음</td></tr>
<tr><td>Wiki Memory</td><td>업무 중 편집·연결·갱신되는 지속적 지식 구조</td><td>아직 단일한 업계 표준은 아님</td></tr>
<tr><td>Knowledge</td><td>출처·범위·검증을 갖고 다음 판단을 바꾸는 경험 자산</td><td>LLM 출력 자체와 구분</td></tr>
</tbody></table>

---
layout: deck
chapter: ''
section: Q&A Appendix
page: A02 / A06
appendix: true
---

<span class="appendix-tag">Q&A APPENDIX</span>
<h2 style="margin-top:14px">왜 지금인가: 비용 구조가 달라졌다</h2>
<div class="grid-3">
  <div class="card"><h3>Capture</h3><p>업무의 로그·결정·실패에서 후보를 상시 추출</p></div>
  <div class="card"><h3>Distill</h3><p>비정형 경험에서 조건·근거·예외를 구조화</p></div>
  <div class="card"><h3>Maintain</h3><p>사용 시점에 충돌과 노후화 신호를 다시 생성</p></div>
</div>
<p class="quote" style="margin-top:25px">사람의 승인 비용은 남는다. 달라진 것은 그 앞단의 정리 비용이다.</p>

---
layout: deck
chapter: ''
section: Q&A Appendix
page: A03 / A06
appendix: true
---

<span class="appendix-tag">Q&A APPENDIX · RESEARCH</span>
<h2 style="margin-top:14px">초기 연구는 구현 가능성을 보여주는 참고자료로만 본다</h2>
<div class="card soft"><h3>Retrieval as Reasoning · Tencent WeChat 연구팀 · arXiv preprint (2026.05)</h3><p class="lead">Agent가 검색·읽기·링크 탐색을 반복하고, 오류 패턴을 다음 지식 구축에 반영하는 LLM-Wiki 시스템을 제시한다.</p></div>
<div class="loss"><strong>해석 주의</strong> 공개 직후의 자체 평가이며 확립된 업계 표준이 아니다. 벤치마크 수치를 우리 업무 효과로 전이하지 않고, 내부 효과는 별도 기준선과 반복 측정으로 검증한다.</div>
<div class="source">Source · <a href="https://arxiv.org/abs/2605.25480">“Retrieval as Reasoning,” arXiv:2605.25480 (2026)</a>. 연구의 정확한 설정·지표·수치는 원문 기준.</div>

---
layout: deck
chapter: ''
section: Q&A Appendix
page: A04 / A06
appendix: true
---

<span class="appendix-tag">Q&A APPENDIX</span>
<h2 style="margin-top:14px">가장 큰 위험은 더 많은 문서가 아니라 <span class="accent">잘못된 확신</span>이다</h2>
<div class="grid-4">
  <div class="card"><h3>Hallucination</h3><p class="tiny">후보마다 원천 링크와 인용 범위 유지</p></div>
  <div class="card"><h3>Staleness</h3><p class="tiny">작성·검증 시점과 만료 신호 관리</p></div>
  <div class="card"><h3>Scope leak</h3><p class="tiny">프로젝트·환경·권한 경계를 메타데이터로 고정</p></div>
  <div class="card"><h3>Feedback loop</h3><p class="tiny">자기 생성 문장을 원천 사실처럼 재학습하지 않음</p></div>
</div>
<p class="quote" style="margin-top:25px">자동화의 대상은 지식의 확정이 아니라 후보 생성과 유지 신호다.</p>

---
layout: deck
chapter: ''
section: Q&A Appendix
page: A05 / A06
appendix: true
---

<span class="appendix-tag">Q&A APPENDIX</span>
<h2 style="margin-top:14px">작게 시작하는 90일 검증</h2>
<div class="grid-3">
  <div class="card"><span class="metric">0–30 days</span><h3>한 업무 선택</h3><p class="tiny">반복 빈도가 높고 검증 가능한 Harness 흐름 하나를 기준선으로 설정</p></div>
  <div class="card"><span class="metric">31–60 days</span><h3>Knowledge Contract 적용</h3><p class="tiny">출처·범위·시점·행동·책임 필드를 갖춘 후보 생성과 승인 실험</p></div>
  <div class="card"><span class="metric">61–90 days</span><h3>재사용 효과 비교</h3><p class="tiny">탐색 단계, 사람 개입, 재조사, 오류·철회 건수를 기준선과 비교</p></div>
</div>
<p class="tiny" style="margin-top:20px"><strong>판단 기준</strong> · 속도만이 아니라 정확성, 철회 가능성, 근거 추적성, 유지 비용을 함께 본다.</p>

---
layout: deck
chapter: ''
section: Q&A Appendix
page: A06 / A06
appendix: true
---

<span class="appendix-tag">Q&A APPENDIX · SOURCES</span>
<h2 style="margin-top:14px">References</h2>
<div class="grid-2 tiny">
  <div class="card"><strong>Enterprise Agent memory</strong><p><a href="https://cloud.google.com/blog/products/ai-machine-learning/vertex-ai-memory-bank-in-public-preview">Google Cloud. “Vertex AI Memory Bank.” Jul 2025.</a></p><p style="margin-top:10px"><a href="https://aws.amazon.com/blogs/machine-learning/amazon-bedrock-agentcore-is-now-generally-available/">AWS. “Bedrock AgentCore GA.” Oct 2025.</a></p><p style="margin-top:10px"><a href="https://github.blog/changelog/2026-01-15-agentic-memory-for-github-copilot-is-in-public-preview/">GitHub. “Agentic memory for Copilot.” Jan 2026.</a></p><p style="margin-top:10px"><a href="https://platform.claude.com/docs/en/agents-and-tools/tool-use/memory-tool">Anthropic. “Memory tool.” Claude Platform Docs.</a></p></div>
  <div class="card"><strong>Knowledge management & governance</strong><p><a href="https://ntrs.nasa.gov/citations/19950024815">NASA / University of Maryland. “The Experience Factory.” 1994/1995.</a></p><p style="margin-top:10px"><a href="https://library.serviceinnovation.org/KCS/KCS_v6/KCS_v6_Practices_Guide/030">Consortium for Service Innovation. “KCS v6 Practices Guide.”</a></p><p style="margin-top:10px"><a href="https://www.iso.org/obp/ui?_escaped_fragment_=iso:std:iso:30401:dis:ed-2:v1:en">ISO/DIS 30401, 2nd ed. Knowledge management systems.</a></p><p style="margin-top:10px"><a href="https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence">NIST AI 600-1. Generative AI Profile. 2024.</a></p></div>
</div>
