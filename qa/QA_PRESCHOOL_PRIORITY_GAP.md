# QA — Preschool (3–6) safety priority gap audit

**Product:** Bé Gấu An Toàn  
**Date:** 2026-09-24  
**Sources:** `content/approved/*.mjs` (75 lessons / 375 situations), `src/curriculum.mjs`, `content/APPROVED.md`, UI finish note (`src/ui.mjs`)  
**Checklist:** parent preschool priorities (drown → traffic → home → choking → body → strangers → fire/help → animals/play) + pedagogy framing  
**Not:** expert / Bộ approval; not child testing

---

## STATUS: PARTIAL

Curriculum **covers well** home water/electric/hot/sharp/medicine/fall and basic road + fire habits for an **elementary (lớp 1–5) companion game**, with adult-first safe paths and calm language. Against the **preschool 3–6 priority list**, several high-priority child skills are **missing or only adjacent**, and there is **no dedicated parent-note field** (only `teacherPrompt` + finish disclaimer).

---

## SCOPE / DONE

| Item | Result |
|---|---|
| Modules in play (`curriculum.mjs`) | `nuoc`, `dien`, `khac-chay`, `khac-nga`, `khac-thuoc`, `khac-sac`, `dao-pho` |
| Approved volume | 75 lessons / 375 situations (`APPROVED.md`) |
| Age labels in content | Grade bands `1`–`5` and ranges like `1-3`, `3-5` — **not** labeled preschool 3–6 |
| Schema fields checked | `objective`, `teacherPrompt`, `safeText`/`safeFeedback`, hazards — **no** `parentNote` / `parentPrompt` |
| Pedagogy / fear scan | No blood / death / graphic injury in approved copy (aligned with prior QA) |
| Method | Full-corpus keyword + framing counts; spot-read `nuoc`, `khac-chay`/`khac-nga`, `dao-pho` g1–g2 traffic/play |

---

## COVERAGE MATRIX

