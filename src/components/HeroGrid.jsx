import React, { useCallback, useEffect, useRef, useState } from "react";

const AUTO_CYCLE_MS = 4500;
const EXIT_MS = 80;
const GRID_CELL_COUNT = 20;

const NetsuiteMark = () => (
  <svg viewBox="0 0 28 28" className="h-full w-full" aria-hidden="true">
    <path
      fill="currentColor"
      d="M5 23V5h4.6L18.4 14V5H23v18h-4.6L9.6 14v9H5Z"
    />
  </svg>
);

const SalesforceMark = () => (
  <svg viewBox="0 0 54 34" className="h-full w-full" aria-hidden="true">
    <path
      fill="currentColor"
      d="M14.6 30c-5.9 0-10.6-4.8-10.6-10.7 0-5.9 4.7-10.6 10.6-10.6 1.4 0 2.7.2 3.9.7C20.4 4.7 25.6 2 31.3 2c7.6 0 13.7 6.1 13.7 13.7 3 1 5 3.8 5 7.1 0 4.2-3.3 7.2-7.7 7.2H14.6Z"
    />
  </svg>
);

const serviceTiles = [
  {
    id: "netsuite",
    top: 1,
    left: 1,
    label: "NETSUITE",
    theme: "royal",
    Logo: NetsuiteMark,
    haloStrength: 1,
    focusRgb: "44 67 166",
    spillCells: [
      { top: -1, left: 0, strength: 0.24 },
      { top: 0, left: -1, strength: 0.22 },
      { top: 0, left: 1, strength: 0.16 },
      { top: 1, left: 0, strength: 0.28 },
      { top: 1, left: 1, strength: 0.16 },
    ],
  },
  {
    id: "salesforce",
    top: 2,
    left: 2,
    label: "salesforce",
    theme: "sky",
    Logo: SalesforceMark,
    haloStrength: 0.96,
    focusRgb: "63 193 242",
    spillCells: [
      { top: -1, left: 0, strength: 0.2 },
      { top: 0, left: -1, strength: 0.24 },
      { top: 0, left: 1, strength: 0.16 },
      { top: 1, left: 0, strength: 0.22 },
      { top: -1, left: -1, strength: 0.14 },
    ],
  },
  {
    id: "ai-services",
    top: 3,
    left: 1,
    label: "AI services",
    theme: "green",
    haloStrength: 0.92,
    focusRgb: "142 239 85",
    spillCells: [
      { top: -1, left: 0, strength: 0.26 },
      { top: 0, left: -1, strength: 0.16 },
      { top: 0, left: 1, strength: 0.2 },
      { top: 1, left: 0, strength: 0.16 },
      { top: -1, left: 1, strength: 0.16 },
    ],
  },
];

