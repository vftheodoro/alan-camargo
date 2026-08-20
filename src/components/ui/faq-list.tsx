import { Plus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <details className="faq-item" key={item.question}>
          <summary>
            <span>{item.question}</span>
            <Plus aria-hidden="true" size={20} />
          </summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