| # | Priority area | Verdict | Example situation IDs (if found) | Notes vs checklist |
|---|---|---|---|---|
| 1 | **Drown prevention** (ao/hồ/sông/giếng/bể/xô; don’t lean; yell **Cứu với** + get adult; float/phao) | **Partial** | `nuoc-l1-s2`–`s5` (chum/xô/bể/giếng); `nuoc-l2-s1`–`s5` (ao/hồ/sông); `nuoc-l3-*` (bể); `nuoc-l4-s1`,`s5` (áo phao); `nuoc-l5-s3` (hô to gọi người lớn, stay on shore) | Strong “don’t go alone / call adult / don’t lean into chum.” **Missing explicit cue “Cứu với”.** Phao covered for boat/đò (`nuoc-l4`, `dao-pho-g4-l5-s1/s2`), not as “grab float if available” in open-water near-miss. |
| 2 | **Basic traffic** (hold adult hand; 3 light colors; helmet/sit still on moto; don’t run for ball; locked in car: horn + tap glass) | **Partial** | Hold hand: `dao-pho-g1-l2-s1`, `dao-pho-g2-l2-s1/s3`; Red/green: `dao-pho-g1-l2-s1/s2/s5`; Helmet moto: `dao-pho-g1-l5-s1`–`s5`, `dao-pho-g2-l5-*`; Ball not into street: `dao-pho-g2-l1-s2`; Sit still on vehicle: `dao-pho-g1-l4-s4/s5` | **Đèn vàng (yellow) as 3rd signal color: Missing.** Sit-still is mostly bus/pickup, weaker as moto-specific. **Locked in car → horn + tap glass: Missing.** Much `dao-pho` content is lớp 2–5 (biển báo, hiệu lệnh, hàng không) beyond preschool basics. |
| 3 | **Home/school hazards** (hot; electric; sharp; medicine/chemicals; fall balcony/window/furniture) | **Covered well** | Hot: `khac-chay-l1-s1`–`s5`; Electric: `dien-g1-l1-s1`… (full `dien` module); Sharp: `khac-sac-*`; Medicine: `khac-thuoc-l1`–`l5`; Fall: `khac-nga-l1`–`l5` (ban công, cửa sổ, cầu thang, sàn ướt, chỗ chơi) | Depth exceeds preschool need; adult-first messaging consistent. |
| 4 | **Choking** (sit when eating; no small toys/coins in mouth/nose/ear) | **Missing** | Adjacent only: `khac-thuoc-l3-s1` (don’t put pill in mouth); `dien-g2-l1-s3` (bi under chair — electric/reach, not choking) | **No** sit-to-eat rule; **no** coins/small toys in mouth/nose/ear scenarios. |
| 5 | **Body safety / abuse prevention** (name body parts; swimsuit zone; No-Run-Tell; secrets about touch not OK) | **Missing** | “Bí mật” appears only for **hiding knives/medicine** (`khac-sac` / `khac-thuoc`), not body touch | Entire body-autonomy / swimsuit-zone / No-Run-Tell track **absent**. |
| 6 | **Strangers / getting lost** (no follow/gifts; name+parents+phone 5–6; stay put; ask shopkeeper/guard/mom with baby) | **Missing** (near-miss only) | `dao-pho-g1-l3` **teacherPrompt** asks “nếu bị lạc” but **situations are road focus**, not lost protocol; `dien-g5-l4-s4` (người lạ + dây điện → chỉ tới bảo vệ) | **No** refuse follow/gifts; **no** memorize name/phone; **no** stay-put / safe helper (shopkeeper, mom with baby). PII note: phone practice should stay offline / with adult — still content gap. |
| 7 | **Fire + help numbers** (no matches; yell **Cháy** + exit with teacher; 114; 111 for 5–6) | **Partial** | Matches: `khac-chay-l2-s1`–`s5`; Exit with adult: `khac-chay-l3-s2`–`s4`; 114 via adult: `khac-chay-l4-s3`, `khac-chay-l4-s5` | Report smoke to adult (`khac-chay-l3-s1`: “Cháu thấy mùi khói”) — **not** cue **“Cháy!”**. **111 child protection: Missing.** Exit is home drill with parent, weak “with teacher at school” framing. |
| 8 | **Animals + play** (no tease strange pets; queue slide/swing, no push) | **Missing** / thin | Dog near wire: `dien-g4-l3-s4`; Cat in fire drill: `khac-chay-l4-s4`; Push on stairs: `khac-nga-l3-s2`; Pool push: `nuoc-l3-s3` | **No** strange-pet tease rule; **no** cầu trượt / xích đu queue. Push covered only at pool/stairs, not playground equipment. |

---

## MISSING LIST (concrete gaps vs checklist)

- Phrase **“Cứu với”** when someone is in water trouble (only generic “hô to gọi người lớn” — `nuoc-l5-s3`).
- **Open-water float/phao grab** as “if available” near shore (phao is boat/đò focused).
- Traffic: **đèn vàng** meaning (3 colors); preschool-simple “red = stop / green = go with adult.”
- **Locked in car:** bấm còi + gõ kính gọi người lớn.
- **Choking:** ngồi khi ăn; không cho đồ nhỏ/đồng xu vào miệng–mũi–tai.
- **Body safety:** tên bộ phận; vùng áo tắm riêng tư; **No – Run – Tell**; bí mật về chạm cơ thể = không OK.
- **Strangers / lost:** không đi theo / nhận quà; biết tên + tên bố mẹ + SĐT (luyện với người lớn, không thu PII trong app); ở yên; hỏi người bán / bảo vệ / mẹ đang bế em bé.
- Fire cue **“Cháy!”** + thoát cùng **cô giáo** (school).
- Help number **111** (bảo vệ trẻ) for ages ~5–6, via adult — currently only **114**.
- **Animals:** không trêu thú lạ / thú người khác.
- **Playground:** xếp hàng cầu trượt / xích đu; không đẩy.
- **Dedicated parent section** stating adult = primary shield (see PARENT SECTION).
- **Age fit:** much `dao-pho` g3–g5 and dense `dien` g4–g5 content is beyond preschool 3–6 scope if this checklist is the product brief.

