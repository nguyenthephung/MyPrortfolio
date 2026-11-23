"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

type TransferRow = {
  id: string;
  type: string;
  account: string;
  amount: string;
  state: "SUCCESS" | "PENDING_VERIFY" | "PROCESSING" | "APPROVED";
  trace: string;
};

const rows: TransferRow[] = [
  {
    id: "01J9ZK3PXA",
    type: "Internal 24/7 · TX2 commit",
    account: "0071 •••• 4910",
    amount: "125,000,000 VND",
    state: "SUCCESS",
    trace: "tr-4bf92f",
  },
  {
    id: "01J9ZK4B12",
    type: "Write-ahead TX1 · Outbox NEW",
    account: "0071 •••• 8821",
    amount: "42,500,000 VND",
    state: "PROCESSING",
    trace: "tr-7c10a8",
  },
  {
    id: "01J9ZK5M89",
    type: "ESB timeout · HTTP 202",
    account: "0071 •••• 1104",
    amount: "310,000,000 VND",
    state: "PENDING_VERIFY",
    trace: "tr-9f3a8e",
  },
  {
    id: "01J9ZK6W04",
    type: "Counter · Maker ≠ Checker",
    account: "0071 •••• 7732",
    amount: "890,000,000 VND",
    state: "APPROVED",
    trace: "tr-9f3b01",
  },
];

const steps = [
  {
    code: "01",
    label: "TX1 Write-ahead & Idem",
    detail: "Oracle pk_idem + outbox_event · pool released",
  },
  {
    code: "02",
    label: "ESB Bulkhead & Breaker",
    detail: "externalRef=ULID · timeout → 202 PENDING_VERIFY",
  },
  {
    code: "03",
    label: "TX2 + Outbox Relay",
    detail: "Kafka key=transferId · SHA-256 WORM audit",
  },
];

function stateChipClass(state: TransferRow["state"]) {
  switch (state) {
    case "SUCCESS":
      return "border-emerald-700/30 bg-emerald-500/12 text-emerald-900 dark:text-emerald-300";
    case "PROCESSING":
      return "border-primary/35 bg-primary/12 text-primary";
    case "PENDING_VERIFY":
      return "border-amber-700/35 bg-amber-500/15 text-amber-900 dark:text-amber-300";
    case "APPROVED":
      return "border-foreground/30 bg-foreground/8 text-foreground";
  }
}

