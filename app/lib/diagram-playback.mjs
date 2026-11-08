/** One bounded example, shared by the React view and the standalone atlas. */
export function mountDiagramPlayback(figure) {
  const play = figure.querySelector('[data-diagram-play]');
  const replay = figure.querySelector('[data-diagram-replay]');
  const status = figure.querySelector('[data-diagram-status]');
  const token = figure.querySelector('[data-diagram-token]');
  if (!play || !replay || !status || !token || typeof token.animate !== 'function') return () => {};
  const copy = JSON.parse(figure.getAttribute('data-playback-copy'));
  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  const route = [...figure.querySelectorAll('[data-playback-order]')].sort((a, b) => Number(a.dataset.playbackOrder) - Number(b.dataset.playbackOrder));
  let animation;
  let state = 'ready';

  function show(next, announce = true) {
    state = next;
    figure.dataset.playbackState = next;
    play.disabled = media.matches;
    replay.disabled = media.matches || next === 'ready';
    play.textContent = next === 'running' ? copy.pause : next === 'paused' ? copy.resume : copy.play;
    status.setAttribute('aria-live', announce ? 'polite' : 'off');
    const message = media.matches ? copy.reduced : copy[next];
    if (status.textContent !== message) status.textContent = message;
    token.style.opacity = next === 'running' || next === 'paused' ? '1' : '0';
  }

  function start() {
    if (media.matches) return;
    animation?.cancel();
    const frames = [];
    // Short invisible gaps distinguish separate messages and node processing.
    route.forEach((path, index) => {
      const length = path.getTotalLength();
      for (let sample = 0; sample <= 32; sample++) {
        const progress = sample / 32;
        const point = path.getPointAtLength(length * progress);
        frames.push({ transform: `translate(${point.x}px, ${point.y}px)`, opacity: sample === 0 || sample === 32 ? 0 : 1, offset: (index + progress * .88) / route.length });
      }
    });
    frames.push({ ...frames[frames.length - 1], offset: 1, opacity: 0 });
    animation = token.animate(frames, { duration: route.length * 760, iterations: 1, easing: 'linear' });
    animation.onfinish = () => show('done');
    show('running');
  }
  function toggle() {
    if (media.matches) return;
    if (state === 'running') { animation.pause(); show('paused'); }
    else if (state === 'paused') { animation.play(); show('running'); }
    else start();
  }
  function preferencesChanged() { const active = state === 'running' || state === 'paused'; animation?.cancel(); show('ready', active); }
  function visibilityChanged() {
    if (document.hidden && state === 'running') { animation.pause(); show('paused'); }
  }
  play.addEventListener('click', toggle);
  replay.addEventListener('click', start);
  media.addEventListener('change', preferencesChanged);
  document.addEventListener('visibilitychange', visibilityChanged);
  show('ready', false);
  return () => {
    animation?.cancel();
    play.removeEventListener('click', toggle);
    replay.removeEventListener('click', start);
    media.removeEventListener('change', preferencesChanged);
    document.removeEventListener('visibilitychange', visibilityChanged);
  };
}
