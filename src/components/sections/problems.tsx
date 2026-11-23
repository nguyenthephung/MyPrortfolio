"use client";

import { useEffect, useRef, useState } from "react";
import { highlights } from "@/lib/data/experiences";

const designPrinciples = [
  {
    num: "01",
    rule: "Core is the balance source of truth",
    mechanism: "Conditional update WHERE balance >= ?; lock ascending account IDs",
  },
  {
    num: "02",
    rule: "Write-ahead intent before network I/O",
    mechanism: "TX1 commits PROCESSING + outbox_event before calling Core ESB",
  },
  {
    num: "03",
    rule: "Timeout ≠ Failure",
    mechanism: "Return HTTP 202 PENDING_VERIFY + externalRef; never blind-retry writes",
  },
  {
    num: "04",
    rule: "DB-backed idempotency at every tier",
    mechanism: "Oracle UNIQUE(user_id, idem_key) + request_hash (422 on mismatch)",
  },
  {
    num: "05",
    rule: "Decouple side-effects via Outbox → Kafka",
    mechanism: "key = transferId (avoids merchant hot partitions); @RetryableTopic → DLT",
  },
  {
    num: "06",
    rule: "Trust, but reconcile (3 tiers)",
    mechanism: "Real-time SKIP LOCKED inquiry · T+0 Spring Batch · Ledger invariants",
  },
  {
    num: "07",
    rule: "Short DB transactions (Little's Law)",
    mechanism: "Split TX1/TX2 (10ms) → ~40 DB conns @ 2k TPS vs 600 if held across ESB",
  },
  {
    num: "08",
    rule: "Intentional limits & load shedding",
    mechanism: "Deadlines 10s > 8s > 6s; Bulkhead maxWait=0; shed P2 history to protect P0",
  },
];

