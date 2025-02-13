import { card } from "./Card.css";
const Card = ({ children }: { children: React.ReactNode }) => <div className={card}>{children}</div>;

export default Card;
