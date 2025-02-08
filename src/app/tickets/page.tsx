import Link from "next/link";

import { initialTickets } from "@/data";
import { ticketPath } from "@/paths";

const TICKET_ICONS = {
  OPEN: "O",
  IN_PROGRESS: ">",
  DONE: "X",
};

const TicketsPage = () => {
  return (
    <div>
      {initialTickets.map((ticket) => (
        <div key={ticket.id}>
          <h2 className="text-lg">{ticket.title}</h2>
          <div>{TICKET_ICONS[ticket.status]}</div>
          <Link
            href={ticketPath(ticket.id.toString())}
            className="text-sm underline"
          >
            View
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TicketsPage;