function IdempotencyWriteAheadDiagram() {
  return (
    <div className="flex h-full flex-col justify-between p-5 font-mono text-[13px]">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-2.5">
        <span className="font-medium text-foreground">
          FIG 02.1 · WRITE-AHEAD TX1/TX2 SPLIT & DB IDEMPOTENCY
        </span>
        <span className="rounded-[4px] bg-primary/12 px-2 py-0.5 text-primary">
          Oracle · Redisson · Little&apos;s Law
        </span>
      </div>

      <svg
        viewBox="0 0 600 245"
        className="my-3 h-auto w-full"
        role="img"
        aria-label="Two-phase transaction split: TX1 claims idempotency key in Oracle and commits PROCESSING plus outbox_event, releases DB connection during the 300ms Core ESB call, and commits TX2 upon response"
      >
        {/* Top sync pipeline arrows */}
        <path
          d="M 186 72 L 214 72"
          stroke="var(--p-accent)"
          strokeWidth="2"
          fill="none"
          className="diagram-pulse"
        />
        <path
          d="M 386 72 L 414 72"
          stroke="var(--p-accent)"
          strokeWidth="2"
          fill="none"
          className="diagram-pulse"
        />

        {/* TX1 Box */}
        <rect
          x="14"
          y="30"
          width="172"
          height="86"
          rx="4"
          fill="var(--p-bg)"
          stroke="var(--p-accent)"
          strokeWidth="1.75"
        />
        <text x="24" y="52" fill="var(--p-accent)" fontSize="10.5" fontWeight="600">
          1. TX1 COMMIT (~5ms)
        </text>
        <text x="24" y="69" fill="var(--p-ink)" fontSize="9.5">
          INSERT idempotency_key
        </text>
        <text x="24" y="84" fill="var(--p-ink)" fontSize="9.5">
          INSERT transfer(PROCESSING)
        </text>
        <text x="24" y="99" fill="var(--p-muted)" fontSize="9">
          + outbox_event · release conn
        </text>

        {/* Core ESB Call (No DB conn held) */}
        <rect
          x="214"
          y="30"
          width="172"
          height="86"
          rx="4"
          fill="var(--p-bg)"
          stroke="var(--p-ink)"
          strokeWidth="1.25"
        />
        <text x="224" y="52" fill="var(--p-ink)" fontSize="10.5" fontWeight="600">
          2. CORE ESB (~300ms)
        </text>
        <text x="224" y="69" fill="var(--p-ink)" fontSize="9.5">
          0 DB connections held
        </text>
        <text x="224" y="84" fill="var(--p-muted)" fontSize="9.5">
          X-External-Ref: ULID
        </text>
        <text x="224" y="99" fill="var(--p-muted)" fontSize="9">
          Lock acct IDs asc · ACID
        </text>

        {/* TX2 Box */}
        <rect
          x="414"
          y="30"
          width="172"
          height="86"
          rx="4"
          fill="var(--p-bg)"
          stroke="var(--p-accent)"
          strokeWidth="1.75"
        />
        <text x="424" y="52" fill="var(--p-accent)" fontSize="10.5" fontWeight="600">
          3. TX2 COMMIT (~5ms)
        </text>
        <text x="424" y="69" fill="var(--p-ink)" fontSize="9.5">
          UPDATE status, version+1
        </text>
        <text x="424" y="84" fill="var(--p-ink)" fontSize="9.5">
          idem_key → COMPLETED
        </text>
        <text x="424" y="99" fill="var(--p-muted)" fontSize="9">
          + outbox (noti + audit)
        </text>

        {/* Bottom specification boxes: Idempotency & Little's Law */}
        <rect
          x="14"
          y="138"
          width="276"
          height="84"
          rx="4"
          fill="var(--p-surface)"
          stroke="var(--p-line-strong)"
          strokeWidth="1"
        />
        <text x="26" y="160" fill="var(--p-ink)" fontSize="10.5" fontWeight="600">
          IDEMPOTENCY RESOLUTION (ORACLE PK)
        </text>
        <text x="26" y="178" fill="var(--p-muted)" fontSize="9.5">
          • Same key + same hash → 200 cached response
        </text>
        <text x="26" y="193" fill="var(--p-muted)" fontSize="9.5">
          • Same key + diff hash → 422 Unprocessable
        </text>
        <text x="26" y="208" fill="var(--p-muted)" fontSize="9.5">
          • Concurrent IN_PROGRESS → 409 / 202 poll
        </text>

        <rect
          x="310"
          y="138"
          width="276"
          height="84"
          rx="4"
          fill="var(--p-surface)"
          stroke="var(--p-line-strong)"
          strokeWidth="1"
        />
        <text x="322" y="160" fill="var(--p-accent)" fontSize="10.5" fontWeight="600">
          LITTLE&apos;S LAW POOL SIZING (2,000 TPS)
        </text>
        <text x="322" y="178" fill="var(--p-ink)" fontSize="9.5">
          • Hold across 300ms ESB: 2k × 0.3s = 600 conn
        </text>
        <text x="322" y="193" fill="var(--p-ink)" fontSize="9.5">
          • Split TX1+TX2 (20ms): 2k × 0.02s = 40 conn
        </text>
        <text x="322" y="208" fill="var(--p-muted)" fontSize="9.5">
          • HikariCP: 10 conn/pod × 15 pods = 150 total
        </text>
      </svg>

      <div className="grid grid-cols-3 gap-2 border-t border-border pt-3 text-[12.5px]">
        <div>
          <span className="text-muted-foreground">Key format:</span>{" "}
          <span className="font-medium text-foreground">ULID / UUIDv7</span>
        </div>
        <div>
          <span className="text-muted-foreground">Source lock:</span>{" "}
          <span className="font-medium text-foreground">Redisson → @Version</span>
        </div>
        <div>
          <span className="text-muted-foreground">DB pool drop:</span>{" "}
          <span className="font-medium text-primary">600 → 40 active conns</span>
        </div>
      </div>
    </div>
  );
}

