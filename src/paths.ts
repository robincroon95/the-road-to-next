export const homePath = () => "/";
export const ticketsPath = () => `${homePath}tickets`;
export const ticketPath = (ticketId: string) => `${ticketsPath}/${ticketId}`;
