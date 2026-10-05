---
theme: default
title: 필드 결함 기반 개발 점검 Agent
info: 임원 보고 · 1분
canvasWidth: 1280
drawings:
  persist: false
transition: none
mdc: true
layout: deck
---

<h1>필드 결함 기반 개발 점검 Agent</h1>
<p class="lead">이전 세대의 결함 지식을 다음 제품의 개발 산출물에 반영</p>

<div class="generation-heading"><b>이전 세대 제품</b><span>결함 분석 · 지식 정리 · 패턴화</span></div>
<div class="knowledge-flow" role="group" aria-label="이전 세대 제품의 결함 분석과 지식 축적">
  <div class="flow-card input-card">
    <div class="card-label">분석 입력</div>
    <h2>필드 결함 + 개발·검증 자료</h2>
    <div class="input-list">
      <div><b>결함</b><p>고객 이슈·로그·환경·재현 조건</p></div>
      <div><b>분석</b><p>Root cause 분석서·조치 내역</p></div>
      <div><b>제품</b><p>요구사항·설계서·Source code</p></div>
      <div><b>수정</b><p>Code diff·Code review 이력</p></div>
      <div><b>검증</b><p>Test spec·결과·Coverage</p></div>
    </div>
    <div class="input-key">이전 세대의 결함 ID·발생 버전으로 자료 연결</div>
  </div>
  <div class="flow-arrow" aria-label="분석">→</div>
  <div class="flow-card analysis-card">
    <div class="card-label">LLM Agent · 지식 정리</div>
    <h2>근거 기반 분류 · 원인 분석</h2>
    <div class="analysis-method"><div class="term"><b>ODC</b><small>Orthogonal Defect<br>Classification</small></div><p>수정 내용에 따라 결함 유형 분류<br>결함이 드러난 실행 조건 분류</p></div>
    <div class="type-list">유형: Function · Interface · Checking · Timing 등</div>
    <div class="cause-analysis"><b>원인 분석</b><p>설계·코드·시험 대조<br>발생 원인·검출 누락 원인 검토</p></div>
  </div>
  <div class="flow-arrow" aria-label="지식으로 정리">→</div>
  <div class="flow-card knowledge-card">
    <div class="card-label">패턴 · 지식</div>
    <h2>공통 결함 패턴 · 예방 기준</h2>
    <div class="knowledge-items"><p>유형·실행 조건별 결함 묶음</p><p>공통 원인 · 예방·검출 기준</p><p>적용 범위 · 근거 자료</p></div>
    <div class="knowledge-evidence">결함–문서–코드–시험 연결 유지</div>
  </div>
</div>

<div class="application-inputs" role="group" aria-label="다음 제품의 개발 자료와 이전 세대에서 축적한 지식">
  <div class="current-input"><b>다음 제품 개발</b><span>입력 · 요구사항·설계서·Source code·Code diff·Test code·Test spec·Static analysis 결과</span><i>↓</i></div>
  <div class="knowledge-link"><span>↓</span> 이전 세대에서 축적한 지식</div>
</div>

<div class="agent-panel">
  <div class="agent-header"><h2>LLM Agent · 지식 활용</h2><p>다음 제품 산출물과 축적 지식 대조 → 보완안 제안</p></div>
  <div class="development-stages">
    <div class="stage-card"><h3>요구사항</h3><div class="output-name">요구사항 명세서<br>Traceability matrix</div><p>예외·복구 조건, 검증 기준 보완<br>이전 결함–요구사항–시험 연결</p></div>
    <div class="stage-card"><h3>설계</h3><div class="output-name">설계서 · <span class="term"><b>FMEA</b><small>Failure Mode and Effects Analysis</small></span></div><p>Interface·상태 전이·복구 검토<br>Failure mode·원인·대책 보완</p></div>
    <div class="stage-card"><h3>구현</h3><div class="output-name">Source code · Unit test</div><p>Code review·Static analysis<br>수정안·Unit test 보완안</p></div>
    <div class="stage-card"><h3>시험</h3><div class="output-name">Test spec · Regression suite</div><p>Fault injection·HIL 시나리오<br>결함 패턴 기반 Test case 추가</p></div>
  </div>
</div>
