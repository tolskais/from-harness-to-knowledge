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
page: 01 / 13
---

<div class="eyebrow">Knowledge-based Agent</div>
<h1>From Harness to Knowledge</h1>
<p class="lead">실행할 수 있는 Agent에서, 경험을 축적하고 다시 쓰는 Agent로</p>

---
layout: deck
chapter: '01'
section: Agent Memory의 변화
page: 02 / 13
---

<div class="eyebrow">Today’s route</div>
<h2>오늘 이야기의 흐름</h2>
<div class="agenda">
  <div class="agenda-row"><b>01</b><strong>Agent Memory의 변화</strong><span>검색에서 지식 축적으로</span></div>
  <div class="agenda-row"><b>02</b><strong>우리가 확인한 것</strong><span>Harness의 효과와 남은 손실</span></div>
  <div class="agenda-row"><b>03</b><strong>무엇을 남길 것인가</strong><span>Knowledge의 종류와 재사용 조건</span></div>
  <div class="agenda-row"><b>04</b><strong>어떻게 일반화할 것인가</strong><span>업무 흐름에 연결된 Knowledge Loop</span></div>
</div>

---
layout: deck
chapter: '01'
section: Agent Memory의 변화
page: 03 / 13
---

<div class="eyebrow">Signals in practice</div>
<h2>Agent가 기억하는 단위는 <span class="muted">사용자 맥락</span>에서 <span class="accent">업무 경험과 지식</span>으로 넓어지고 있다</h2>
<div class="timeline-phases">
  <div class="phase phase-search"><b>01 · RETRIEVE</b><span>자료 검색</span></div>
  <div class="phase phase-persist"><b>02 · USER CONTEXT</b><span>지시·선호 유지</span></div>
  <div class="phase phase-accumulate"><b>03 · LEARN FROM WORK</b><span>업무에서 얻은 경험·지식 축적</span></div>
</div>
<div class="timeline">
  <div class="moment baseline"><b>2020.05</b><strong>RAG <span class="type-label baseline-label">BASELINE</span></strong><p class="muted">외부 문서를 질문 시 검색·결합해 매번 다시 해석</p></div>
  <div class="moment"><b>2023.07</b><strong>ChatGPT Custom Instructions</strong><p class="muted">한 번 지정한 사용자 맥락을 이후 모든 대화에 지속 적용</p></div>
  <div class="moment"><b>2024.02</b><strong>ChatGPT Memory</strong><p class="muted">사용자 선호를 대화 간에 기억하고 다음 응답에 적용</p></div>
  <div class="moment"><b>2025.07</b><strong>Google Memory Bank</strong><p class="muted">세션에서 장기 기억을 생성·검색하는 관리형 서비스</p></div>
  <div class="moment"><b>2025.12</b><strong>AWS Episodic Memory</strong><p class="muted">완료된 업무를 에피소드로 묶고 Reflection 생성</p></div>
  <div class="moment"><b>2026.01</b><strong>GitHub Copilot Memory</strong><p class="muted">저장소 지식을 Agent 간 공유하고 코드로 재검증</p></div>
  <div class="moment"><b>2026.04</b><strong>LLM Wiki <span class="type-label">PATTERN</span></strong><p class="muted">누적 지식을 연결된 파일 기반 위키로 운영하는 패턴을 대중화</p></div>
</div>
<div class="timeline-note">제품과 패턴은 서로 대체되지 않으며, 저장 형식과 적용 범위가 다르다.</div>
<div class="source">Sources · <a href="https://arxiv.org/abs/2005.11401">Lewis et al., RAG (2020)</a> · <a href="https://openai.com/index/custom-instructions-for-chatgpt/">ChatGPT Custom Instructions (2023)</a> · <a href="https://openai.com/index/memory-and-new-controls-for-chatgpt/">ChatGPT Memory (2024)</a> · <a href="https://cloud.google.com/blog/products/ai-machine-learning/vertex-ai-memory-bank-in-public-preview">Google Memory Bank (2025)</a> · <a href="https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/release-notes.html#_december_2025">AWS Episodic Memory (2025)</a> · <a href="https://github.blog/changelog/2026-01-15-agentic-memory-for-github-copilot-is-in-public-preview/">GitHub Copilot Memory (2026)</a> · <a href="https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f">LLM Wiki (2026)</a></div>

---
layout: deck
chapter: '01'
section: Agent Memory의 변화
page: 04 / 13
---

