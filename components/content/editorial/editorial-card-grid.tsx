import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type EditorialCardItem = {
  key?: string;
  title: ReactNode;
  description: ReactNode;
  meta?: ReactNode;
  footer?: ReactNode;
};

export function EditorialCardGrid({
  items,
  className,
  dense = false,
  cardClassName,
}: {
  items: EditorialCardItem[];
  className?: string;
  dense?: boolean;
  cardClassName?: string;
}) {
  return (
    <div
      className={cn("content-grid", dense && "content-grid--dense", className)}
    >
      {items.map((item) => (
        <article
          key={
            item.key ??
            (typeof item.title === "string" ? item.title : String(item.title))
          }
          className={cn("content-card", cardClassName)}
        >
          <h3>{item.title}</h3>
          {item.meta ? <p className="content-card__meta">{item.meta}</p> : null}
          <div>{item.description}</div>
          {item.footer ? <div>{item.footer}</div> : null}
        </article>
      ))}
    </div>
  );
}
