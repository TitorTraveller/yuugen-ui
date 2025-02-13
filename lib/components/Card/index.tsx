import { card } from "./Card.css";
export const Card = ({ children }: { children: React.ReactNode }) => (
	<div className={card}>{children}</div>
);