<div class="eyebrow">What survives after the task?</div>
<h2>차이는 업무가 끝난 뒤 <span class="accent">무엇이 다음 실행에 남는가</span>다</h2>
<div class="session-map">
  <div class="session-card session-retrieve">
    <div class="session-head"><b>01</b><strong>RETRIEVE</strong><span>RAG</span></div>
    <div class="session-flow"><div>기존 자료</div><i>→</i><div>검색</div><i>→</i><div>답변</div></div>
    <div class="session-down">↓</div>
    <div class="survives none"><small>업무 후</small><strong>새로 남는 지식 없음</strong><span>다음 실행에서 기존 자료를 다시 검색</span></div>
  </div>
  <div class="session-card session-context">
    <div class="session-head"><b>02</b><strong>USER CONTEXT</strong><span>ChatGPT</span></div>
    <div class="session-flow"><div>사용자 지시</div><i>→</i><div>대화</div><i>→</i><div>답변</div></div>
    <div class="session-down">↓</div>
    <div class="survives context"><small>업무 후</small><strong>사용자 맥락 유지</strong><span>다음 실행에서 선호·지시를 다시 사용</span></div>
  </div>
  <div class="session-card session-learn">
    <div class="session-head"><b>03</b><strong>LEARN FROM WORK</strong><span>Google · AWS · GitHub · LLM Wiki Pattern</span></div>
    <div class="session-flow"><div>대화·행동</div><i>→</i><div>판단·결과</div><i>→</i><div>새로운 발견</div></div>
    <div class="session-down">↓</div>
    <div class="survives learn"><small>업무 후</small><strong>새 사실 · 경험 · 교훈 축적</strong><span>이전 지식으로 시작하고, 다음 업무의 결과로 다시 갱신</span></div>
  </div>
</div>
<div class="artifact-note"><b>저장 형식은 구현에 따라 다르다</b><span>Memory Record · 저장소 사실 · 에피소드 · 위키 페이지</span></div>
<p class="quote session-quote">변화의 본질은 Agent가 업무 중 얻은 새로운 지식이 다음 실행에 남는다는 것이다.</p>
<div class="source">Sources · <a href="https://arxiv.org/abs/2005.11401">RAG</a> · <a href="https://openai.com/index/custom-instructions-for-chatgpt/">ChatGPT Custom Instructions</a> · <a href="https://openai.com/index/memory-and-new-controls-for-chatgpt/">ChatGPT Memory</a> · <a href="https://cloud.google.com/blog/products/ai-machine-learning/vertex-ai-memory-bank-in-public-preview">Google Memory Bank</a> · <a href="https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/memory.html">AWS AgentCore Memory</a> · <a href="https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/agents/copilot-memory">GitHub Copilot Memory</a> · <a href="https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f">LLM Wiki</a></div>

---
layout: deck
chapter: '02'
section: What We Already Did
page: 05 / 13
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
page: 06 / 13
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
page: 07 / 13
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
page: 08 / 13
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
chapter: '03'
section: What Knowledge Means
page: 09 / 13
---

<div class="eyebrow">What to accumulate</div>
<h2>우리가 쌓아야 하는 것은 결과물이 아니라 <span class="accent">다음 판단과 행동을 바꾸는 지식</span>이다</h2>
<div class="knowledge-types">
  <div class="knowledge-type"><b>01</b><div><span>무엇이 사실인가</span><strong>시스템 사실과 구조</strong><p>구성 · 의존성 · 상태 · 제약</p></div></div>
  <div class="knowledge-type"><b>02</b><div><span>왜 이렇게 판단했는가</span><strong>결정과 근거</strong><p>선택 · 대안 · 트레이드오프</p></div></div>
  <div class="knowledge-type"><b>03</b><div><span>어떻게 실행하고 확인하는가</span><strong>절차와 검증 방법</strong><p>순서 · 도구 · 성공 기준</p></div></div>
  <div class="knowledge-type"><b>04</b><div><span>언제 성공하고 실패하는가</span><strong>경험과 예외</strong><p>적용 조건 · 실패 패턴 · 교훈</p></div></div>
</div>
<div class="source-strip"><strong>코드 · 테스트 · 설정 · 문서 · 로그 · Git 이력</strong><span>Knowledge의 종류가 아니라, 위 지식을 발견하고 검증하는 원천이다</span></div>
<div class="source">Sources · <a href="https://ntrs.nasa.gov/citations/19950024815">NASA/University of Maryland, “The Experience Factory” (1994/1995)</a> · <a href="https://library.serviceinnovation.org/KCS/KCS_v6/KCS_v6_Practices_Guide/030">Consortium for Service Innovation, “KCS v6 Practices Guide”</a></div>

---
layout: deck
chapter: '03'
section: What Knowledge Means
page: 10 / 13
---

<div class="eyebrow">Reusable knowledge</div>
<h2>저장됐다고 모두 <span class="accent">재사용 가능한 Knowledge</span>가 되는 것은 아니다</h2>
<div class="quality-grid">
  <div class="quality-card"><b>Source</b><strong>어디서 왔는가</strong><span>근거와 원천에 연결</span></div>
  <div class="quality-card"><b>Scope</b><strong>어디에 적용되는가</strong><span>대상과 조건을 명시</span></div>
  <div class="quality-card"><b>Rationale</b><strong>왜 유효한가</strong><span>판단 근거와 대안 기록</span></div>
  <div class="quality-card"><b>Validation</b><strong>확인됐는가</strong><span>실행 결과와 검증 증거</span></div>
  <div class="quality-card"><b>Freshness</b><strong>아직 유효한가</strong><span>시점과 노후화 신호 관리</span></div>
  <div class="quality-card"><b>Ownership</b><strong>누가 책임지는가</strong><span>검토 · 수정 · 폐기 권한</span></div>
