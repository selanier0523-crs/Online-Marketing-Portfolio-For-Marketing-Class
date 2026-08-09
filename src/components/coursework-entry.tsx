import Image from "next/image";
import type { CourseworkItem } from "@/content/portfolio";
import { PlaceholderLabel } from "./placeholder-label";

function youtubeEmbedUrl(url: string) {
  if (!url) return "";
  try {
    const parsed = new URL(url);
    const id = parsed.hostname.includes("youtu.be")
      ? parsed.pathname.slice(1)
      : parsed.searchParams.get("v") ?? parsed.pathname.split("/").pop();
    return id ? `https://www.youtube-nocookie.com/embed/${id}` : "";
  } catch {
    return "";
  }
}

function googleDocEmbedUrl(url: string) {
  if (!url) return "";
  if (url.includes("/pub?")) return url;
  return url.replace(/\/(edit|view)(\?.*)?$/, "/preview");
}

function Media({ item }: { item: CourseworkItem }) {
  if (item.media.type === "youtube") {
    const src = youtubeEmbedUrl(item.media.url);
    return src ? (
      <div className="media-frame video-frame">
        <iframe
          src={src}
          title={`${item.title} YouTube video`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    ) : (
      <MediaPlaceholder kind="YouTube video" number={item.number} />
    );
  }

  if (item.media.type === "image") {
    return item.media.src ? (
      <figure className="media-frame image-frame">
        <Image
          src={item.media.src}
          alt={item.media.alt}
          width={item.media.width}
          height={item.media.height}
          sizes="(max-width: 900px) 100vw, 58vw"
        />
      </figure>
    ) : (
      <MediaPlaceholder kind="Canva persona image" number={item.number} />
    );
  }

  const src = googleDocEmbedUrl(item.media.url);
  return src ? (
    <div className="media-frame document-frame">
      <iframe src={src} title={`${item.title} Google document`} />
    </div>
  ) : (
    <MediaPlaceholder kind="Published Google Doc" number={item.number} />
  );
}

function MediaPlaceholder({ kind, number }: { kind: string; number: string }) {
  return (
    <div className="media-placeholder" role="img" aria-label={`${kind} placeholder`}>
      <span className="placeholder-number" aria-hidden="true">{number}</span>
      <div>
        <PlaceholderLabel>Media needed</PlaceholderLabel>
        <p>{kind}</p>
        <span>This panel will be replaced by the full assignment.</span>
      </div>
    </div>
  );
}

export function CourseworkEntry({ item }: { item: CourseworkItem }) {
  return (
    <article className="coursework-entry">
      <header className="coursework-heading">
        <div>
          <span className="entry-number">Project {item.number}</span>
          <h2>{item.title}</h2>
        </div>
        <div className="coursework-meta">
          <span>{item.category}</span>
          <span>{item.courseContext}</span>
        </div>
      </header>

      <div className="coursework-media">
        <Media item={item} />
      </div>

      <div className="reflection-grid">
        <section>
          <span className="reflection-index">01</span>
          <h3>The assignment</h3>
          <p>{item.description}</p>
        </section>
        <section>
          <span className="reflection-index">02</span>
          <h3>What I did</h3>
          <p>{item.process}</p>
        </section>
        <section>
          <span className="reflection-index">03</span>
          <h3>What I learned</h3>
          <p>{item.learning}</p>
        </section>
      </div>
    </article>
  );
}
