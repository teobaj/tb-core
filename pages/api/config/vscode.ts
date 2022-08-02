const config = {
  "editor.fontWeight": "500",
  "workbench.iconTheme": "vscode-icons",
  "editor.tabSize": 2,
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
  },
  "[svelte]": {
    "editor.defaultFormatter": "svelte.svelte-vscode",
  },
  "editor.formatOnSave": true,
  "editor.fontFamily": "Hack NF",
  "vim.useSystemClipboard": true,
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features",
  },
  "vim.statusBarColorControl": true,
  "vim.statusBarColors.normal": ["#8FBCBB", "#434C5E"],
  "vim.statusBarColors.insert": "#BF616A",
  "vim.statusBarColors.visual": "#B48EAD",
  "vim.statusBarColors.visualline": "#B48EAD",
  "vim.statusBarColors.visualblock": "#A3BE8C",
  "vim.statusBarColors.replace": "#D08770",
  "vim.statusBarColors.commandlineinprogress": "#007ACC",
  "vim.statusBarColors.searchinprogressmode": "#007ACC",
  "vim.statusBarColors.easymotionmode": "#007ACC",
  "vim.statusBarColors.easymotioninputmode": "#007ACC",
  "vim.statusBarColors.surroundinputmode": "#007ACC",
  "vim.normalModeKeyBindings": [
    {
      before: ["s", "s"],
      commands: [":split"],
      silent: true,
    },
    {
      before: ["s", "v"],
      commands: [":vsplit"],
      silent: true,
    },
    {
      before: ["s", "h"],
      after: ["<C-w>", "h"],
      silent: true,
    },
    {
      before: ["s", "l"],
      after: ["<C-w>", "l"],
      silent: true,
    },
    {
      before: ["s", "j"],
      after: ["<C-w>", "j"],
      silent: true,
    },
    {
      before: ["s", "k"],
      after: ["<C-w>", "k"],
      silent: true,
    },
    {
      before: ["<S-Tab>"],
      commands: [":tabprev"],
      silent: true,
    },
    {
      before: ["<Tab>"],
      commands: [":tabnext"],
      silent: true,
    },
    {
      before: ["f", "f"],
      commands: ["workbench.action.quickOpen"],
      silent: true,
    },
    {
      before: ["f", "e"],
      commands: ["workbench.action.findInFiles"],
      silent: true,
    },
    {
      before: ["f", "s"],
      commands: ["actions.find"],
      silent: true,
    },
    {
      before: ["s", "t"],
      commands: ["workbench.action.terminal.toggleTerminal"],
      silent: true,
    },
  ],
  "workbench.colorCustomizations": {
    "statusBar.background": "#B48EAD",
    "statusBar.noFolderBackground": "#B48EAD",
    "statusBar.debuggingBackground": "#B48EAD",
    "statusBar.foreground": "#434C5E",
    "statusBar.debuggingForeground": "#434C5E",
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
  },
};

import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.json(config);
}