const HeroGrid = () => {
  const [activeTileId, setActiveTileId] = useState(serviceTiles[0].id);
  const [exitingTileId, setExitingTileId] = useState(null);
  const [hoveredTileId, setHoveredTileId] = useState(null);
  const activeTileIdRef = useRef(serviceTiles[0].id);
  const exitTimerRef = useRef(null);

  const clearExitTimer = useCallback(() => {
    if (exitTimerRef.current !== null) {
      window.clearTimeout(exitTimerRef.current);
      exitTimerRef.current = null;
    }
  }, []);

  const focusTile = useCallback(
    (nextTileId) => {
      const currentTileId = activeTileIdRef.current;

      if (currentTileId === nextTileId) {
        return;
      }

      clearExitTimer();
      setExitingTileId(currentTileId);
      setActiveTileId(nextTileId);
      activeTileIdRef.current = nextTileId;

      exitTimerRef.current = window.setTimeout(() => {
        setExitingTileId((currentExitingTileId) =>
          currentExitingTileId === currentTileId ? null : currentExitingTileId
        );
        exitTimerRef.current = null;
      }, EXIT_MS);
    },
    [clearExitTimer]
  );

  useEffect(() => {
    if (hoveredTileId !== null) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      const currentIndex = serviceTiles.findIndex(
        (tile) => tile.id === activeTileIdRef.current
      );
      const nextTile = serviceTiles[(currentIndex + 1) % serviceTiles.length];
      focusTile(nextTile.id);
    }, AUTO_CYCLE_MS);

    return () => window.clearInterval(intervalId);
  }, [focusTile, hoveredTileId]);

  useEffect(() => () => clearExitTimer(), [clearExitTimer]);

  const getTileState = useCallback(
    (tileId) => {
      if (tileId === activeTileId) {
        return "is-active";
      }

      if (tileId === exitingTileId) {
        return "is-exiting";
      }

      return "is-idle";
    },
    [activeTileId, exitingTileId]
  );

  return (
    <div
      aria-hidden="true"
      className="hero-grid-shell relative mx-auto flex justify-center lg:mx-0"
    >
      <div className="hero-grid-stage">
        <div
          className="hero-grid-panel"
          data-active-tile={activeTileId}
          onPointerLeave={() => setHoveredTileId(null)}
        >
          <div className="hero-grid-cells">
            {Array.from({ length: GRID_CELL_COUNT }, (_, index) => (
              <span key={index} className="hero-grid-cell" />
            ))}
          </div>

          <div className="hero-grid-ambient">
            {serviceTiles.map((tile) => {
              const tileState = getTileState(tile.id);

              return (
                <React.Fragment key={`${tile.id}-ambient`}>
                  <span
                    className={`hero-grid-halo ${tileState}`}
                    style={{
                      top: `calc((${tile.top} - 0.72) * var(--hero-grid-cell))`,
                      left: `calc((${tile.left} - 0.72) * var(--hero-grid-cell))`,
                      "--hero-grid-tile-rgb": tile.focusRgb,
                      "--hero-grid-halo-strength": `${tile.haloStrength}`,
                    }}
                  />
                  <span
                    className={`hero-grid-core ${tileState}`}
                    style={{
                      top: `calc(${tile.top} * var(--hero-grid-cell))`,
                      left: `calc(${tile.left} * var(--hero-grid-cell))`,
                      "--hero-grid-tile-rgb": tile.focusRgb,
                      "--hero-grid-core-strength": `${tile.haloStrength}`,
                    }}
                  />

                  {tile.spillCells.map((spillCell, index) => (
                    <span
                      key={`${tile.id}-spill-${index}`}
                      className={`hero-grid-spill ${tileState}`}
                      style={{
                        top: `calc(${tile.top + spillCell.top} * var(--hero-grid-cell))`,
                        left: `calc(${tile.left + spillCell.left} * var(--hero-grid-cell))`,
                        "--hero-grid-tile-rgb": tile.focusRgb,
                        "--hero-grid-spill-strength": `${spillCell.strength}`,
                      }}
                    />
                  ))}
                </React.Fragment>
              );
            })}
          </div>

          <div className="hero-grid-cards">
            {serviceTiles.map((tile) => {
              const Logo = tile.Logo;
              const tileState = getTileState(tile.id);

              return (
                <div
                  key={tile.id}
                  className={`hero-grid-tile hero-grid-tile--${tile.theme} ${tileState}`}
                  style={{
                    top: `calc(${tile.top} * var(--hero-grid-cell))`,
                    left: `calc(${tile.left} * var(--hero-grid-cell))`,
                  }}
                  onPointerEnter={() => {
                    setHoveredTileId(tile.id);
                    focusTile(tile.id);
                  }}
                  onPointerLeave={() => {
                    setHoveredTileId((currentTileId) =>
                      currentTileId === tile.id ? null : currentTileId
                    );
                  }}
                >
                  <span className="hero-grid-tile-bloom" />

                  <div className="hero-grid-tile-surface">
                    {Logo ? (
                      <span className="hero-grid-logo">
                        <Logo />
                      </span>
                    ) : null}

                    <span
                      className={`hero-grid-label hero-grid-label--${tile.id}`}
                    >
                      {tile.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroGrid;