function TimeoutReconcileDiagram() {
  return (
    <div className="flex h-full flex-col justify-between p-5 font-mono text-[13px]">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-2.5">
        <span className="font-medium text-foreground">
          FIG 02.2 · TIMEOUT CLASSIFICATION, SKIP LOCKED & T+0 RECON
        </span>
        <span className="rounded-[4px] bg-primary/12 px-2 py-0.5 text-primary">
          Resilience4j · Spring Batch
        </span>
      </div>

      <svg
        viewBox="0 0 600 245"
        className="my-3 h-auto w-full"
        role="img"
        aria-label="Timeout handling and reconciliation: Resilience4j classifies pre-send breaker/bulkhead rejects as safe 503 vs post-send timeouts as HTTP 202 PENDING_VERIFY, followed by SKIP LOCKED polling and T+0 Spring Batch matching"
      >
        <path
          d="M 164 60 L 210 60"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
        />
        <path
          d="M 164 95 L 210 135"
          stroke="var(--p-accent)"
          strokeWidth="2"
          fill="none"
          className="diagram-pulse"
        />
        <path
          d="M 386 135 L 420 135"
          stroke="var(--p-accent)"
          strokeWidth="2"
          fill="none"
          className="diagram-pulse"
        />

        {/* ESB Call node */}
        <rect
          x="14"
          y="42"
          width="150"
          height="74"
          rx="4"
          fill="var(--p-bg)"
          stroke="var(--p-ink)"
          strokeWidth="1.25"
        />
        <text x="24" y="65" fill="var(--p-ink)" fontSize="10.5" fontWeight="600">
          ESB CALL (6s)
        </text>
        <text x="24" y="82" fill="var(--p-muted)" fontSize="9.5">
          Bulkhead: 60 calls/pod
        </text>
        <text x="24" y="97" fill="var(--p-muted)" fontSize="9.5">
          maxWaitDuration: 0
        </text>

        {/* Branch A: Not sent */}
        <rect
          x="210"
          y="24"
          width="176"
          height="64"
          rx="4"
          fill="var(--p-surface)"
          stroke="var(--p-line-strong)"
          strokeWidth="1"
        />
        <text x="222" y="46" fill="var(--p-ink)" fontSize="10.5" fontWeight="600">
          BREAKER OPEN / FULL
        </text>
        <text x="222" y="62" fill="var(--p-muted)" fontSize="9.5">
          Definitely not sent to Core
        </text>
        <text x="222" y="76" fill="var(--p-ink)" fontSize="9.5">
          → Safe FAILED (503 Retry-After)
        </text>

        {/* Branch B: Ambiguous timeout */}
        <rect
          x="210"
          y="102"
          width="176"
          height="72"
          rx="4"
          fill="var(--p-bg)"
          stroke="var(--p-accent)"
          strokeWidth="1.75"
        />
        <text x="222" y="124" fill="var(--p-accent)" fontSize="10.5" fontWeight="600">
          TIMEOUT / I/O DROP
        </text>
        <text x="222" y="140" fill="var(--p-ink)" fontSize="9.5">
          Outcome unknown → HTTP 202
        </text>
        <text x="222" y="156" fill="var(--p-muted)" fontSize="9">
          status = PENDING_VERIFY
        </text>

        {/* Reconciler SKIP LOCKED */}
        <rect
          x="420"
          y="96"
          width="166"
          height="84"
          rx="4"
          fill="var(--p-bg)"
          stroke="var(--p-ink)"
          strokeWidth="1.25"
        />
        <text x="430" y="118" fill="var(--p-ink)" fontSize="10.5" fontWeight="600">
          RECONCILER × N PODS
        </text>
        <text x="430" y="135" fill="var(--p-accent)" fontSize="9.5">
          FOR UPDATE SKIP LOCKED
        </text>
        <text x="430" y="150" fill="var(--p-muted)" fontSize="9">
          Backoff: 5s → 15s → 15m
        </text>
        <text x="430" y="165" fill="var(--p-muted)" fontSize="9">
          10m window → MANUAL_REVIEW
        </text>

        {/* T+0 EOD Batch Bar */}
        <rect
          x="14"
          y="190"
          width="572"
          height="42"
          rx="4"
          fill="var(--p-surface)"
          stroke="var(--p-ink)"
          strokeWidth="1"
        />
        <text x="26" y="208" fill="var(--p-ink)" fontSize="10" fontWeight="600">
          T+0 EOD SPRING BATCH RECON (5,000-ROW CHUNKS · HASH PARTITIONED BY externalRef)
        </text>
        <text x="26" y="223" fill="var(--p-muted)" fontSize="9.5">
          Classifies: MATCHED (&gt;99.99%) · MISSING_AT_CORE · MISSING_AT_US (4h SLA) · AMOUNT_MISMATCH · TIMING (T±1)
        </text>
      </svg>

      <div className="grid grid-cols-3 gap-2 border-t border-border pt-3 text-[12.5px]">
        <div>
          <span className="text-muted-foreground">Concurrency:</span>{" "}
          <span className="font-medium text-foreground">SKIP LOCKED (no ShedLock)</span>
        </div>
        <div>
          <span className="text-muted-foreground">Deadlines:</span>{" "}
          <span className="font-medium text-foreground">GW 10s &gt; App 8s &gt; ESB 6s</span>
        </div>
        <div>
          <span className="text-muted-foreground">Reversal ref:</span>{" "}
          <span className="font-medium text-primary">Idempotent REV-&#123;id&#125;</span>
        </div>
      </div>
    </div>
  );
}