export function TransferConsole() {
  const [visibleSteps, setVisibleSteps] = useState(3);
  const [paused, setPaused] = useState(false);
  const [cycleKey, setCycleKey] = useState(0);
  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    const clearTimers = () => {
      timersRef.current.forEach((id) => window.clearTimeout(id));
      timersRef.current = [];
    };

    if (paused) {
      clearTimers();
      setVisibleSteps(3);
      return;
    }

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const phone = window.matchMedia("(max-width: 639px)");
    if (mq.matches || phone.matches) {
      setVisibleSteps(3);
      return;
    }

    setVisibleSteps(3);
    const t0 = window.setTimeout(() => setVisibleSteps(0), 1500);
    const t1 = window.setTimeout(() => setVisibleSteps(1), 1950);
    const t2 = window.setTimeout(() => setVisibleSteps(2), 2600);
    const t3 = window.setTimeout(() => setVisibleSteps(3), 3250);
    const tLoop = window.setTimeout(() => setCycleKey((k) => k + 1), 4000);

    timersRef.current = [t0, t1, t2, t3, tLoop];
    return clearTimers;
  }, [paused, cycleKey]);

  const restartOnHover = () => {
    if (!paused) {
      setCycleKey((k) => k + 1);
    }
  };

  return (
    <div
      onMouseEnter={restartOnHover}
      role="img"
      aria-label="Teller Platform fund transfer console showing two-plane architecture: write-ahead TX1/TX2, PENDING_VERIFY reconciliation and transactional outbox"
      className="hero-sage-ground relative flex flex-col justify-between overflow-hidden rounded-[8px] border border-border p-3.5 sm:p-5 lg:p-6"
    >
      {/* Top: Main Transfer Ledger Window */}
      <div
        aria-hidden="true"
        className="flex flex-col overflow-hidden rounded-[6px] border border-border bg-background text-foreground shadow-xs"
      >
        {/* Window header bar */}
        <div className="flex items-center justify-between border-b border-border bg-muted/70 px-3.5 py-2 font-mono text-[13px] tabular-nums">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-foreground/25" />
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-foreground/25" />
            <span className="font-medium text-foreground">
              payment-transfer-service · Sync & Async Planes
            </span>
          </div>
          <span className="hidden text-muted-foreground sm:inline">
            Oracle · Resilience4j · Kafka
          </span>
        </div>

        {/* Ledger table */}
        <div className="p-3.5 sm:p-4">
          <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2 border-b border-border pb-2">
            <div className="flex items-center gap-2">
              <span className="text-[15px] font-medium text-foreground">
                Transfer state ledger (ULID)
              </span>
              <span className="rounded-[4px] border border-border bg-muted px-2 py-0.5 font-mono text-[12px] text-muted-foreground">
                TX1 / TX2 split · Outbox
              </span>
            </div>
            <span className="font-mono text-[12px] text-primary tabular-nums">
              DB pool: ~40 conn @ 2k TPS
            </span>
          </div>

          <div className="divide-y divide-border font-mono text-[13px] tabular-nums">
            {rows.map((r) => (
              <div
                key={r.id}
                className="grid grid-cols-[1fr_auto] items-center gap-2 py-2 sm:grid-cols-[100px_1fr_auto_auto] sm:gap-3"
              >
                <span className="font-medium text-foreground">{r.id}</span>
                <div className="hidden min-w-0 sm:block">
                  <div className="font-sans text-[13px] font-medium text-foreground">
                    {r.type}
                  </div>
                  <div className="text-[12px] text-muted-foreground">
                    {r.account} · {r.trace}
                  </div>
                </div>
                <span className="hidden text-right text-foreground md:inline">
                  {r.amount}
                </span>
                <span
                  className={`inline-flex items-center rounded-[4px] border px-2 py-0.5 text-[12px] font-medium ${stateChipClass(
                    r.state
                  )}`}
                >
                  {r.state}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom: Write-ahead & Outbox verification pipeline card */}
      <div
        aria-hidden="true"
        className="mt-3 hidden rounded-[6px] border border-border bg-background p-3.5 shadow-xs sm:block"
      >
        <div className="mb-2.5 flex items-center justify-between border-b border-border pb-2">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-[13px] font-medium text-foreground">
              01J9ZK3PXA · Two-Plane Transfer Execution
            </span>
            <span
              className={`rounded-[4px] px-2 py-0.5 font-mono text-[12px] font-medium transition-opacity duration-200 ${
                visibleSteps >= 3
                  ? "bg-primary text-primary-foreground opacity-100"
                  : "bg-muted text-muted-foreground opacity-80"
              }`}
            >
              {visibleSteps >= 3 ? "SUCCESS" : "IN_FLIGHT"}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-label={
              paused
                ? "Play transfer verification loop"
                : "Pause transfer verification loop"
            }
            className="inline-flex h-8 w-8 items-center justify-center rounded-[4px] border border-border bg-muted/50 text-foreground transition-colors hover:bg-muted"
          >
            {paused ? (
              <Play className="h-3.5 w-3.5" />
            ) : (
              <Pause className="h-3.5 w-3.5" />
            )}
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2.5">
          {steps.map((step, index) => {
            const active = visibleSteps > index;
            return (
              <div
                key={step.code}
                className={`rounded-[4px] border border-border bg-muted/30 p-2.5 transition-opacity duration-200 ${
                  active ? "opacity-100" : "opacity-35"
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] border border-primary/35 bg-primary/10 font-mono text-[11px] font-medium text-primary">
                    ✓
                  </span>
                  <span className="text-[13px] font-medium leading-tight text-foreground">
                    {step.label}
                  </span>
                </div>
                <div className="mt-1 font-mono text-[11.5px] leading-snug text-muted-foreground">
                  {step.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