---

## SHOULD-DO FRAMING (“nên làm” vs pure ban)

**Estimate (375 safeTexts):**

| Pattern | Count | Share |
|---|---:|---:|
| Action-led (“Chờ / Gọi / Báo / Nhờ / Nắm / Đứng / Ở / Đi…”) | ~212 | ~57% |
| Starts with **Không / Đừng** (often still adds action) | ~95 | ~25% |
| Framing script: positive/action ~248; ban-only ~7; ban+action mixed ~88; other ~32 | — | — |

**Overall:** Majority teach a **do-action** (call adult, stand away, hold hand). About **1 in 4** lead with prohibition; many of those still append a positive step (mixed). Prefer rewriting ban-leads to lead with the action for preschool.

### 5 good “nên làm” examples

| ID | safeText |
|---|---|
| `nuoc-l1-s1` | Chờ bố mẹ hoặc người lớn đến cùng rồi mới tắm. |
| `dao-pho-g1-l2-s1` | Dừng ở nơi chờ an toàn, nắm tay Mẹ Gấu và đợi tín hiệu phù hợp. |
| `khac-chay-l1-s2` | Nhờ người lớn rót giúp và đứng cách xa phích. |
| `nuoc-l5-s3` | Ở trên bờ. Hô to gọi người lớn đến giúp. Không nhảy xuống. |
| `khac-chay-l3-s4` | Đi theo lối mẹ chỉ trong buổi tập, nắm tay Mẹ Gấu. |

### 5 weaker (ban-led or ban-heavy) examples

| ID | safeText |
|---|---|
| `nuoc-l1-s2` | Không cúi vào chum. Gọi người lớn đến đậy nắp lại. *(action second — better: “Gọi người lớn đậy nắp; đứng xa, không cúi.”)* |
| `dao-pho-g1-l3-s3` | Không đeo tai nghe khi đang đi trên đường; chú ý người lớn và xe cộ. *(mostly ban; preschool-low priority anyway)* |
| `khac-chay-l2-s1` | Không cầm; đi tìm người lớn tin cậy để họ cất. |
| `khac-nga-l2-s1` | Không kê ghế sát cửa sổ; nhờ người lớn nếu muốn nhìn. |
| `khac-thuoc-l3-s1` | Không bỏ vào miệng. Gọi người lớn hỏi và nhờ cất. |

---

## PARENT SECTION

| Check | Result |
|---|---|
| Schema `parentNote` / parent-facing block per lesson | **Missing** |
| `teacherPrompt` on every lesson (75/75) | **Present** — used in UI as class discussion prompt (`src/ui.mjs` → `#classPrompt`) |
| Finish disclaimer (adult + not expert-approved) | **Present** — `finishSafetyNote`: “Ngoài đời, luôn cùng người lớn. Game chưa thay giám sát thật và chưa được chuyên gia duyệt.” |
| Adult as primary shield in safe paths | **Strong** — ~348/375 `safeText` mention adult / Mẹ Gấu / cô / bảo vệ |
| Explicit “skills support adult only” parent primer | **Missing** as a named parent section |

**Verdict:** Adult-shield **practice** is embedded; a clear **parent section** (why adult is the shield, what to rehearse at home, what game is *not*) is **not** present as content field.

---

## PEDAGOGY CHECK (short)

| Criterion | Verdict |
|---|---|
| Adult primary shield; child skills support only | **Mostly yes** in answers; **parent note absent** |
| One rule per short session | **Partial** — each lesson has 1 theme but 5 situations + multi-clause objectives (~54/75); fine for elementary companion, heavy for one preschool sitting |
| Prefer “what TO do” over bans only | **Mostly yes** (~57% action-led; ~25% ban-led) |
| No fearmongering / blood / scary threats | **OK** on approved copy |
| Image + action format | **OK** for this game (situation → 3 choices → feedback) |

---

## DEVIATIONS / BLOCKERS

