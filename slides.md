---
theme: default
title: 필드 결함 지식으로 유사 결함 예방
info: 임원 보고 · 1분
canvasWidth: 1280
drawings:
  persist: false
transition: none
mdc: true
layout: deck
---

<h1>필드 결함 지식으로 유사 결함 예방</h1>

<div class="flow-explanation" role="note" aria-label="전체 방향과 목표">
  <p>여러 결함·산출물을 연계 분석한 지식으로, <strong>다음 제품에서 놓친 조건을 찾는 LLM Agent 구축</strong></p>
</div>

<div class="knowledge-map" role="group" aria-label="이전 세대 자료를 LLM Post-mortem으로 분석해 패턴 지식을 구축하고 각 개발 단계의 검증을 보완">
  <div class="knowledge-build">
    <section class="previous-data">
      <h2>이전 세대 데이터</h2>
      <div class="input-sources">
        <div class="source-card"><h3><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 9h6v7a3 3 0 0 1-6 0V9Z"/><path d="M10 9V7a2 2 0 0 1 4 0v2M5 10h4m6 0h4M5 15h4m6 0h4M7 20l3-2m4 0 3 2M8 4l2 2m4 0 2-2"/></svg>고객 필드 결함</h3><p>고객 이슈 · 로그 · 재현 조건<br>FW version · Host 환경</p></div>
        <span class="input-plus">＋</span>
        <div class="source-card"><h3><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m8 7-5 5 5 5m8-10 5 5-5 5M14 4l-4 16"/></svg>개발·검증 산출물</h3><p>요구사항 · 설계 · Code<br>테스트 실행 이력 · 불량 수정 내역</p></div>
      </div>
    </section>

    <div class="postmortem-flow"><span>↓</span><div><h2>LLM Post-mortem</h2><p>공통 원인·미검출 요인을 패턴 지식으로 정리</p></div></div>
    <section class="knowledge-base">
      <div class="kb-heading"><h2><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0"/></svg>Knowledge Base</h2><span>패턴 지식 예시</span></div>
      <table class="knowledge-table" aria-label="동일한 항목으로 누적되는 일반화된 결함 패턴 지식의 구조 예시">
        <colgroup><col class="pattern-column"><col><col><col class="prevention-column"><col></colgroup>
        <thead><tr><th scope="col">결함 패턴</th><th scope="col">발생 원인</th><th scope="col">미검출 원인</th><th scope="col">예방·검증 항목</th><th scope="col">적용 조건</th></tr></thead>
        <tbody>
          <tr><th scope="row">중단 후<br>복구 실패</th><td>복귀 조건 누락</td><td>중단 시험 누락</td><td>복귀 전이·복구 시험</td><td>Power loss·Reset</td></tr>
          <tr><th scope="row">반복 취소 시<br>자원 고갈</th><td>취소 시 해제 누락</td><td>반복 취소 시험 누락</td><td>취소 경로 해제 점검</td><td>Command 취소</td></tr>
        </tbody>
        <tfoot><tr aria-label="이 외의 결함 패턴도 동일한 항목으로 저장"><td>⋮</td><td>⋮</td><td>⋮</td><td>⋮</td><td>⋮</td></tr></tfoot>
      </table>
    </section>
  </div>

  <div class="reuse-links"><span>비교·제안</span><svg viewBox="0 0 60 570" aria-label="Knowledge Base를 LLM Agent가 요구사항, 설계, 구현, 시험에서 활용"><path d="M0 373H22 M22 103V493 M22 103H58 M22 233H58 M22 363H58 M22 493H58"/><path d="M50 96L58 103L50 110 M50 226L58 233L50 240 M50 356L58 363L50 370 M50 486L58 493L50 500"/><circle cx="22" cy="373" r="4"/></svg></div>

  <section class="next-product">
    <h2>다음 제품 개발</h2>
    <div class="stage-rows">
      <div class="stage-row"><div class="stage-node"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="4" width="15" height="17" rx="2"/><path d="M9 2h7v4H9zM8 11l2 2 3-3M8 17l2 2 3-3M15 12h2M15 18h2"/></svg><b>요구사항</b></div><div class="stage-content"><div class="effect-label">기대 효과</div><h3>예외·복구 요구조건 누락 감소</h3><div class="stage-output"><b>요구사항 명세</b>: 중단 후 복구 조건·판정 기준 보완안</div></div></div>
      <div class="stage-row"><div class="stage-node"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="3" width="7" height="7" rx="1"/><rect x="15" y="14" width="7" height="7" rx="1"/><path d="M9 6h9v8M5 10v7h10"/></svg><b>설계</b></div><div class="stage-content"><div class="effect-label">기대 효과</div><h3>설계에서 놓친 실패 가능성 발견</h3><div class="stage-output"><b>설계</b>: 복구·동시 처리 경로 보완안<br><b><span class="term"><b>FMEA</b><small>Failure Mode and Effects Analysis</small></span></b>: 실패 조건·예방 대책 보완안</div></div></div>
      <div class="stage-row"><div class="stage-node"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m8 7-5 5 5 5m8-10 5 5-5 5M14 4l-4 16"/></svg><b>구현</b></div><div class="stage-content"><div class="effect-label">기대 효과</div><h3>유사 결함 가능성의 조기 발견</h3><div class="stage-output"><b>Code review</b>: 의심 코드·수정안·Unit test 제안</div></div></div>
      <div class="stage-row"><div class="stage-node"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6M10 3v6L4 19a1 1 0 0 0 1 2h14a1 1 0 0 0 1-2L14 9V3M8 14h8M9 17h1m4 1h1"/></svg><b>시험</b></div><div class="stage-content"><div class="effect-label">기대 효과</div><h3>누락 조건까지 시험 범위 확대</h3><div class="stage-output"><b>Test spec</b>: 누락 조건·판정 기준 보완안<br><b>Test code</b>: 해당 조건의 테스트 추가안</div></div></div>
    </div>
  </section>
</div>