function OutboxKafkaAuditDiagram() {
  const lanes = [
    { y: 38, name: "noti-push / sms / email", group: "@RetryableTopic → DLT" },
    { y: 88, name: "noti-ws + user_inbox", group: "Redis presence:{uid} → node" },
    { y: 138, name: "audit-writer (SHA-256)", group: "hash(n) = SHA256(h(n-1)+rec)" },
    { y: 188, name: "S3 Object Lock (WORM)", group: "KMS hourly checkpoint · 5–10y" },
  ];

  return (
    <div className="flex h-full flex-col justify-between p-5 font-mono text-[13px]">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-2.5">
        <span className="font-medium text-foreground">
          FIG 02.3 · TRANSACTIONAL OUTBOX, KAFKA & WORM HASH-CHAIN AUDIT
        </span>
        <span className="rounded-[4px] bg-primary/12 px-2 py-0.5 text-primary">
          key = transferId
        </span>
      </div>

      <svg
        viewBox="0 0 600 240"
        className="my-3 h-auto w-full"
        role="img"
        aria-label="Transactional outbox relay to Kafka cluster and 4 downstream pipelines including notification consumers, user_inbox WebSocket routing, and SHA-256 hash-chained WORM audit storage"
      >
        {lanes.map((lane) => (
          <g key={lane.name}>
            <path
              d={`M 366 115 L 408 ${lane.y}`}
              stroke="currentColor"
              strokeOpacity="0.22"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d={`M 366 115 L 408 ${lane.y}`}
              stroke="var(--p-accent)"
              strokeWidth="2"
              fill="none"
              className="diagram-pulse"
            />
            <rect
              x="408"
              y={lane.y - 20}
              width="178"
              height="40"
              rx="4"
              fill="var(--p-bg)"
              stroke="var(--p-ink)"
              strokeWidth="1.2"
            />
            <text
              x="418"
              y={lane.y - 3}
              fill="var(--p-ink)"
              fontSize="10"
              fontWeight="600"
            >
              {lane.name}
            </text>
            <text x="418" y={lane.y + 12} fill="var(--p-muted)" fontSize="9">
              {lane.group}
            </text>
          </g>
        ))}

        <path
          d="M 168 115 L 200 115"
          stroke="var(--p-accent)"
          strokeWidth="2"
          fill="none"
          className="diagram-pulse"
        />

        <rect
          x="14"
          y="68"
          width="154"
          height="94"
          rx="4"
          fill="var(--p-bg)"
          stroke="var(--p-ink)"
          strokeWidth="1.25"
        />
        <text x="24" y="90" fill="var(--p-ink)" fontSize="10.5" fontWeight="600">
          OUTBOX_EVENT (DB)
        </text>
        <text x="24" y="107" fill="var(--p-muted)" fontSize="9.5">
          Same TX as transfer
        </text>
        <text x="24" y="122" fill="var(--p-muted)" fontSize="9.5">
          Daily range partition
        </text>
        <text x="24" y="137" fill="var(--p-ink)" fontSize="9">
          CDC / ORA_HASH shard
        </text>

        <rect
          x="200"
          y="68"
          width="166"
          height="94"
          rx="4"
          fill="var(--p-bg)"
          stroke="var(--p-accent)"
          strokeWidth="1.75"
        />
        <text x="212" y="90" fill="var(--p-accent)" fontSize="10.5" fontWeight="600">
          KAFKA (RF=3, ISR=2)
        </text>
        <text x="212" y="107" fill="var(--p-ink)" fontSize="9.5">
          transfer.events (24p)
        </text>
        <text x="212" y="122" fill="var(--p-ink)" fontSize="9.5">
          audit.events (12p)
        </text>
        <text x="212" y="137" fill="var(--p-muted)" fontSize="9">
          acks=all · idempotent
        </text>
      </svg>

      <div className="grid grid-cols-3 gap-2 border-t border-border pt-3 text-[12.5px]">
        <div>
          <span className="text-muted-foreground">Partition key:</span>{" "}
          <span className="font-medium text-foreground">transferId (no hot key)</span>
        </div>
        <div>
          <span className="text-muted-foreground">Inbox truth:</span>{" "}
          <span className="font-medium text-foreground">GET /inbox?since=ULID</span>
        </div>
        <div>
          <span className="text-muted-foreground">Tamper check:</span>{" "}
          <span className="font-medium text-primary">Nightly WORM verifier</span>
        </div>
      </div>
    </div>
  );
}

