import {
  CheckCircle2,
  Clock3,
  LoaderCircle,
  PackageCheck,
  Truck,
} from "lucide-react";

import type { OrderStatus } from "@/types/commerce";

export default function OrderStatusBadge({ status }: { status: OrderStatus }) {
  const configs = {
    placed: {
      label: "Placed",
      icon: CheckCircle2,
      className: "bg-[var(--secondary)] text-[var(--primary)]",
    },

    pending: {
      label: "Pending",
      icon: Clock3,
      className: "bg-[var(--secondary)] text-[#4a7a62]",
    },

    paid: {
      label: "Paid",
      icon: CheckCircle2,
      className: "bg-[var(--secondary)] text-[var(--primary)]",
    },

    processing: {
      label: "Processing",
      icon: LoaderCircle,
      className: "bg-[var(--secondary)] text-[#517a66]",
    },

    shipped: {
      label: "Shipped",
      icon: Truck,
      className: "bg-[var(--secondary)] text-[var(--primary)]",
    },

    delivered: {
      label: "Delivered",
      icon: PackageCheck,
      className: "bg-[#dff7e9] text-[#2f9a55]",
    },

    cancelled: {
      label: "Cancelled",
      icon: Clock3,
      className: "bg-[#f3f4f6] text-[#6b7280]",
    },

    refunded: {
      label: "Refunded",
      icon: CheckCircle2,
      className: "bg-[var(--secondary)] text-[var(--primary)]",
    },
  };

  const config = configs[status];
  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold ${config.className}`}
    >
      <Icon size={12} strokeWidth={2} />

      {config.label}
    </span>
  );
}
