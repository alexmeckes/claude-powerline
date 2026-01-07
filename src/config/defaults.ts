import type { PowerlineConfig } from "./loader";

export const DEFAULT_CONFIG: PowerlineConfig = {
  theme: "dark",
  display: {
    style: "powerline",
    charset: "unicode",
    colorCompatibility: "auto",
    autoWrap: true,
    padding: 1,
    lines: [
      {
        segments: {
          directory: {
            enabled: true,
            style: "basename",
          },
          git: {
            enabled: true,
            showSha: false,
            showWorkingTree: false,
            showOperation: false,
            showTag: false,
            showTimeSinceCommit: false,
            showStashCount: false,
            showUpstream: false,
            showRepoName: false,
          },
          model: { enabled: true },
        },
      },
      {
        segments: {
          session: {
            enabled: true,
            type: "tokens",
            costSource: "calculated",
            showCompactCount: true,
          },
        },
      },
      {
        segments: {
          context: {
            enabled: true,
            showPercentageOnly: false,
            style: "bar",
            barWidth: 10,
            showBarPercentage: true,
            showBarTokens: true,
            thresholds: {
              low: 50,
              high: 80,
            },
          },
        },
      },
    ],
  },
  budget: {
    session: {
      warningThreshold: 80,
    },
    today: {
      warningThreshold: 80,
      amount: 50,
    },
    block: {
      warningThreshold: 80,
      amount: 15,
    },
  },
  modelContextLimits: {
    default: 200000,
    sonnet: 200000,
    opus: 200000,
  },
};