function MakerCheckerMicroFrontendDiagram() {
  const remotes = [
    "teller-xfer",
    "teller-cash",
    "teller-approvals",
    "teller-cif",
    "teller-fx",
    "teller-cards",
    "teller-loans",
    "teller-vault",
    "teller-reports",
    "teller-audit",
    "teller-admin",
  ];

  return (
    <div className="flex h-full flex-col justify-between p-5 font-mono text-[13px]">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-2.5">
        <span className="font-medium text-foreground">
          FIG 02.4 · MAKER-CHECKER STATE MACHINE & 11 NX MICRO-FRONTENDS
        </span>
        <span className="rounded-[4px] bg-primary/12 px-2 py-0.5 text-primary">
          Redisson + @Version · Angular Nx
        </span>
      </div>

      <div className="my-3 space-y-3">
        {/* Maker-checker lifecycle box */}
        <div className="rounded-[4px] border border-primary/40 bg-primary/6 p-3">
          <div className="flex flex-wrap items-center justify-between gap-2 text-[12px]">
            <span className="font-medium text-primary">
              MAKER-CHECKER LIFECYCLE (COUNTER / HIGH-VALUE)
            </span>
            <span className="text-muted-foreground">
              Redisson approval:&#123;id&#125; + @Version CAS
            </span>
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[12px] text-foreground">
            <span className="rounded-[3px] border border-border bg-background px-2 py-0.5">
              DRAFT
            </span>
            <span>→</span>
            <span className="rounded-[3px] border border-border bg-background px-2 py-0.5">
              SUBMITTED
            </span>
            <span>→</span>
            <span className="rounded-[3px] border border-primary/40 bg-background px-2 py-0.5 font-medium text-primary">
              PENDING_APPROVAL (maker ≠ checker)
            </span>
            <span>→</span>
            <span className="rounded-[3px] border border-emerald-700/30 bg-emerald-500/10 px-2 py-0.5 font-medium">
              APPROVED → Sync Transfer
            </span>
          </div>
        </div>

        {/* 11 Micro-frontends federation grid */}
        <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-4">
          {remotes.map((r, i) => (
            <div
              key={r}
              className="flex items-center justify-between rounded-[4px] border border-border bg-background px-2.5 py-1.5 text-[12px]"
            >
              <span className="truncate text-foreground">{r}</span>
              <span className="text-muted-foreground">#{i + 1}</span>
            </div>
          ))}
          <div className="flex items-center justify-between rounded-[4px] border border-primary/40 bg-primary/10 px-2.5 py-1.5 text-[12px] font-medium text-primary">
            <span>PII log mask</span>
            <span>OWASP</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 border-t border-border pt-3 text-[12.5px]">
        <div>
          <span className="text-muted-foreground">Simultaneous click:</span>{" "}
          <span className="font-medium text-foreground">1 wins, 1 gets 409</span>
        </div>
        <div>
          <span className="text-muted-foreground">UI architecture:</span>{" "}
          <span className="font-medium text-foreground">11 federated remotes</span>
        </div>
        <div>
          <span className="text-muted-foreground">Audit:</span>{" "}
          <span className="font-medium text-primary">Outbox in same TX</span>
        </div>
      </div>
    </div>
  );
}

const diagrams = [
  IdempotencyWriteAheadDiagram,
  TimeoutReconcileDiagram,
  OutboxKafkaAuditDiagram,
  MakerCheckerMicroFrontendDiagram,
];

