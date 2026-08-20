import { Clock3, ShieldCheck } from "lucide-react";
import Link from "next/link";

import { bookingPolicy } from "@/data/site";

export function BookingNote({ light = false }: { light?: boolean }) {
  return (
    <aside className={`booking-note ${light ? "is-light" : ""}`}>
      <ShieldCheck aria-hidden="true" size={24} />
      <div>
        <strong>Reserva do horário</strong>
        <p>{bookingPolicy.summary}</p>
        <Link href="/politica-de-agendamento">
          <Clock3 aria-hidden="true" size={15} />
          Ver política completa
        </Link>
      </div>
    </aside>
  );
}
