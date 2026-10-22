import {
  CheckCircle2,
  Clock3,
  FileText,
  LoaderCircle,
  Send,
  ShieldCheck,
  Wrench,
  XCircle,
} from "lucide-react";

import type { ServiceRequestStatus } from "@/types/customer/service/customerTypes";

export default function ServiceRequestStatusBadge({
  status,
}: {
  status: ServiceRequestStatus;
}) {
  const config = configs[status];

  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-semibold ${config.className}`}
    >
      <Icon size={11} strokeWidth={2} />
      {config.label}
    </span>
  );
}

const configs = {
  NEW: {
    label: "Submitted",
    icon: Send,
    className:
      "bg-[var(--secondary)] text-[var(--primary)]",
  },

  UNDER_REVIEW: {
    label: "Under Review",
    icon: Clock3,
    className:
      "bg-[#eef2f6] text-[#5b7a6a]",
  },

  QUOTE_SENT: {
    label: "Quotation Sent",
    icon: FileText,
    className:
      "bg-[#fff1e5] text-[#a96628]",
  },

  ACCEPTED: {
    label: "Accepted",
    icon: ShieldCheck,
    className:
      "bg-[var(--secondary)] text-[var(--primary)]",
  },

  SCHEDULED: {
    label: "Scheduled",
    icon: Clock3,
    className:
      "bg-[var(--secondary)] text-[#437a5e]",
  },

  IN_PROGRESS: {
    label: "In Progress",
    icon: LoaderCircle,
    className:
      "bg-[var(--secondary)] text-[#4e7a64]",
  },

  REPORT_SUBMITTED: {
    label: "Report Ready",
    icon: Wrench,
    className:
      "bg-[var(--secondary)] text-[#6c5bb0]",
  },

  COMPLETED: {
    label: "Completed",
    icon: CheckCircle2,
    className:
      "bg-[#dff7e9] text-[#2f9a55]",
  },

  CANCELLED: {
    label: "Cancelled",
    icon: XCircle,
    className:
      "bg-[#fdeaea] text-[#bd5252]",
  },
} satisfies Record<
  ServiceRequestStatus,
  {
    label: string;
    icon: typeof Send;
    className: string;
  }
>;