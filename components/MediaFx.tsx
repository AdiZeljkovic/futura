// Section background video inside a clipped wrapper.
// The wrapper is also the hover-zoom target on portal sections (CSS).
export default function MediaFx({ src, poster }: { src: string; poster: string }) {
  return (
    <div className="panel__media-wrap" aria-hidden="true">
      <video
        className="panel__media"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
}