</div>
<div class="knowledge-formula"><b>Reusable Knowledge</b><i>=</i><span>Content</span><i>+</i><span>Provenance</span><i>+</i><span>Applicability</span><i>+</i><span>Lifecycle</span></div>
<div class="source">Sources · <a href="https://www.iso.org/obp/ui?_escaped_fragment_=iso:std:iso:30401:dis:ed-2:v1:en">ISO/DIS 30401, Knowledge management systems</a> · <a href="https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence">NIST AI 600-1, Generative AI Profile (2024)</a></div>

---
layout: deck
chapter: '04'
section: Generalizing Knowledge
page: 11 / 13
---

<div class="eyebrow">Knowledge operating loop</div>
<h2>일반화하려면 Knowledge 수집을 별도 문서화가 아니라 <span class="accent">업무 흐름</span>에 넣어야 한다</h2>
<div class="knowledge-loop">
  <div class="loop-step"><b>01</b><strong>Execute</strong><span>업무 수행</span></div><i>→</i>
  <div class="loop-step"><b>02</b><strong>Capture</strong><span>사실·결정·결과 포착</span></div><i>→</i>
  <div class="loop-step"><b>03</b><strong>Structure</strong><span>조건·근거·예외 정리</span></div><i>→</i>
  <div class="loop-step"><b>04</b><strong>Validate</strong><span>실행 증거로 확인</span></div><i>→</i>
  <div class="loop-step active"><b>05</b><strong>Retrieve & Apply</strong><span>다음 업무에 적용</span></div><i>↻</i>
</div>
<div class="loop-feedback">사용 결과는 지식을 강화하거나, 수정·폐기할 신호가 된다</div>
<div class="role-grid">
  <div class="role-card"><b>Agent</b><span>후보 추출 · 요약 · 연결 · 충돌/노후화 탐지</span></div>
  <div class="role-card"><b>Harness</b><span>실제 실행 · 적용 조건 확인 · 검증 증거 생성</span></div>
  <div class="role-card"><b>사람과 조직</b><span>승인 · 충돌 해결 · 권한과 책임 관리</span></div>
</div>

---
layout: deck
chapter: '04'
section: Generalizing Knowledge
page: 12 / 13
---

<div class="eyebrow">Generalized system</div>
<h2><span class="accent">Model · Harness · Knowledge</span>가 하나의 학습 루프로 연결돼야 한다</h2>
<div class="learning-system">
  <div class="system-node knowledge-node"><b>Knowledge</b><strong>사실 · 결정 · 절차 · 경험</strong><span>검증된 출발점 제공</span></div>
  <div class="system-arrow"><span>조회·적용</span>→</div>
  <div class="system-node model-node"><b>Model</b><strong>추론 · 계획 · 생성</strong><span>무엇을 할지 판단</span></div>
  <div class="system-arrow"><span>도구 호출</span>→</div>
  <div class="system-node harness-node"><b>Harness</b><strong>도구 · 권한 · 실행 · 검증</strong><span>안전하고 재현 가능하게 수행</span></div>
  <div class="system-arrow"><span>실행</span>→</div>
  <div class="system-result"><b>업무 결과</b><span>산출물 · 로그 · 검증 증거</span></div>
  <div class="feedback-path"><b>결과와 증거</b><span>→ Knowledge 후보 → 검증·승인 → 갱신</span><i>↖</i></div>
</div>
<p class="quote system-quote">일반화의 핵심은 새 문서 저장소가 아니라, 축적된 지식을 실행과 피드백에 연결하는 것이다.</p>

---
layout: deck
chapter: '04'
section: Generalizing Knowledge
page: 13 / 13
---

<div class="eyebrow">From cases to system</div>
<h1>개별 사례에서 확인한 Knowledge 재사용을<br><span class="accent">조직적으로 반복 가능한 구조</span>로 만든다</h1>
<div class="takeaway-grid">
  <div class="takeaway-card"><b>WHAT</b><strong>무엇을 남길지 정의한다</strong><span>사실 · 결정 · 절차 · 경험</span></div>
  <div class="takeaway-card"><b>QUALITY</b><strong>쓸 수 있는 조건을 붙인다</strong><span>출처 · 범위 · 검증 · 생명주기</span></div>
  <div class="takeaway-card"><b>SYSTEM</b><strong>업무 흐름에 연결한다</strong><span>수집 · 재사용 · 검토를 Harness 안에서 반복</span></div>
</div>
<div class="cycle compact-cycle">Execute&nbsp; → &nbsp;Observe&nbsp; → &nbsp;Distill&nbsp; → &nbsp;Validate&nbsp; → &nbsp;Reuse</div>
<p class="quote final-quote">다음 단계는 새로운 문서 저장소를 만드는 것이 아니라, 업무에서 얻은 판단과 경험이 다음 실행을 계속 개선하도록 연결하는 것이다.</p>

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
