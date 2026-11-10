/**
 * Tihar Nepal - Authentic Web Audio Synthesizer
 * Generates traditional Nepali Madal drum beats and temple bell chimes using the Web Audio API.
 */

let audioCtx = null;
let isPlayingMadal = false;
let madalInterval = null;
let currentBpm = 96;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || /** @type {any} */ (window).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Play a synthesized Madal "Dha" (Heavy bass head with syahi damping)
 */
export function playMadalDha() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Bass fundamental
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(65, now + 0.18);

    gain.gain.setValueAtTime(1.0, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.3);

    // Subtle resonance body
    const bodyOsc = ctx.createOscillator();
    const bodyGain = ctx.createGain();
    bodyOsc.type = "triangle";
    bodyOsc.frequency.setValueAtTime(190, now);
    bodyOsc.frequency.exponentialRampToValueAtTime(110, now + 0.12);
    bodyGain.gain.setValueAtTime(0.35, now);
    bodyGain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

    bodyOsc.connect(bodyGain);
    bodyGain.connect(ctx.destination);

    bodyOsc.start(now);
    bodyOsc.stop(now + 0.2);
  } catch (err) {
    console.warn("Audio play blocked or unavailable", err);
  }
}

/**
 * Play a synthesized Madal "Ta" / "Tin" (Sharp high rim hit on right face)
 */
export function playMadalTin() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(480, now);
    osc.frequency.exponentialRampToValueAtTime(320, now + 0.09);

    gain.gain.setValueAtTime(0.85, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.15);

    // Noise click for rim snap
    const bufferSize = ctx.sampleRate * 0.03;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 2400;

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.4, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(ctx.destination);

    noise.start(now);
  } catch (err) {
    console.warn("Audio play blocked", err);
  }
}

/**
 * Play a synthesized traditional Brass Temple Bell / Ghanti tone
 */
export function playTempleBell() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    const harmonics = [880, 1760, 2640, 3520];
    const decayTimes = [2.2, 1.4, 0.9, 0.5];
    const amplitudes = [0.45, 0.25, 0.15, 0.08];

    harmonics.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(amplitudes[idx], now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + decayTimes[idx]);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + decayTimes[idx]);
    });
  } catch (err) {
    console.warn("Bell audio error", err);
  }
}

/**
 * Start loop of traditional Nepali Deusi-Bhailo rhythm (Khyali / Jhyaure beat)
 */
export function startMadalRhythm(onBeatCallback) {
  if (isPlayingMadal) return;
  isPlayingMadal = true;
  getAudioContext();

  // 8-step rhythm pattern:
  // Step 0: Dha (bass)
  // Step 1: Rest/soft
  // Step 2: Tin (treble)
  // Step 3: Tin
  // Step 4: Ta
  // Step 5: Dha
  // Step 6: Tin
  // Step 7: Ta
  const pattern = [
    { type: "dha" },
    { type: null },
    { type: "tin" },
    { type: "tin" },
    { type: "dha" },
    { type: null },
    { type: "tin" },
    { type: "ta" }
  ];

  let step = 0;
  const intervalMs = (60 / currentBpm / 2) * 1000;

  madalInterval = setInterval(() => {
    const current = pattern[step % pattern.length];
    if (current.type === "dha") {
      playMadalDha();
    } else if (current.type === "tin" || current.type === "ta") {
      playMadalTin();
    }
    if (onBeatCallback) {
      onBeatCallback(step % pattern.length);
    }
    step++;
  }, intervalMs);

  return true;
}

export function stopMadalRhythm() {
  if (madalInterval) {
    clearInterval(madalInterval);
    madalInterval = null;
  }
  isPlayingMadal = false;
}

export function isMadalPlaying() {
  return isPlayingMadal;
}

export function setMadalBpm(bpm) {
  currentBpm = Math.max(60, Math.min(160, bpm));
}