export function Problems() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const els = itemRefs.current.filter(Boolean) as HTMLDivElement[];
    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-chapter-index"));
            if (!Number.isNaN(idx)) {
              setActiveIndex(idx);
            }
          }
        });
      },
      {
        rootMargin: "-30% 0px -45% 0px",
        threshold: 0.1,
      }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const ActiveDiagram =
    diagrams[activeIndex] ?? IdempotencyWriteAheadDiagram;

  return (
    <section
      id="problems"
      data-moment="pinned-chapters"
      className="relative border-t border-border bg-muted/40 py-16 md:py-24"
    >
      <div className="wrap">
        {/* Running head */}
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4 border-b border-border pb-3 font-mono text-[13px] text-muted-foreground tabular-nums">
          <div className="flex items-center gap-3">
            <span className="font-medium text-foreground">§02</span>
            <span className="text-foreground">
              Production architecture & system design blueprint
            </span>
          </div>
          <span>Sync money plane · Async Kafka outbox plane · T+0 Recon</span>
        </div>

        <div className="mb-10 md:mb-12">
          <h2 className="max-w-4xl text-[30px] font-normal leading-[1.08] tracking-[-0.03em] text-foreground md:text-[44px]">
            Problems solved & core transfer architecture.{" "}
            <span className="text-muted-foreground">
              Two decoupled planes where money moves on a short synchronous path and everything else flows through events.
            </span>
          </h2>
          <p className="mt-3 max-w-[68ch] text-[16px] leading-[1.6] text-muted-foreground">
            Combining hands-on modules shipped on Eximbank&apos;s Teller Platform with my end-to-end reference blueprint for high-throughput internal fund transfers.
          </p>
        </div>

        {/* Pinned-chapters layout: 4 chapters on the left, sticky diagram frame on the right */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="divide-y divide-border border-y border-border lg:col-span-5">
            {highlights.map((h, i) => {
              const isCurrent = activeIndex === i;
              const MobileDiagram =
                diagrams[i] ?? IdempotencyWriteAheadDiagram;
              return (
                <div
                  key={h.title}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  data-chapter-index={i}
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => setActiveIndex(i)}
                  className="cursor-pointer py-6 transition-colors"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-3">
                      <span
                        className={`font-mono text-[13px] font-medium tabular-nums ${
                          isCurrent ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        02.{i + 1}
                      </span>
                      <h3
                        className={`text-[20px] font-medium leading-[1.25] tracking-[-0.015em] md:text-[22px] ${
                          isCurrent ? "text-foreground" : "text-foreground/75"
                        }`}
                      >
                        {h.title}
                      </h3>
                    </div>
                    <span
                      className={`shrink-0 font-mono text-[13px] ${
                        isCurrent ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {isCurrent ? "ACTIVE" : `FIG 02.${i + 1}`}
                    </span>
                  </div>

                  <p className="mt-2.5 pl-9 text-[15.5px] leading-[1.6] text-muted-foreground">
                    {h.description}
                  </p>

                  <p className="mt-3 pl-9 font-mono text-[13px] text-foreground/80">
                    {h.tags.join(" · ")}
                  </p>

                  {/* Inline diagram on mobile/tablet below lg */}
                  <div className="mt-4 overflow-hidden rounded-[6px] border border-border bg-background lg:hidden">
                    <MobileDiagram />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sticky diagram frame on desktop */}
          <div className="hidden lg:col-span-7 lg:sticky lg:top-28 lg:block">
            <div className="min-h-[390px] overflow-hidden rounded-[6px] border border-border bg-background shadow-xs">
              <ActiveDiagram />
            </div>
          </div>
        </div>

        {/* 8 Core Banking Design Principles Ledger (from Section 3.2 of the blueprint) */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2 font-mono text-[13px] text-muted-foreground">
            <span className="font-medium text-foreground">
              §02.5 · Eight invariants for high-concurrency banking transfers
            </span>
            <span>Two-plane reference specification</span>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[6px] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {designPrinciples.map((p) => (
              <div
                key={p.num}
                className="flex flex-col justify-between bg-background p-4"
              >
                <div>
                  <div className="font-mono text-[12px] font-medium text-primary tabular-nums">
                    RULE {p.num}
                  </div>
                  <div className="mt-1 text-[15px] font-medium leading-snug text-foreground">
                    {p.rule}
                  </div>
                </div>
                <p className="mt-2 font-mono text-[12px] leading-relaxed text-muted-foreground">
                  {p.mechanism}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