1. **Audience mismatch:** Checklist = preschool **3–6**; shipped content = **lớp 1–5** ATGT port + tiểu học home modules. Using full curriculum “as preschool priority pack” overshoots.
2. **Priority gaps:** Body safety, choking, strangers/lost, playground/animals, locked-car, “Cứu với”, đèn vàng, 111 — not inventable as “approved safety” without parent content decision (and later expert review per project rules).
3. **`dao-pho-g1-l3` teacherPrompt** asks about getting lost but situations do not teach lost protocol — prompt/content mismatch.
4. **Do not claim** this audit = chuyên gia / official preschool curriculum approval (`AGENTS.md` / `APPROVED.md` already: prototype only).

---

## NEXT_FOR_PARENT (prioritized content adds — keep preschool scope)

Do **not** invent expert approval; treat as draft backlog for parent to authorize writers.

1. **P0 — Body safety (1 short lesson, 5 sits):** swimsuit zone private; No–Run–Tell; secrets about touch not OK; always tell trusted adult. Calm language, no graphic detail.
2. **P0 — Strangers / lost (1 lesson):** refuse follow & gifts; stay put; ask shopkeeper / guard / mom with baby; name + parent names (+ phone only offline with adult). Fix or replace `dao-pho-g1-l3` prompt mismatch.
3. **P0 — Choking (1 lesson):** sit when eating; nothing small in mouth/nose/ear; call adult if someone chokes (no DIY first-aid steps beyond “get adult”).
4. **P1 — Drown cue polish:** add **“Cứu với”** + stay shore + get adult (`nuoc-l5-s3` variant); optional float-if-available sit without teaching child water rescue.
5. **P1 — Traffic preschool strip:** 3 light colors including **vàng**; hold hand; helmet + sit still on moto; ball stays off road; **locked car** horn + tap glass. Keep out of g4–g5 ATGT depth for this age pack.
6. **P1 — Fire/school exit:** yell **“Cháy!”** + exit with **teacher**; keep 114 via adult; add **111** mention for ~5–6 via adult only (no solo dialing).
7. **P2 — Animals + playground:** don’t tease strange pets; queue for slide/swing, no push.
8. **P2 — Parent section:** add `parentNote` (or hub screen): adult = primary shield; game = rehearsal only; unfinished expert review; no PII collection.
9. **P2 — Framing pass:** rewrite ~95 ban-led `safeText` to lead with the action for preschool listenability.
10. **Scope decision:** either (A) label a **preschool subset** of existing modules + new P0/P1 lessons, or (B) keep full 75-lesson elementary set and treat preschool checklist as a **separate track** — avoid implying all 375 sits are 3–6 priorities.

---

## FILES

- Report: `qa/QA_PRESCHOOL_PRIORITY_GAP.md` (this file)
- Corpus: `content/approved/nuoc.mjs`, `dien-g12.mjs`, `dien-g35.mjs`, `khac-ab.mjs`, `khac-cd.mjs`, `atgt-dao-pho.mjs`
- Index: `src/curriculum.mjs`
- Helper used for counts: `qa/_audit-preschool-priority.mjs` (optional; can delete)

---

## STATUS block (for parent agent)

```
STATUS: PARTIAL
SCOPE: Audit Bé Gấu An Toàn approved curriculum vs preschool 3–6 8-priority checklist + pedagogy
DONE: Coverage matrix 8/8; missing list; framing estimate; parent-section check; NEXT_FOR_PARENT backlog
FILES: qa/QA_PRESCHOOL_PRIORITY_GAP.md; qa/_audit-preschool-priority.mjs
DEVIATIONS: Content age = lớp 1–5 not preschool; no parentNote field; body/choking/strangers/playground/111/Cứu với/locked-car/đèn vàng gaps
BLOCKERS: Parent must authorize new preschool modules; expert approval still out of scope
NEXT_FOR_PARENT: P0 body + strangers/lost + choking; P1 drown cue / traffic strip / fire+111; P2 animals-play + parentNote + ban-lead rewrite; decide preschool subset vs separate track
```
